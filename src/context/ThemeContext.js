import React from 'react'

const ThemeContext = React.createContext({
  inputText: '',
  isSaved: false,
  onChangeText: () => {},
  onClickButton: () => {},
})
export default ThemeContext
