import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import colors from '../styled/colors'
import { ContentContainer } from '../styled/containers'
import Helmet from 'react-helmet'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { Link } from 'gatsby'

const InlineCode = styled.code`
  display: block;
  padding: 10px;
  background: ${colors.secondary};
  color: ${colors.white};
  margin-bottom: 30px;
`

const useAnimate = `import React from 'react'
import { useAnimate } from 'react-simple-aniamte';

export default function example {
  const [{style, play}, startAnimation] = useAnimate({
    startStyle: { opacity: 0 }, // refer <Animate /> for props information
    endStyle: { opacity: 1 }
  });
  
  return <>
    <div style={style}>show me</div>
    <button onClick={() => startAnimation(!play)}>Play</button>
  </>;
}`

const useKeyframes = `import React from 'react'
import { useAnimateKeyframes } from 'react-simple-aniamte';

export default function example {
  const [{style, play}, startAnimation] = useAnimateKeyframes({
    keyframes: [ 'opacity: 0', 'opacity: 1' ], // refer <AniamteKeyframes /> for props information
  });
  
  return <>
    <div style={style}>show me</div>
    <button onClick={() => startAnimation(!play)}>Play</button>
  </>;
}`

const useAnimateGroup = `import React from 'react'
import { useAnimateGroup } from 'react-simple-aniamte';

export default function example {
  const [{styles, play}, startAnimation] = useAnimateGroup({
    sequences: {
      {
        startStyle: { opacity: 0 }, // refer <Animate /> for props information
        endStyle: { opacity: 1 }
      },
      keyframes: [ 'opacity: 0', 'opacity: 1' ], // refer <AniamteKeyframes /> for props information
    }
  });
  
  return <>
    {styles.map(style) => <div style={style}>show me</div>}
    <button onClick={() => startAnimation(!play)}>Play</button>
  </>;
}`

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'Hooks - useAnimate and useAnimateKeyframes with react simple animate'}
      meta={[{ name: 'description', content: 'React animation basics' }]}
    >
      <html lang="en" />
    </Helmet>
    <ContentHeader location={location} title="Basics" />

    <ContentContainer>
      <h3>
        Animation with Custom Hooks
      </h3>

      <h3>useAnimate</h3>

      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate">
          <code>{`<Animate />`}</code>
        </Link>
        .
      </p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {useAnimate}
      </SyntaxHighlighter>

      <h3>useAnimateKeyframes</h3>

      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate-keyframes">
          <code>{`<AnimateKeyframes />`}</code>
        </Link>
        .
      </p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {useKeyframes}
      </SyntaxHighlighter>

      <h3>useAnimateGroup</h3>
      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate-group">
          <code>{`<AnimateGroup />`}</code>
        </Link>
        .
      </p>

      <SyntaxHighlighter language="javascript" style={docco}>
        {useAnimateGroup}
      </SyntaxHighlighter>
    </ContentContainer>
  </Layout>
)

export default AnimateGroup
