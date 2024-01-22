import { useState } from "react";
export const Qno12 =()=>{
    const [email, setemail]= useState('')
    const [emailerror, setemailerror] = useState ('')
    
    const handlebuton=(e)=>{
        const emailformet = /[@]/;
        e.preventDefault();
        if(email === ''){
            setemailerror('email field cannot b empety')
        }
       else if (!emailformet.test(email)){
            setemailerror('invalid email formet')   
        }

        else{
            setemailerror('');
           setemailerror('form is submited')
        }

    }


    return(
        
        <div  style={{margin:30}}><br/>
        <strong>Qno:12</strong>
        <form onSubmit={handlebuton}>
        <input placeholder="Enter email" type="text"  value={email} onChange={(e)=>setemail(e.target.value)}/>
        <button type="submit">Submit</button>
        <span style={{color:'red'}}>{emailerror}</span>
        </form>
            
        </div>
       
    )

}