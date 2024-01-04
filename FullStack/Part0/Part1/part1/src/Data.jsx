const Data =({data})=>{
console.log('data',data)
const keysArray = Object.keys(data);
    return(
        <div>
            <ul>
            {keysArray.map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {data[key]}
          </li>
        ))}
            </ul>
        </div>
    )
}
export default Data