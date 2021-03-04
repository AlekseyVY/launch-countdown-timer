import styled from "styled-components";


export const MainContainer = styled.div`
  width: 100%;
  max-width: 144rem;
  min-height: calc(100vh - 3px);
  background: linear-gradient(0.50turn, #1D1E28, #261A2D);
  overflow: hidden;
`


export const StarContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 3px);
  background-image: url(${props => props.bg});
  position: relative;
`

export const Hills = styled.div`
  width: 100%;
  height: 26.6rem;
  background: url(${props => props.hills}) no-repeat;
  position: absolute;
  left: 0;
  bottom: -10%;
`