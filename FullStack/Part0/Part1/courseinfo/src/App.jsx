const Header =(props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part=({parts,exercises})=>{

  return(
    <div>
   <ul>
    {parts.map((part, index) => (
        <li key={index}>{part}: Exercises <span style={{ marginLeft: '5px' }}>:
        {exercises[index]}
      </span>
</li> 
         
      ))}
 
    </ul>
    </div>
  )
}
const Content=()=>{
  const parts=['Fundamentals of React','Using props to pass data','State of a component']
  const exercises = [10,7,14]
  return <div>
    <Part parts={parts} exercises={exercises} />
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


  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App
