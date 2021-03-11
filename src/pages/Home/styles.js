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
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Hills = styled.div`
  width: 100%;
  height: 26.6rem;
  background: url(${props => props.hills}) no-repeat;
  position: absolute;
  left: 0;
  bottom: -10%;
`

export const Content = styled.div`
  display: flex;
  min-height: 99vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const HeaderText = styled.h1`
  color: white;
  font-weight: bold;
  letter-spacing: 0.75rem;
  font-size: 2.2rem;
  @media(max-width: 42.5rem) {
    font-size: 1.8rem;
    letter-spacing: 0.614rem;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 13.6rem;
  z-index: 10;
`

export const SocialLink  = styled.div`
  &:hover{
    cursor: pointer;
  }
`