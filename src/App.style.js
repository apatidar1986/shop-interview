import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.25s linear;
  }
`

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin-bottom: 30px;
`

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`

export const StatusText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.textLight};
  margin: 5px 0;
`
