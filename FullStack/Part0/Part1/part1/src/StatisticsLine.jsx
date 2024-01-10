
const StatisitcsLine =({text,value})=>{
    return(
        <table>
      <tbody>
        
          <tr>
              <td>{text} : </td> 
              <td key={value}>{value}</td>
          </tr>
            
      </tbody>
    </table>
       
    )
}
export default StatisitcsLine