const Data =({data})=>{
console.log('data',data)
const keysArray = Object.keys(data);
    return(
        <table>
      <tbody>
        
      {keysArray.map((key) => (
          <tr key={key}>
            <td>{key}:</td> 
            <td> {data[key]} </td> 
          </tr>
        ))}
            
      </tbody>
    </table>
       
     
    )
}
export default Data