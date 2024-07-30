// src/components/ThemeToggle.js

import React from 'react'
import styled from 'styled-components'

const ToggleContainer = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 1000;
`

const Sun = styled.svg`
  height: auto;
  width: 2rem;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.isLight ? 'translateY(0)' : 'translateY(100px)'};
`

const Moon = styled.svg`
  height: auto;
  width: 2rem;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.isLight ? 'translateY(-100px)' : 'translateY(0)'};
`

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'

  return (
    <ToggleContainer onClick={toggleTheme}>
      <Sun
        isLight={isLight}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFA500"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </Sun>
      <Moon
        isLight={isLight}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </Moon>
    </ToggleContainer>
  )
}

export default ThemeToggle
