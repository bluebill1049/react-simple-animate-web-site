import styled from 'styled-components'
import colors from './colors'

export const ContentContainer = styled.div`
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
`

export const PropsContentContainer = styled.div`
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;

  & ul {
    list-style: none;
    margin-left: 0;
  }

  & > div > ul > li > code {
    margin-bottom: 10px;
    display: block;
    padding: 10px;
    background: ${colors.secondary};
    color: ${colors.white};
  }

  @media (min-width: 1024px) {
    & div:nth-child(1) {
      max-width: 300px;
      padding-top: 20px;
      padding-right: 20px;
      float: left;

      & code {
        cursor: pointer;
        font-size: 13px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          height: 2px;
          background: ${colors.purple};
          bottom: -4px;
          left: 0;
          width: 0;
          transition: 0.2s all;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }

      & button {
        display: block;
        width: 100%;
        border-color: ${colors.primary};
        color: ${colors.primary};
        margin-top: 20px;
      }
    }

    & div:nth-child(2) {
      padding-top: 20px;
      max-width: 670px;
      float: right;
    }
  }
`

export const Side = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: sticky;
    top: 0;

    p {
      font-size: 13px;
      margin: 10px 0;
    }

    & > ol {
      margin-left: 0;

      & li {
        margin-bottom: 10px;
        list-style: none;

        & code {
          padding: 4px 10px;
        }
      }
    }
  }
`
