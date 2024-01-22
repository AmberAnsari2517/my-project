import { useState } from "react";
export const Qno4 =()=>{

    const [input, setInput] = useState("");
    const [Data, setData]=useState([]);
    const [maxNum, setMaxNum] = useState()
    const [minNum, setMinNum] = useState()
   

    const createArray=(e)=>{
        Data.push(input)
        setInput("")
    }
console.log(Data,'max')

    const handlemax=()=>{
        let max = 0;
        for (let i=0; i<Data.length; i++) {
            if (Data[i] > max) {
                 max = Data[i];
            } 
            setMaxNum(max)
        }
    }
    console.log(typeof Data, '--data')
  const handlemin=()=>{
    handlemax();
    let min;
    min=Data[0];
    for (let n=0; n<=Data.length; n++){
    if(min > Data[n]){
        min=Data[n]
    }
    setMinNum(min)
   
}
  }

   return(
        <div  style={{margin:30}}>
            <strong>Qno:4</strong><br/>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type="btn" onClick={createArray}>Add value to array</button><br/>
            <button type="btn" onClick={handlemin}>Click</button><br/>
           
            <strong>Minmum value</strong>{minNum}<br/>
            <strong>Max value</strong>{maxNum}
        </div>
    )

}