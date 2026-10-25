import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'

const siteUrl = 'https://react-simple-animate.now.sh'
const pages = {
  '/': {
    title: 'UI animation made simple — React Simple Animate',
    description: 'Small, declarative animations for React. Animate transitions, keyframes, and sequences with a tiny API.',
  },
  '/basics': {
    title: 'Animation, minus the learning curve. — React Simple Animate',
    description: 'Install React Simple Animate, import a primitive, and connect it to component state.',
  },
  '/animate': {
    title: '<Animate /> — React Simple Animate',
    description: 'Transition a component from style A to style B and back again with the Animate component.',
  },
  '/animate-keyframes': {
    title: '<AnimateKeyframes /> — React Simple Animate',
    description: 'Create expressive multi-step and repeating CSS animations with AnimateKeyframes.',
  },
  '/animate-group': {
    title: '<AnimateGroup /> — React Simple Animate',
    description: 'Coordinate React animations into a sequence with timing and overlap controls.',
  },
  '/hooks': {
    title: 'Animation hooks — React Simple Animate',
    description: 'Use useAnimate, useAnimateKeyframes, and useAnimateGroup to control motion in custom React markup.',
  },
  '/lifecycle': {
    title: 'Control every animation run. — React Simple Animate',
    description: 'Use animation lifecycle callbacks, cancellation, and custom render handlers in React Simple Animate 4.',
  },
  '/advanced': {
    title: 'Advanced motion patterns. — React Simple Animate',
    description: 'Explore animation sequences, animated SVG, reduced motion, and performant CSS transforms.',
  },
}

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })

try {
  const [{ render }, shell] = await Promise.all([
    server.ssrLoadModule('/src/entry-server.jsx'),
    readFile(path.resolve('dist/index.html'), 'utf8'),
  ])

  for (const [route, metadata] of Object.entries(pages)) {
    const content = render(route)
    const canonical = `${siteUrl}${route === '/' ? '/' : route}`
    const description = escapeHtml(metadata.description)
    const title = escapeHtml(metadata.title)
    const structuredData = route === '/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'React Simple Animate',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Any',
          softwareVersion: '4.0.0',
          description: metadata.description,
          url: canonical,
          downloadUrl: 'https://www.npmjs.com/package/react-simple-animate',
          author: { '@type': 'Person', name: 'bluebill1049', url: 'https://bluebill1049.dev' },
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: metadata.title.replace(/ — React Simple Animate$/, ''),
          description: metadata.description,
          url: canonical,
          inLanguage: 'en',
          author: { '@type': 'Person', name: 'bluebill1049', url: 'https://bluebill1049.dev' },
          about: { '@type': 'SoftwareApplication', name: 'React Simple Animate', softwareVersion: '4.0.0' },
        }
    const structuredDataTag = `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`
    let html = shell
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
      .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
      .replace('</head>', `<link rel="canonical" href="${canonical}" />\n    <meta property="og:title" content="${title}" />\n    <meta property="og:description" content="${description}" />\n    <meta property="og:url" content="${canonical}" />\n    <meta property="og:type" content="website" />\n    <meta name="twitter:card" content="summary" />\n    ${structuredDataTag}\n    </head>`)

    const outputDir = route === '/' ? path.resolve('dist') : path.resolve('dist', `.${route}`)
    await mkdir(outputDir, { recursive: true })
    await writeFile(path.join(outputDir, 'index.html'), html)
    console.log(`Prerendered ${route}`)
  }
} finally {
  await server.close()
}
