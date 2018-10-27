import React from 'react'
import { Animate } from 'react-simple-animate'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'typeface-fjalla-one'
import colors from '../styled/colors'
import Menu from '../components/menu'
import './layout.css'

const Cover = styled.div`
  background: ${colors.primary};
  z-index: 100;
  color: ${colors.white};
  font-family: 'Fjalla One', Helvetica;
  font-size: 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuContext = React.createContext({
  setMenuState: () => {},
})

export default class Layout extends React.PureComponent {
  state = {
    showMenu: false,
    isMenuVisible: false,
  }

  setMenuState = () => {
    this.setState(state => {
      if (state.showMenu) {
        clearTimeout(this.menuTimer)
        this.menuTimer = setTimeout(() => {
          this.setState({
            isMenuVisible: false,
          })
        }, 800)
      }

      return {
        showMenu: !state.showMenu,
        ...(!state.showMenu ? { isMenuVisible: true } : null),
      }
    })
  }

  componentDidMount() {
    if (document.readyState === 'complete') {
      this.timer = setTimeout(() => {
        this.pageLoaded()
      })
    } else {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          this.pageLoaded()
        }
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    clearTimeout(this.menuTimer)
  }

  pageLoaded = () => {
    document.querySelector('body').style.visibility = 'visible'
    this.setState({
      loaded: true,
    })
  }

  timer

  menuTimer

  render() {
    const { showMenu, loaded, isMenuVisible } = this.state

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
            >
              <html lang="en" />
            </Helmet>
            <MenuContext.Provider
              value={{
                setMenuState: this.setMenuState,
              }}
            >
              <Animate
                play={loaded}
                startStyle={{ opacity: 1 }}
                endStyle={{ opacity: 0 }}
                durationSeconds={0.5}
                onCompleteStyle={{ display: 'none' }}
              >
                <Cover />
              </Animate>

              <div
                style={{
                  visibility: isMenuVisible ? 'visible' : 'hidden',
                }}
              >
                <Animate
                  play={showMenu}
                  startStyle={{
                    transform: 'translateX(200px)',
                    zIndex: -1,
                  }}
                  endStyle={{
                    transform: 'translateX(0)',
                    zIndex: 0,
                  }}
                  durationSeconds={0.8}
                  easeType="cubic-bezier(0.19, 1, 0.22, 1)"
                  render={style => <Menu {...style} />}
                />
              </div>

              <Animate
                play
                startStyle={{
                  background: colors.white,
                  width: '100%',
                  overflow: 'hidden',
                }}
                endStyle={{
                  background: colors.white,
                  width: '100%',
                  overflow: 'hidden',
                  boxShadow: `0 0 10px ${colors.black}`,
                  ...(showMenu
                    ? {
                        transform: 'translateX(300px)',
                      }
                    : null),
                }}
                durationSeconds={0.8}
                easeType="cubic-bezier(0.19, 1, 0.22, 1)"
              >
                <div
                  onClick={() => {
                    if (this.state.showMenu) {
                      this.setState({
                        showMenu: false,
                      })
                    }
                  }}
                >
                  {this.props.children}
                </div>
              </Animate>
            </MenuContext.Provider>
          </>
        )}
      />
    )
  }
}
