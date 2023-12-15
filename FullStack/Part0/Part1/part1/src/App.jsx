const Hello =(props)=>{
  console.log(props)
  return(
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const age=10  // variable with value will be sent as a prop from parent to child component

  return (
    <div>
      <p>Greetings</p>
      <Hello name='George' age={age}/>
      <Hello name ='Daisy'/>
    </div>
  )
}

export default App
