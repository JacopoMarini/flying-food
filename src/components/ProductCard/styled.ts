import styled from '@emotion/styled'

export const StyledCard = styled.div`
  padding: 28px;
  position: relative;

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
