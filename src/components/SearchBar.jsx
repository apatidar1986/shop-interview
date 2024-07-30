// src/components/SearchBar.js

import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 4px;
  box-shadow: 0 2px 5px ${(props) => props.theme.inputShadow};
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.text};

  &:focus {
    outline: none;
    box-shadow: 0 2px 5px ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.textLight};
  }
`

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm)
    }, 300),
    [onSearch],
  )

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    debouncedSearch(newValue)
  }

  return (
    <SearchInput
      type="number"
      step="0.01"
      placeholder="Search by price ($)"
      value={value}
      onChange={handleChange}
    />
  )
}

export default React.memo(SearchBar)
