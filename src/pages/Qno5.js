import { useState } from "react";
export const Qno5 =()=>{
    
    const [input, setInput] = useState('');
    const [Data, setData]=useState([]);
    const [sort, setsort]=useState()
   

    const createArray=()=>{
        Data.push(input)
        setInput("")
    }
console.log(Data,'max')

    const handlsort=()=>{
        let num;
        for(let i=0; i<Data.length; i++){
            for (let j=i+1; j< Data.length; j++){
                if(Data[i]>Data[j]){
                    num= Data[i]
                    Data[i]=Data[j]
                    Data[j]=num;
                }
               
        }
      
    }
    setsort(Data)
}
    console.log(typeof Data, '--data')
 
   return(
        <div  style={{margin:30}}>
            <strong>Qno:5</strong><br/>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type="btn" onClick={createArray}>Add value to array</button><br/>
            <button type="btn" onClick={handlsort}>Click</button><br/>
            <strong>sorting</strong>{sort}<br/>
          
        </div>
    )

   }