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
  }
`

export const StyledTag = styled(Tag)`
  position: absolute;
  height: 28px;
  top: -10px;
  left: 30px;
  width: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`
