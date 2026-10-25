import { useEffect, useState } from 'react'
import { Animate, AnimateGroup, AnimateKeyframes, useAnimate } from 'react-simple-animate'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import logo from './images/logo.svg'

const links = [
  ['Basics', '/basics'],
  ['Animate', '/animate'],
  ['Keyframes', '/animate-keyframes'],
  ['Sequences', '/animate-group'],
  ['Hooks', '/hooks'],
  ['Lifecycle', '/lifecycle'],
  ['Advanced', '/advanced'],
]

const snippets = {
  animate: `import { Animate } from 'react-simple-animate'

<Animate
  play={isOpen}
  start={{ opacity: 0, transform: 'translateY(12px)' }}
  end={{ opacity: 1, transform: 'translateY(0)' }}
>
  <Panel />
</Animate>`,
  keyframes: `import { AnimateKeyframes } from 'react-simple-animate'

<AnimateKeyframes
  play
  duration={2.4}
  iterationCount="infinite"
  keyframes={[
    'transform: translateY(0)',
    'transform: translateY(-16px)',
    'transform: translateY(0)',
  ]}
>
  <Dot />
</AnimateKeyframes>`,
  group: `import { Animate, AnimateGroup } from 'react-simple-animate'

<AnimateGroup play={showItems}>
  {items.map((item, index) => (
    <Animate
      key={item}
      sequenceIndex={index}
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
    >
      <Item>{item}</Item>
    </Animate>
  ))}
</AnimateGroup>`,
  hook: `import { useAnimate } from 'react-simple-animate'

const { style, play } = useAnimate({
  start: { opacity: 0 },
  end: { opacity: 1 },
})

return <div style={style}>Ready.</div>`,
  lifecycle: `import { Animate } from 'react-simple-animate'

<Animate
  play={playing}
  cancel={cancelled}
  start={{ opacity: 0, transform: 'translateY(12px)' }}
  end={{ opacity: 1, transform: 'translateY(0)' }}
  onStart={() => setStatus('Started')}
  onComplete={() => setStatus('Completed')}
  onCancel={() => setStatus('Cancelled')}
>
  <Panel />
</Animate>`,
  advanced: `import { Animate, AnimateGroup, AnimateKeyframes } from 'react-simple-animate'

<AnimateGroup play>
  <Animate sequenceIndex={0} start={{ opacity: 0, transform: 'translateY(24px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
    <Card />
  </Animate>
  <Animate sequenceIndex={1} overlay={0.15} start={{ opacity: 0, transform: 'translateX(24px)' }} end={{ opacity: 1, transform: 'translateX(0)' }}>
    <Details />
  </Animate>
</AnimateGroup>

<AnimateKeyframes play iterationCount="infinite" direction="alternate"
  keyframes={['transform: scale(.96)', 'transform: scale(1.04)']}>
  <Accent />
</AnimateKeyframes>`,
}

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>,
  }
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function Meta({ title, description }) {
  useEffect(() => {
    document.title = `${title} — React Simple Animate`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [title, description])
  return null
}

function CopyCommand({ compact = false }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText('npm install react-simple-animate')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }
  return (
    <button className={`install-command ${compact ? 'compact' : ''}`} onClick={copy} aria-label="Copy install command">
      <span><b>$</b> npm install react-simple-animate</span>
      <span className="copy-state">{copied ? 'Copied!' : <Icon name="copy" />}</span>
    </button>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" aria-label="React Simple Animate home">
          <span className="logo-wrap"><img src={logo} alt="" /></span>
          <span>React Simple Animate</span>
        </Link>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
        </nav>
        <a className="github-link" href="https://github.com/beekai-oss/react-simple-animate" target="_blank" rel="noreferrer">
          <Icon name="github" /><span>GitHub</span>
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

function HeroMotion() {
  const [play, setPlay] = useState(true)
  return (
    <div className="motion-stage" aria-label="Interactive animation preview">
      <div className="stage-topline"><span>LIVE PREVIEW</span><span className="live-dot">RUNNING</span></div>
      <div className="orbit-scene">
        <AnimateKeyframes play pause={!play} duration={8} iterationCount="infinite" keyframes={['transform: rotate(0deg)', 'transform: rotate(360deg)']}>
          <div className="orbit orbit-one"><span /></div>
        </AnimateKeyframes>
        <AnimateKeyframes play pause={!play} duration={5} iterationCount="infinite" direction="reverse" keyframes={['transform: rotate(0deg)', 'transform: rotate(360deg)']}>
          <div className="orbit orbit-two"><span /></div>
        </AnimateKeyframes>
        <div className="core"><img src={logo} alt="" /></div>
        <span className="stage-label label-a">start</span><span className="stage-label label-b">end</span>
      </div>
      <div className="stage-controls">
        <button className="round-control" onClick={() => setPlay(!play)}>{play ? 'Pause' : 'Play'}</button>
        <div className="timeline"><span className={play ? 'is-playing' : ''} /></div>
        <code>{play ? 'play={true}' : 'pause={true}'}</code>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Meta title="UI animation made simple" description="Small, declarative animations for React. Animate transitions, keyframes, and sequences with a tiny API." />
      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span>03 primitives</span><i /> <span>One small library</span></div>
              <h1>Motion should feel <em>simple.</em></h1>
              <p className="lede">Declarative React animations built on familiar CSS. Move from A to B, craft keyframes, and orchestrate sequences—without a heavyweight runtime.</p>
              <div className="hero-actions">
                <Link className="button button-primary" to="/basics">Get started <Icon name="arrow" /></Link>
                <a className="button button-quiet" href="https://github.com/beekai-oss/react-simple-animate" target="_blank" rel="noreferrer">View on GitHub</a>
              </div>
              <CopyCommand />
            </div>
            <HeroMotion />
          </div>
        </section>

        <section className="marquee" aria-label="Library features"><div>CSS NATIVE <i /> ZERO CONFIG <i /> COMPONENTS + HOOKS <i /> REVERSIBLE <i /> TYPESCRIPT READY <i /> CSS NATIVE <i /> ZERO CONFIG</div></section>

        <section className="section shell">
          <div className="section-heading">
            <div><span className="section-index">01 / THE TOOLKIT</span><h2>Three ideas.<br />Endless motion.</h2></div>
            <p>Start with the mental model you already know. Every primitive maps cleanly to CSS while React controls when it moves.</p>
          </div>
          <div className="feature-grid">
            <FeatureCard number="01" title="Animate" copy="Transition between two style objects. Perfect for reveals, state changes, and micro-interactions." link="/animate" visual={<TransitionVisual />} />
            <FeatureCard number="02" title="Keyframes" copy="Build expressive, looping motion with the same keyframes you would write in CSS." link="/animate-keyframes" visual={<KeyframeVisual />} />
          <FeatureCard number="03" title="Sequences" copy="Coordinate individual animations with overlap and a shared play state." link="/animate-group" visual={<SequenceVisual />} />
          <FeatureCard number="04" title="Lifecycle" copy="Track starts, completions, and cancellations, then stop a run when your UI needs to." link="/lifecycle" visual={<TransitionVisual />} />
          </div>
        </section>

        <section className="code-section">
          <div className="shell code-grid">
            <div>
              <span className="section-index light">02 / HELLO, MOTION</span>
              <h2>A tiny API that reads like intent.</h2>
              <p>Describe where the element begins, where it ends, and let a boolean do the rest.</p>
              <Link className="text-link" to="/animate">Explore the Animate API <Icon name="arrow" /></Link>
            </div>
            <CodeBlock code={snippets.animate} />
          </div>
        </section>

        <section className="section shell principles">
          <span className="section-index">03 / BUILT FOR THE WEB</span>
          <div className="principle-grid">
            <h2>Animation that stays out of your way.</h2>
            <div className="principle-list">
              <article><span>01</span><div><h3>CSS at the core</h3><p>Use transforms, opacity, easing curves, and keyframes you already understand.</p></div></article>
              <article><span>02</span><div><h3>React in control</h3><p>Drive motion from state with components or hooks—whichever fits your codebase.</p></div></article>
              <article><span>03</span><div><h3>Small by design</h3><p>Focused primitives and no sprawling animation DSL to learn or maintain.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section shell comparison">
          <div className="comparison-heading"><div><span className="section-index">04 / PICK THE RIGHT TOOL</span><h2>Small surface.<br />Focused motion.</h2></div><div><p>React Simple Animate covers common UI motion with CSS transitions, keyframes, and sequences. The package has zero runtime dependencies beyond its React peer dependency.</p><CodeBlock code={`<Animate play={open}\n  start={{ opacity: 0, transform: 'translateY(12px)' }}\n  end={{ opacity: 1, transform: 'translateY(0)' }}>\n  <Panel />\n</Animate>`} /></div></div>
          <div className="comparison-table" role="table" aria-label="Animation library comparison">
            <div className="comparison-row comparison-labels" role="row"><span role="columnheader">Library</span><span role="columnheader">Approach</span><span role="columnheader">Use it when you need</span></div>
            <div className="comparison-row is-current" role="row"><strong role="cell">React Simple Animate</strong><span role="cell">CSS transitions and keyframes</span><span role="cell">A small API for everyday component motion and sequences.</span></div>
            <div className="comparison-row" role="row"><a role="cell" href="https://motion.dev/docs/react-animation" target="_blank" rel="noreferrer">Motion for React</a><span role="cell">Declarative motion components</span><span role="cell">Gestures, scroll triggers, layout changes, and enter/exit transitions.</span></div>
            <div className="comparison-row" role="row"><a role="cell" href="https://www.react-spring.dev/docs/getting-started" target="_blank" rel="noreferrer">React Spring</a><span role="cell">Spring physics and animated values</span><span role="cell">Physics-driven motion that responds to changing values.</span></div>
            <div className="comparison-row" role="row"><a role="cell" href="https://gsap.com/docs/v3/GSAP/Timeline/" target="_blank" rel="noreferrer">GSAP</a><span role="cell">Imperative tweens and timelines</span><span role="cell">Detailed choreography, precise timeline control, and a broad plugin ecosystem.</span></div>
          </div>
          <p className="comparison-note">These libraries solve different problems. Bundle size depends on the imports and build setup; compare your production bundles when file size is a deciding factor.</p>
        </section>
      </main>
    </>
  )
}

function FeatureCard({ number, title, copy, link, visual }) {
  return <article className="feature-card"><div className="feature-visual">{visual}<span>{number}</span></div><div className="feature-copy"><h3>{title}</h3><p>{copy}</p><Link to={link} aria-label={`Learn about ${title}`}><Icon name="arrow" /></Link></div></article>
}

function TransitionVisual() {
  const [play, setPlay] = useState(false)
  return <button className="visual-button" onClick={() => setPlay(!play)} aria-label="Play transition demo"><Animate play={play} start={{ transform: 'translateX(-42px) rotate(-8deg)' }} end={{ transform: 'translateX(42px) rotate(8deg)' }}><span className="demo-square">A→B</span></Animate></button>
}

function KeyframeVisual() {
  return <div className="keyframe-visual"><AnimateKeyframes play duration={2.2} iterationCount="infinite" direction="alternate" keyframes={['transform: translateY(22px) scale(.75)', 'transform: translateY(-22px) scale(1)']}><span /></AnimateKeyframes></div>
}

function SequenceVisual() {
  const [play, setPlay] = useState(false)
  return <button className="visual-button sequence-visual" onClick={() => setPlay(!play)} aria-label="Play sequence demo"><AnimateGroup play={play}>{['R','S','A'].map((letter, index) => <Animate key={letter} sequenceIndex={index} duration={0.25} start={{ opacity: .25, transform: 'translateY(8px)' }} end={{ opacity: 1, transform: 'translateY(-8px)' }}><span>{letter}</span></Animate>)}</AnimateGroup></button>
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1400) }
  return <div className="code-block"><div className="code-toolbar"><span><i /><i /><i /></span><button onClick={copy}>{copied ? 'Copied' : 'Copy'}</button></div><pre><code>{highlightCode(code)}</code></pre></div>
}

function highlightCode(code) {
  const tokenPattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Za-z][\w.]*)/g
  const parts = code.split(tokenPattern)
  let inJsxTag = false
  let inJsxExpression = false
  return parts.map((part, index) => {
    if (!part) return null
    if (part.startsWith('//') || part.startsWith('/*')) return <span className="token-comment" key={index}>{part}</span>
    if (/^["'`]/.test(part)) return <span className="token-string" key={index}>{part}</span>
    if (/^<\/?[A-Za-z]/.test(part)) {
      inJsxTag = true
      return <span className="token-tag" key={index}>{part}</span>
    }
    const pieces = part.split(/(\b(?:import|from|export|default|const|let|var|return|true|false|null|undefined|new|function|async|await)\b|\b\d+(?:\.\d+)?\b|[A-Za-z_$][\w$]*|[{}()[\],.;:=<>])/g)
    return pieces.map((piece, pieceIndex) => {
      if (!piece) return null
      if (inJsxTag && piece === '{') inJsxExpression = true
      if (inJsxTag && piece === '}') inJsxExpression = false
      if (piece === '>' && !inJsxExpression) inJsxTag = false
      let tokenClass = ''
      if (/^(import|from|export|default|const|let|var|return|new|function|async|await)$/.test(piece)) tokenClass = 'token-keyword'
      else if (/^(true|false|null|undefined)$/.test(piece)) tokenClass = 'token-boolean'
      else if (/^\d/.test(piece)) tokenClass = 'token-number'
      else if (inJsxTag && !inJsxExpression && /^[a-z][\w]*$/.test(piece)) tokenClass = 'token-attribute'
      else if (/^[A-Z][\w]*$/.test(piece)) tokenClass = 'token-component'
      else if (/^[{}()[\],.;:=<>]$/.test(piece)) tokenClass = 'token-punctuation'
      return tokenClass ? <span className={tokenClass} key={`${index}-${pieceIndex}`}>{piece}</span> : piece
    })
  })
}

const docs = {
  '/basics': {
    kicker: 'START HERE', title: 'Animation, minus the learning curve.', description: 'Install the package, import a primitive, and connect it to your component state.', demo: 'transition',
    sections: [
      ['Why React Simple Animate?', <><p>Animation libraries can ask you to learn a new styling system, a timeline API, or a large vocabulary. React Simple Animate stays close to the platform: write ordinary CSS values and use React state to decide when they run.</p><ul><li>Transition from one inline style object to another.</li><li>Express motion with CSS keyframes.</li><li>Chain animations into deliberate sequences.</li><li>Choose components or hooks.</li></ul></>],
      ['Install', <><CopyCommand compact /><p>Then import the primitive that matches the motion you want to create.</p><CodeBlock code={snippets.animate} /></>],
      ['The core model', <><p><code>start</code> describes the resting state, <code>end</code> describes the active state, and <code>play</code> moves between them. Toggle <code>play</code> back to reverse the transition.</p></>],
    ],
  },
  '/animate': {
    kicker: 'PRIMITIVE 01', title: '<Animate />', description: 'Transition a component from style A to style B—and back again.', demo: 'transition', code: snippets.animate,
    props: [['play','boolean','Starts or reverses the animation.'],['cancel','boolean','Cancels the current run when true. Clear before starting another run.'],['start','object','The component’s initial inline styles.'],['end','object','The inline styles to transition toward.'],['duration','number','Animation duration in seconds. Default: 0.3.'],['delay','number','Delay before the animation begins, in seconds.'],['easeType','string','A CSS easing value such as ease-out or cubic-bezier(...).'],['onStart','function','Runs once when the transition starts.'],['onComplete','function','Runs once when the transition completes.'],['onCancel','function','Runs once when the transition is cancelled.'],['render','function','Render a custom element and forward supplied transition handlers.']],
  },
  '/animate-keyframes': {
    kicker: 'PRIMITIVE 02', title: '<AnimateKeyframes />', description: 'Create expressive multi-step or repeating animation with CSS keyframes.', demo: 'keyframes', code: snippets.keyframes,
    props: [['play','boolean','Starts the keyframe animation.'],['pause','boolean','Pauses or resumes the current animation.'],['cancel','boolean','Cancels the current animation run.'],['keyframes','array','An array of CSS declaration strings or percentage objects.'],['duration','number','One cycle’s duration in seconds.'],['iterationCount','string | number','The number of cycles, or infinite.'],['direction','string','normal, reverse, alternate, or alternate-reverse.'],['fillMode','string','Controls styles before and after execution.'],['onStart / onComplete / onCancel','functions','Lifecycle callbacks for the current run.'],['render','function','Render a custom element and forward supplied animation handlers.']],
  },
  '/animate-group': {
    kicker: 'PRIMITIVE 03', title: '<AnimateGroup />', description: 'Turn individual motions into one coordinated sequence.', demo: 'sequence', code: snippets.group,
    props: [['play','boolean','Starts or reverses the full sequence.'],['sequenceIndex','number','Determines the order for each child animation.'],['sequenceId','string | number','Associates a child with an explicit sequence entry.'],['overlay','number','Starts an animation early by overlapping the previous one.'],['delay','number','Waits before an individual animation starts.']],
  },
  '/hooks': {
    kicker: 'HOOKS', title: 'Prefer functions?', description: 'The same animation model, ready to compose inside your own components.', demo: 'hook', code: snippets.hook,
    sections: [
      ['useAnimate', <p>Returns an inline <code>style</code> object and controls for a two-state transition. It mirrors the <code>&lt;Animate /&gt;</code> component API.</p>],
      ['useAnimateKeyframes', <p>Creates keyframe styles without adding a wrapper component. Use it for looping, paused, or multi-stage motion.</p>],
      ['useAnimateGroup', <p>Coordinates a list of animation style objects. It is useful when you need complete control over the rendered markup.</p>],
      ['Cancel and observe a hook animation', <HookCancelDemo />],
    ],
  },
  '/lifecycle': {
    kicker: 'NEW IN 4.0', title: 'Control every animation run.', description: 'Observe lifecycle events and cancel a run from a component or hook.', demo: 'lifecycle', code: snippets.lifecycle,
    sections: [
      ['Lifecycle callbacks', <><p><code>onStart</code>, <code>onComplete</code>, and <code>onCancel</code> run once per animation run. Animate uses CSS transition events; AnimateKeyframes uses CSS animation events. Events bubbling from child elements are ignored.</p><p>An infinite keyframe animation has no natural completion, so cancelling it calls <code>onCancel</code>.</p></>],
      ['Cancel a run', <><p>Set <code>cancel</code> to <code>true</code> to stop a component animation. Clear it before starting another run. <code>play</code> controls the direction separately.</p><p>Cancellation applies the target style without a transition for <code>Animate</code>. For keyframes, it removes the animation effect and restores the underlying style.</p></>],
      ['Render a custom element', <><p>The <code>render</code> prop supplies the animated style and native event handlers. Forward them to the element that owns the animation.</p><CodeBlock code={`<Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}\n  onStart={() => setStatus('Started')}\n  render={({ style, onTransitionStart, onTransitionEnd, onTransitionCancel }) => (\n    <span style={style} onTransitionStart={onTransitionStart}\n      onTransitionEnd={onTransitionEnd} onTransitionCancel={onTransitionCancel} />\n  )}\n/>`} /></>],
      ['Cancel from a hook', <><p><code>useAnimate</code>, <code>useAnimateKeyframes</code>, and <code>useAnimateGroup</code> return a <code>cancel()</code> method. Attach the returned event handlers to your animated element so lifecycle callbacks can run.</p></>],
    ],
  },
  '/advanced': {
    kicker: 'PATTERNS', title: 'Advanced motion patterns.', description: 'A few principles for polished motion that still feels fast and predictable.', demo: 'advanced', code: snippets.advanced,
    sections: [
      ['Sequence with intent', <><p>Use overlap to keep a sequence moving. A slight overlap lets the next item enter before the previous one finishes.</p><AdvancedPatternExample kind="sequence" /></>],
      ['Animate SVG', <><p>Transforms, opacity, stroke width, and dash offsets can animate like other CSS values. This orbit uses keyframes directly on an SVG graphic.</p><AdvancedPatternExample kind="svg" /></>],
      ['Respect reduced motion', <><p>Disable decorative movement when the user asks for reduced motion. The preview reads the browser preference and keeps its content visible.</p><AdvancedPatternExample kind="reduced-motion" /></>],
      ['Keep transforms cheap', <><p>Prefer opacity and transforms for frequent motion. They can move these elements without changing document layout.</p><AdvancedPatternExample kind="transforms" /></>],
    ],
  },
}

function DocsPage({ page }) {
  return <main className="docs"><Meta title={page.title.replace(/[<>/]/g, '')} description={page.description} /><section className="docs-hero"><div className="shell"><span className="section-index light">{page.kicker}</span><h1>{page.title}</h1><p>{page.description}</p></div></section><div className="shell docs-layout"><aside><span>ON THIS PAGE</span>{page.demo && <a href="#demo">Demo</a>}{page.code && <a href="#example">Example</a>}{page.sections?.map(([title]) => <a href={`#${slug(title)}`} key={title}>{title}</a>)}{page.props && <a href="#props">Props</a>}</aside><article className="docs-content">{page.demo && <DemoPanel type={page.demo} />}{page.code && <section id="example"><h2>Example</h2><CodeBlock code={page.code} /></section>}{page.sections?.map(([title, body], index) => <section id={slug(title)} key={title}><div className="docs-section-title">{page.kicker === 'PATTERNS' ? <Animate play delay={index * 0.08} duration={0.45} start={{ opacity: 0, transform: 'translateY(14px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}><h2>{title}</h2></Animate> : <h2>{title}</h2>}</div>{body}</section>)}{page.props && <section id="props"><h2>Props</h2><div className="props-table">{page.props.map(([name,type,copy]) => <div className="prop-row" key={name}><div><code>{name}</code><span>{type}</span></div><p>{copy}</p></div>)}</div></section>}</article></div></main>
}

function AdvancedPatternExample({ kind }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    if (kind !== 'reduced-motion') return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [kind])

  const snippets = {
    sequence: `import { Animate, AnimateGroup } from 'react-simple-animate'\n\n<AnimateGroup play>\n  {steps.map((step, index) => (\n    <Animate key={step.id} sequenceIndex={index} overlay={0.12}\n      start={{ opacity: 0, transform: 'translateY(16px)' }}\n      end={{ opacity: 1, transform: 'translateY(0)' }}>\n      <Step>{step.label}</Step>\n    </Animate>\n  ))}\n</AnimateGroup>`,
    svg: `import { AnimateKeyframes } from 'react-simple-animate'\n\n<AnimateKeyframes play duration={8} iterationCount="infinite"\n  keyframes={['transform: rotate(0deg)', 'transform: rotate(360deg)']}>\n  <svg viewBox="0 0 80 80" aria-label="Rotating orbit">\n    <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" />\n    <circle cx="70" cy="40" r="4" fill="currentColor" />\n  </svg>\n</AnimateKeyframes>`,
    'reduced-motion': `const [reduceMotion, setReduceMotion] = useState(false)\n\nuseEffect(() => {\n  const media = window.matchMedia('(prefers-reduced-motion: reduce)')\n  const update = () => setReduceMotion(media.matches)\n  update()\n  media.addEventListener('change', update)\n  return () => media.removeEventListener('change', update)\n}, [])\n\n<Animate play={!reduceMotion} start={start} end={end}>\n  <DecorativeShape />\n</Animate>`,
    transforms: `import { AnimateKeyframes } from 'react-simple-animate'\n\n<AnimateKeyframes play iterationCount="infinite" direction="alternate"\n  keyframes={[\n    'transform: translateY(8px) scale(.96)',\n    'transform: translateY(-8px) scale(1.04)',\n  ]}>\n  <div className="orb" />\n</AnimateKeyframes>`,
  }

  return <div className="pattern-example"><div className={`pattern-demo pattern-${kind}`}>
    {kind === 'sequence' && <AnimateGroup play>{['Plan','Build','Ship'].map((item, index) => <Animate key={item} sequenceIndex={index} overlay={0.12} duration={0.55} start={{ opacity: 0.1, transform: 'translateY(18px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}><span>{item}</span></Animate>)}</AnimateGroup>}
    {kind === 'svg' && <AnimateKeyframes play duration={6} iterationCount="infinite" keyframes={['transform: rotate(0deg)', 'transform: rotate(360deg)']}><svg viewBox="0 0 96 96" role="img" aria-label="Animated orbit"><ellipse cx="48" cy="48" rx="38" ry="16" /><ellipse cx="48" cy="48" rx="38" ry="16" transform="rotate(60 48 48)" /><circle cx="86" cy="48" r="4" /><circle cx="48" cy="48" r="6" /></svg></AnimateKeyframes>}
    {kind === 'reduced-motion' && <><Animate play={!reducedMotion} duration={0.8} start={{ opacity: 0.55, transform: 'translateY(10px)' }} end={{ opacity: 1, transform: 'translateY(-10px)' }}><span className="pattern-reduce-shape">{reducedMotion ? 'MOTION OFF' : 'MOTION ON'}</span></Animate><small>{reducedMotion ? 'Reduced motion is on' : 'Reduced motion is off'}</small></>}
    {kind === 'transforms' && <AnimateKeyframes play={!reducedMotion} duration={1.3} iterationCount="infinite" direction="alternate" keyframes={['transform: translateY(8px) scale(.92)', 'transform: translateY(-8px) scale(1.04)']}><span className="pattern-transform-orb" /></AnimateKeyframes>}
  </div><CodeBlock code={snippets[kind]} /></div>
}

function DemoPanel({ type }) {
  const [play, setPlay] = useState(true)
  const [cancel, setCancel] = useState(false)
  const [status, setStatus] = useState('Ready')
  return <section className="docs-demo" id="demo"><div className={`demo-canvas ${type === 'advanced' ? 'advanced-canvas' : ''}`}>{type === 'transition' && <Animate play={play} start={{ transform: 'translateX(-70px) rotate(-10deg)', borderRadius: '18px' }} end={{ transform: 'translateX(70px) rotate(10deg)', borderRadius: '50%' }}><div className="demo-object">A→B</div></Animate>}{type === 'keyframes' && <AnimateKeyframes play={play} duration={1.8} iterationCount="infinite" direction="alternate" keyframes={['transform: translateY(34px) rotate(-12deg)', 'transform: translateY(-34px) rotate(12deg)']}><div className="demo-object">LOOP</div></AnimateKeyframes>}{type === 'sequence' && <AnimateGroup play={play}>{['ONE','TWO','THREE'].map((item,index) => <Animate key={item} sequenceIndex={index} duration={.25} start={{ opacity:.18, transform:'translateY(12px)' }} end={{ opacity:1, transform:'translateY(-12px)' }}><span className="sequence-pill">{item}</span></Animate>)}</AnimateGroup>}{type === 'lifecycle' && <Animate play={play} cancel={cancel} duration={1.2} start={{ opacity: 0, transform: 'translateY(42px) rotate(-8deg)' }} end={{ opacity: 1, transform: 'translateY(-42px) rotate(8deg)' }} onStart={() => setStatus('Started')} onComplete={() => setStatus('Completed')} onCancel={() => setStatus('Cancelled')}><div className="demo-object">{status}</div></Animate>}{type === 'hook' && <HookAnimationPreview />}{type === 'advanced' && <AdvancedMotionDemo play={play} />}</div>{type === 'lifecycle' ? <div className="lifecycle-controls"><span aria-live="polite">Event: <b>{status}</b></span><button className="button button-primary" onClick={() => { setCancel(false); setPlay(!play); setStatus('Ready') }}>{play ? 'Reverse' : 'Play'} <Icon name="arrow" /></button><button className="button button-quiet" onClick={() => { setCancel(true); setStatus('Cancelling…') }}>Cancel run</button></div> : <button className="button button-primary" onClick={() => setPlay(!play)}>{play ? 'Replay sequence' : 'Play demo'} <Icon name="arrow" /></button>}</section>
}

function HookAnimationPreview() {
  const { style, play, onTransitionStart, onTransitionEnd, onTransitionCancel } = useAnimate({
    start: { opacity: 0.3, transform: 'translateX(-90px) rotate(-12deg)' },
    end: { opacity: 1, transform: 'translateX(90px) rotate(12deg)' },
    duration: 1.5,
  })
  useEffect(() => { play(true) }, [])
  return <div className="demo-object hook-preview" style={style} onTransitionStart={onTransitionStart} onTransitionEnd={onTransitionEnd} onTransitionCancel={onTransitionCancel}>useAnimate</div>
}

function AdvancedMotionDemo({ play }) {
  return <div className="motion-card-scene"><AnimateKeyframes play duration={2.4} iterationCount="infinite" direction="alternate" keyframes={['transform: translateY(6px) scale(.94)', 'transform: translateY(-8px) scale(1.04)']}><div className="scene-orb"><span /></div></AnimateKeyframes><div className="scene-caption"><span>SEQUENCE / 01</span><b>Make room for motion.</b></div><AnimateGroup play={play}>{[['01','ENTER'],['02','SETTLE'],['03','GLOW']].map(([number,label], index) => <Animate key={number} sequenceIndex={index} duration={.48} overlay={index ? .16 : 0} start={{ opacity: .1, transform: 'translateY(28px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}><span className="scene-step"><i>{number}</i>{label}</span></Animate>)}</AnimateGroup><div className="scene-rail" /></div>
}

function HookCancelDemo() {
  const { style, play, cancel, onTransitionStart, onTransitionEnd, onTransitionCancel } = useAnimate({
    start: { opacity: 0.35, transform: 'translateX(-42px)' },
    end: { opacity: 1, transform: 'translateX(42px)' },
    duration: 1.4,
    onStart: () => setStatus('Started'),
    onComplete: () => setStatus('Completed'),
    onCancel: () => setStatus('Cancelled'),
  })
  const [status, setStatus] = useState('Ready')
  return <div className="hook-demo"><div className="demo-canvas"><div className="demo-object" style={style} onTransitionStart={onTransitionStart} onTransitionEnd={onTransitionEnd} onTransitionCancel={onTransitionCancel}>HOOK</div></div><p aria-live="polite">Event: <b>{status}</b></p><div className="hook-demo-actions"><button className="button button-primary" onClick={() => { play(true); setStatus('Ready') }}>Play with hook</button><button className="button button-quiet" onClick={cancel}>Cancel run</button></div><CodeBlock code={`const { style, play, cancel, onTransitionStart, onTransitionEnd, onTransitionCancel } =\n  useAnimate({ start, end, onStart, onComplete, onCancel })\n\nreturn <div style={style} onTransitionStart={onTransitionStart}\n  onTransitionEnd={onTransitionEnd} onTransitionCancel={onTransitionCancel} />`} /></div>
}

function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-') }

function NotFound() {
  return <main className="not-found"><Meta title="Page not found" description="The requested page could not be found." /><span>404</span><h1>This page slipped out of frame.</h1><Link className="button button-primary" to="/">Back home <Icon name="arrow" /></Link></main>
}

function Footer() {
  return <footer><div className="shell footer-grid"><div><Link className="brand" to="/"><span className="logo-wrap"><img src={logo} alt="" /></span><span>React Simple Animate</span></Link><p>UI animation made simple.</p><p className="author-credit">Created by <a href="https://bluebill1049.dev" target="_blank" rel="noreferrer">bluebill1049</a>, creator of <a href="https://react-hook-form.com" target="_blank" rel="noreferrer">React Hook Form</a></p></div><div><span>LEARN</span><Link to="/basics">Get started</Link><Link to="/animate">API</Link><Link to="/advanced">Patterns</Link></div><div><span>PROJECT</span><a href="https://github.com/beekai-oss/react-simple-animate" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.npmjs.com/package/react-simple-animate" target="_blank" rel="noreferrer">npm</a><a href="https://github.com/beekai-oss/react-simple-animate/blob/master/LICENSE" target="_blank" rel="noreferrer">License</a></div></div><div className="shell footer-base"><span>Built for React, powered by CSS.</span><span>MIT License</span></div></footer>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return <><ScrollToTop /><Header /><Routes><Route path="/" element={<Home />} />{Object.entries(docs).map(([path,page]) => <Route key={path} path={path} element={<DocsPage page={page} />} />)}<Route path="*" element={<NotFound />} /></Routes><Footer /></>
}
