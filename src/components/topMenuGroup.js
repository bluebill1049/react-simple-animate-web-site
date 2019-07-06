import React from 'react'
import styled from 'styled-components'
import { Animate } from 'react-simple-animate'
import { MenuContext } from '../components/layout'
import colors from '../styled/colors'
import GitHubButton from 'react-github-btn'

const GitHub = styled.span`
  position: absolute;
  top: 15px;
  right: 156px;
`

const Medium = styled.span`
  position: absolute;
  top: 18px;
  right: 120px;
`

const Menu = styled.span`
  position: absolute;
  top: 16px;
  left: 20px;
  cursor: pointer;
  
  @media (min-width: 1024px) {
    display: none !important;
  }
`

const GitHubButtonWrapper = styled.span`
  position: absolute;
  right: 10px;
  top: 15px;
`

const style = {
  position: 'fixed',
  height: '50px',
  width: '50px',
  display: 'flex',
  left: 10,
  alignItems: 'center',
  justifyContent: 'center',
}

export default class TopMenuGroup extends React.PureComponent {
  state = {
    showFixedMenu: false,
  }

  animateMenu = () => {
    if (window.scrollY > 75) {
      this.setState({
        showFixedMenu: true,
      })
    } else {
      if (this.state.showFixedMenu) {
        this.setState({
          showFixedMenu: false,
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.animateMenu)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.animateMenu)
  }

  render() {
    const { showFixedMenu } = this.state

    return (
      <MenuContext.Consumer>
        {({ setMenuState }) => {
          return (
            <>
              <Animate
                play={showFixedMenu}
                start={{
                  top: 5,
                  ...style,
                }}
                delay={0.2}
                end={{
                  top: 10,
                  background: colors.secondary,
                  borderRadius: '100%',
                  zIndex: 1000,
                  ...style,
                }}
                render={style => (
                  <Menu onClick={setMenuState} {...style}>
                    <svg height="32px" viewBox="0 0 32 32" width="32px">
                      <path
                        fill="white"
                        d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
                      />
                    </svg>
                  </Menu>
                )}
              />
              <GitHubButtonWrapper>
              <GitHubButton href="https://github.com/bluebill1049/react-simple-animate" data-icon="octicon-star" data-show-count="true" aria-label="Star bluebill1049/react-simple-animate on GitHub">Star</GitHubButton>
              </GitHubButtonWrapper>
              <a rel="noopener noreferrer" href="https://github.com/bluebill1049/react-simple-animate" target="_blank">
                <GitHub>
                  <svg viewBox="0 0 496 512" height="30" aria-hidden="true" focusable="false" fill="currentColor">
                    <path
                      fill="white"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </GitHub>
              </a>
              <a
                href="https://medium.com/jsdownunder/react-ui-animation-made-simple-c2ff98056659"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Medium>
                  <svg
                    viewBox="0 0 512 512"
                    height="25"
                    aria-hidden="true"
                    focusable="false"
                    fill={colors.white}
                    className="Social__StyledIcon-sc-4j9mhd-3 isQvWb sc-EHOje xsqAG"
                  >
                    <path
                      fill={colors.white}
                      d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
                    />
                  </svg>
                </Medium>
              </a>
            </>
          )
        }}
      </MenuContext.Consumer>
    )
  }
}
