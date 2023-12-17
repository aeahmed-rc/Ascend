const Header =(props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part=({parts,exercisesArray})=>{
  console.log('exercises',exercisesArray)
  return(
    <div>
   <ul>
    {parts.map((part, index) => (
        <li key={index}>{part}: Exercises <span style={{ marginLeft: '5px' }}>:
        {exercisesArray[index]}
      </span>
</li> 
         
      ))}
 
    </ul>
    </div>
  )
}
const Content=({part1,part2,part3})=>{
  const parts=[]
  const exercisesArray = []
  const objectsArray =[part1,part2,part3]
  console.log(objectsArray)
  objectsArray.forEach(obj => {
    if ('name' in obj) {
      parts.push(obj.name);
    }
    if('exercises' in obj){
      exercisesArray.push(obj.exercises)
    }
  });
  console.log('array',exercisesArray)
 

  return <div>
    <Part parts={parts} exercisesArray={exercisesArray} />
  
  </div>
}

const Total=({part1,part2,part3})=>{
 
  return (
    <div>
      <p>
      Number of exercises {part1.exercises+part2.exercises+part3.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
