// @flow
import React from 'react'
import styled from 'styled-components'
import easyIcon from '../../images/easy.svg'
import cssIcon from '../../images/css.svg'
import ReactIconn from '../reactIcon'
import colors from "../../styled/colors";

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
`

const Root = styled.div`
  margin: 20px 20px 0;
  border-bottom: 1px solid ${colors.grey};
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
