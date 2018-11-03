// @flow
import React from 'react'
import styled from 'styled-components'
import easyIcon from '../../images/easy.svg'
import cssIcon from '../../images/css.svg'
import ReactIconn from '../reactIcon'
import colors from '../../styled/colors'

const FeaturesWrapper = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  margin: 0;

  & > li {
    padding: 0 15px;
    margin-bottom: 30px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  @media (min-width: 1024px) {
    justify-content: center;

    & > li {
      padding: 0 40px;

      margin-bottom: 40px;
    }
  }
`

const Root = styled.div`
  margin: 20px 20px 0;
  border-bottom: 1px solid ${colors.grey};

  @media (min-width: 1024px) {
    margin-bottom: 20px;
  }
`

const IconWrapper = styled.span`
  margin-bottom: 10px;
  display: block;
  height: 40px;

  & > img,
  & > svg {
    height: 40px;
    display: block;
    margin: 0 auto;
  }

  & > svg {
    height: 35px;
  }

  @media (min-width: 768px) {
    height: 60px;

    & > img,
    & > svg {
      height: 60px;
    }

    & > svg {
      height: 50px;
    }
  }
`

export default function Features() {
  return (
    <Root>
      <FeaturesWrapper>
        <li>
          <IconWrapper>
            <img src={easyIcon} alt="Make React animation easy" />
          </IconWrapper>
          Make React animation easy
        </li>
        <li>
          <IconWrapper>
            <img src={cssIcon} alt="Follow CSS animation standard" />
          </IconWrapper>
          Follow CSS animation standard
        </li>
        <li>
          <IconWrapper>
            <ReactIconn alt="React the only dependency" />
          </IconWrapper>
          React the only dependency
        </li>
      </FeaturesWrapper>
    </Root>
  )
}
