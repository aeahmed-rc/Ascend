const Header =(props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part=({nameArray,exercisesArray})=>{
  console.log('exercises',exercisesArray)
  return(
    <div>
   <ul>
    {nameArray.map((part, index) => (
        <li key={index}>{part}: Exercises <span style={{ marginLeft: '5px' }}>:
        {exercisesArray[index]}
      </span>
</li> 
         
      ))}
 
    </ul>
    </div>
  )
}
const Content=({parts})=>{
  const nameArray=[]
  const exercisesArray = []
 
  parts.forEach(obj => {
    if ('name' in obj) {
      nameArray.push(obj.name);
    }
    if('exercises' in obj){
      exercisesArray.push(obj.exercises)
    }
  });
  console.log('array',exercisesArray)
 

  return <div>
    <Part nameArray={nameArray} exercisesArray={exercisesArray} />
  
  </div>
}

const Total=({parts})=>{
 console.log(parts)
 const exercises=[]
 parts.forEach(obj=>{
  exercises.push(obj.exercises)
 })
 console.log(exercises.reduce((a,b)=>a+b,0))
  return (
    <div>
      <p>
      Total number of exercises {exercises.reduce((a,b)=>a+b,0)} 
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
