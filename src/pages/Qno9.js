import { useState } from "react";
export const Qno9 =()=>{
    const [shape, setShape] = useState('rectangle');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [base, setBase] = useState('');
    const [height, setHeight] = useState('');
    const [radius, setRadius] = useState('');
    const [result, setResult] = useState('');
  
    const calculateArea = () => {
      let area = 0;
  
      switch (shape) {
        case 'rectangle':
          area = parseFloat(length) * parseFloat(width);
          break;
        case 'triangle':
          area = (parseFloat(base) * parseFloat(height)) / 2;
          break;
        case 'circle':
          area = Math.PI * Math.pow(parseFloat(radius), 2);
          break;
        default:
          break;
      }
  
      setResult(isNaN(area) ? 'Invalid input' : area.toFixed(2));
    };
  
    return (
      <div style={{margin:30}}><br/>
      <strong>Qno:9</strong>
        <div>
          <label>Shape:</label>
          <select value={shape} onChange={(e) => setShape(e.target.value)}>
            <option value="rectangle">Rectangle</option>
            <option value="triangle">Triangle</option>
            <option value="circle">Circle</option>
          </select>
        </div>
        {shape === 'rectangle' && (
          <div>
            <label>Length:</label>
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
            <label>Width:</label>
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
        )}
        {shape === 'triangle' && (
          <div>
            <label>Base:</label>
            <input type="number" value={base} onChange={(e) => setBase(e.target.value)} />
            <label>Height:</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
        )}
        {shape === 'circle' && (
          <div>
            <label>Radius:</label>
            <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
          </div>
        )}
        <div>
          <button onClick={calculateArea}>Calculate Area</button>
        </div>
        <div>
          <p>Result: {result}</p>
        </div>
      </div>
    );
    
}