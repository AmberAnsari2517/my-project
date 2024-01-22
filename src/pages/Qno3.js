import { useState } from "react";
export const Qno3 =()=>{
    const [inputNumber, setInputNumber] = useState('');
    const [result, setResult] = useState(null);
  
    const calculateFactorial = () => {
      const number = parseInt(inputNumber);

    let factorail=1;
    for( let i=2; i<=inputNumber; i++){
      factorail*=i;
    }
    setResult(` factorial of ${number} is: ${factorail}`);
  
    }
    return(
      <div style={{margin:30}}>
        <strong>Qno:3</strong><br/>
        <input type="text" value={inputNumber} onChange={(e)=>setInputNumber(e.target.value)}/>
        <button type="btn" onClick={calculateFactorial}>Check factorail</button>
        <br/>
        <strong>output</strong>{result}

      </div>
    )

}