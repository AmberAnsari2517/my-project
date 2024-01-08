import { useState } from "react";
export const Qno2 =()=>{
  const [value, setValue]=useState('');
  const [result, setResult]=useState('');
  const handle = () => {
      let string='';
      for (let i= value.length-1; i>=0; i--) {
           string +=value[i];
           if (value===string) {
              setResult("Yes it is pelindrome")
          } else {
            setResult("No it no pelindrome")
          }
        }
        
      
  }
  
  return ( 
      <div style={{margin:30}}>
     <strong>Qno:2</strong><br/>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
      <button onClick={handle}> Click me</button>
      <p>{result}</p>
      </div>
   );

}