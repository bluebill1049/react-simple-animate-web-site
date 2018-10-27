import React from 'react'
import { Animate } from 'react-simple-animate'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'typeface-fjalla-one'
import colors from '../styled/colors'
import './layout.css'

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: ${colors.secondary};
  z-index: -1;
  
  & > ul {
    list-style: none;
    color: ${colors.white}
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
    
    & > ul {
      list-style-type: disc;
      text-transform: none;
    }
  }
    
  & li {
    padding: 10px 0;
    border-bottom: 1px solid ${colors.primary};
  }
  
  & a {
    color: ${colors.white};
    text-decoration: none;
  }
`

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
  }

  setMenuState = () => {
    this.setState(state => {
      return {
        showMenu: !state.showMenu,
      }
    })
  }

  componentDidMount() {
    if (document.readyState === 'complete') {
      this.timer = setTimeout(() => {
        document.querySelector('body').style.visibility = 'visible';
        this.setState({
          loaded: true,
        })
      })
    } else {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          document.querySelector('body').style.visibility = 'visible';
          this.setState({
            loaded: true,
          })
        }
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  ready = false

  timer

  render() {
    const { showMenu, loaded } = this.state

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
                durationSeconds={1}
                onCompleteStyle={{ display: 'none' }}
              >
                <Cover />
              </Animate>

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
                {this.props.children}
              </Animate>

              <Animate
                play={showMenu}
                startStyle={{
                  transform: 'translateX(200px)',
                }}
                endStyle={{
                  transform: 'translateX(0)',
                }}
                durationSeconds={0.8}
                easeType="cubic-bezier(0.19, 1, 0.22, 1)"
                render={style => (
                  <Menu {...style}>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/docs">Introduction</Link>
                      </li>
                      <li>
                        <Link to="/basic">{`<Animate />`}</Link>
                      </li>
                      <li>
                        <Link to="/advanced">{`<AnimateKeyframes />`}</Link>
                      </li>
                      <li>
                        <Link to="/api-reference">{`<AnimateGroup />`}</Link>
                      </li>
                    </ul>
                  </Menu>
                )}
              />
            </MenuContext.Provider>
          </>
        )}
      />
    )
  }
}
