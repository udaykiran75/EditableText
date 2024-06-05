import './index.css'
import ThemeContext from '../../context/ThemeContext'

const EditableText = () => (
  <ThemeContext.Consumer>
    {value => {
      const {inputText, isSaved, onClickButton, onChangeText} = value
      console.log(inputText)

      const clickButton = () => {
        onClickButton()
      }

      const changeText = event => {
        onChangeText(event.target.value)
      }

      const buttonText = isSaved ? 'Edit' : 'Save'

      return (
        <div className="app-BgContainer">
          <div className="card-container">
            <h1 className="heading">Editable Text Input</h1>
            <div className="input-container">
              {isSaved ? (
                <p className="input-text">{inputText}</p>
              ) : (
                <input
                  type="text"
                  className="inputBox"
                  onChange={changeText}
                  value={inputText}
                />
              )}
              <button className="button" onClick={clickButton} type="button">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default EditableText
