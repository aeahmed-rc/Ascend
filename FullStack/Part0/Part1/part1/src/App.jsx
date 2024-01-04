import { useState,useEffect } from 'react'
import Button from './Button'
import Data from './Data'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [data,setData]=useState({'total': 0,
  'average': 0,
  'positive': 0})

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
  
  useEffect(() => {
    const total = good+bad+neutral
    const average = total/3
    const positive = total === 0 ? 0 : good / total*100
    const updatedObject = {
      ...data,
      'total': total,
      'average': average,
      'positive':Math.round(positive * 100) / 100 +'%'
    };

    // Update the object in state
    setData(updatedObject);
  }, [good,bad,neutral]);
console.log(data)

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
      <Data data={data}/>
 
    </div>
  )
}

export default App
