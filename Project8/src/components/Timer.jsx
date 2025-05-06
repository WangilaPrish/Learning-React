import { useEffect, useRef, useState} from 'react'

const Timer = () => {

    const simpleTimer = useRef(0)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        simpleTimer.current = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000)
        return () => {
            clearInterval(simpleTimer.current)
        }

    }, [])
  return (
      <div>
          <h1>Clock: {timer} seconds</h1>
          <button onClick={() => clearInterval(simpleTimer.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer
