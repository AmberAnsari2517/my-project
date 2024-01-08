import { useState } from "react";
export const Qno7 =()=>{
    const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setArray((prevArray) => [...prevArray, inputValue]);
      setInputValue('');
    }
  };

  const handleRemove = (index) => {
    setArray((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  return (
    <div style={{margin:30}}><br/>
    <strong>Qno:7</strong>
      <div>
        <label>Add Value:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <p>Array:</p>
        <ul>
          {array.map((value, index) => (
            <p >{`Element=${index}
              ${value}`}
              <button onClick={() => handleRemove(index)}>Remove</button>
            </p>
          ))}
        </ul>
      </div>
    </div>
  );

}