import './App.css'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import EditableText from './components/EditableText'

class App extends Component {
  state = {inputText: '', isSaved: false}

  onChangeText = value => {
    this.setState({inputText: value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {inputText, isSaved} = this.state
    return (
      <ThemeContext.Provider
        value={{
          inputText,
          isSaved,
          onClickButton: this.onClickButton,
          onChangeText: this.onChangeText,
        }}
      >
        <EditableText />
      </ThemeContext.Provider>
    )
  }
}
export default App
