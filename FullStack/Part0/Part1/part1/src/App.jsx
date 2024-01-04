import { useState } from 'react'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Handlegood=()=>{

    setGood(good+1)
    console.log(good)
  }
  const Handlebad=()=>{

    setBad(bad+1)
    console.log(bad)
  }
  const Handleneutral=()=>{
 
    setNeutral(neutral+1)
    console.log(neutral)
  }
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={Handlegood} text="good"/>
      <Button onClick={Handlebad} text="bad"/>
      <Button onClick={Handleneutral} text="neutral"/>
      <h2>Statisitcs</h2>
      <h3>good:{good}</h3>
      <h3>bad:{bad}</h3>
      <h3>neutral:{neutral}</h3>
    </div>
  )
}

export default App
