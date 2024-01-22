import { useState } from "react";
export const Qno6 =()=>{
    const[Data, setData] =useState('');

    const handleincrement=()=>{
        setData(Data + 1);

    }
    const handledecrement =()=>{
        setData (Data - 1);
    } 

    return(
        <div style={{margin:30}}>
            
            <strong>Qno:6</strong>
            <br/>
            <button onClick={handledecrement}>decrement</button>
            <input value={Data} onChange={(e)=>{setData(Number(e.target.value))}}/>
            <button onClick={handleincrement}>incremet</button>
            
        </div>
    )

}