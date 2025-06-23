import { useState } from 'react'

const ToggleButton = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [textColor, setTextColor] = useState('black')
    const[buttonColor, setButtonColor] = useState('white')

    return (
      <div>
          <h1 style={{ color: textColor, backgroundColor: backgroundColor }}>THIS IS MY SMALL EXERCISE</h1>
            <button style={{ backgroundColor: buttonColor }} onClick={() => {
                setBackgroundColor(backgroundColor === 'black' ? 'white' : 'black')
                setTextColor(textColor === 'white' ? 'black' : 'white')
                setButtonColor(buttonColor === 'red' ? 'white' : 'red')
            }}>Click mefddffddgdf</button>
      </div>
  )
}

export default ToggleButton
