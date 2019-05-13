import React from 'react'
import { Animate } from 'react-simple-animate'
import styled from 'styled-components'
import 'typeface-fjalla-one'
import colors from '../styled/colors'
import Menu from '../components/menu'
import Footer from './footer'
import './layout.css'

const Root = styled.div`
  overflow: hidden;
  
  @media (min-width: 1024px) {
    overflow: initial;
  } 
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
    const { showMenu, isMenuVisible } = this.state

    return (
      <Root>
        <MenuContext.Provider
          value={{
            setMenuState: this.setMenuState,
          }}
        >
          <div
            style={{
              visibility: isMenuVisible ? 'visible' : 'hidden',
            }}
          >
            <Animate
              play={showMenu}
              start={{
                transform: 'translateX(200px)',
                zIndex: -1,
              }}
              end={{
                transform: 'translateX(0)',
                zIndex: 0,
              }}
              duration={0.6}
              easeType="cubic-bezier(0.19, 1, 0.22, 1)"
              render={style => <Menu {...{ ...style, location: this.props.location }} />}
            />
          </div>

          <Animate
            play
            start={{
              background: colors.white,
              width: '100%',
              // overflow: 'hidden',
            }}
            end={{
              background: colors.white,
              width: '100%',
              // overflow: 'hidden',
              boxShadow: `0 0 10px ${colors.black}`,
              ...(showMenu
                ? {
                    transform: 'translateX(300px)',
                  }
                : null),
            }}
            duration={0.8}
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
          <Footer />
        </MenuContext.Provider>
      </Root>
    )
  }
}
