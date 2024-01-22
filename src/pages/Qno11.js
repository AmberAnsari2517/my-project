import { useState } from "react";
export const Qn011= ()=>{
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
    if ( name.trim() === ''){
        setNameError('Field cannot be empet')

    }
    else{
       // setNameError('')
     console.log('form is submited with name', name)
     setNameError('form is submited')                                              
      }
    };
  
    return (
        <div style={{margin:30}}>
            <strong>Qno:11</strong><br/>
         <form onSubmit={handleSubmit}>
       <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span style={{ color: 'red' }}>{nameError}</span>
        <br />
        <input type="submit" value="Submit" />
      </form>

        </div>
    );
  }
