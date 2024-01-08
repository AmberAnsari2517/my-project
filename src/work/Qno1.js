import { useState } from "react";
export const Qus1 =()=>{
   
    const [inputString, setInputString] = useState('');
    const [reversedString, setReversedString] = useState('');
    const [upper, setupper]= useState('')
    const [lower, setlower] = useState('');
      

    const  addInput=()=>{
        let store = '';
        for (let i = inputString.length -1; i>=0; i--){
            store += inputString[i];
        }
        setReversedString(store);
    };
    const chnagestring =()=>{

        addInput();
        setupper(inputString.toUpperCase());
        setlower(inputString.toLowerCase());
    }
    return(
        <div style={{margin:30}}> 
        <strong>Qno:1</strong><br/>
            <input type="text" value={inputString} onChange={(e)=>setInputString(e.target.value)}>
            </input>
            <button onClick={chnagestring}>Click</button>
           <div> <strong>reverse</strong> {reversedString}</div>
           <div><strong>upper</strong>{upper}</div>
           <div><strong>lower</strong>{lower}</div>
        </div>
    )
  }
  
  
  