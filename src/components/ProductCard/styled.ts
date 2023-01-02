import styled from '@emotion/styled'
import { Tag } from '../Tag'

export const StyledCard = styled.div`
  padding: 42px 16px;
  position: relative;
  max-width: 280px;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    transform: skew(5deg);
    z-index: 1;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    left: -10px;
    background-color: #729ce4;
    transform: skew(-6deg);
    z-index: 1;
    border-radius: 8px;
  }
`

export const StyledTextWrapper = styled.div`
  padding-top: 15px;
  position: relative;
  z-index: 2;
`

export const StyledShopButton = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`

export const StyledProductThumb = styled.div`
  position: relative;
  background-color: #eceef2;
  border-radius: 8px;
  padding: 0 24px;
  & > img {
    position: relative;
    z-index: 3;
    transform: translateY(-16%);
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #edeff3;
    transform: skew(5deg);
    z-index: 2;
    border-radius: 8px;
  }
`

export const StyledTag = styled(Tag)`
  position: absolute;
  height: min-content;
  top: -10px;
  left: 10px;
  z-index: 100;
`
