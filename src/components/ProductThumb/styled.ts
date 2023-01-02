import styled from '@emotion/styled'
import { Tag } from '../Tag'

export const StyledProductThumb = styled.div`
  position: relative;
  background-color: #eceef2;
  border-radius: 8px;
  height: 196px;
  width: 310px;
  & > img {
    max-width: 100%;
    position: absolute;
    z-index: 3;
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
  height: 28px;
  top: -10px;
  left: 10px;
  width: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`
