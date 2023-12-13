const Header =(props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part=()=>{

  return(
    <div>

    </div>
  )
}
const Content=({part,exercises})=>{

  console.log(part,exercises)
  return <div>
    <ul>
    {part.map((part, index) => (
        <li key={index}>{part}: Exercises <span style={{ marginLeft: '5px' }}>:
        {exercises[index]}
      </span>
</li> 
       
        
      ))}
 
    </ul>
   
  </div>
}

const Total=({exercises})=>{
  console.log(exercises)
  return (
    <div>
      <p>
      Number of exercises {exercises.reduce((a,b)=>a+b,0)}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [10,7,14]

  const parts=['Fundamentals of React','Using props to pass data','State of a component']

  return (
    <div>
      <Header course={course}/>
      <Content part={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App
