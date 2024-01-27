
import './App.css';
import { useState } from 'react';

function App() {

  const[input , setInput]= useState("");
  const[result , setResult]= useState(null);

 const handleInput =(event)=>{
  const value = event.target.value; // textContent also can we used
  console.log(value);
  setInput(input+value)
 }
 
 const handleClear =()=>{   // can use switch also
  setInput("");
  setResult(null);
 }

//  function evaluateExpression(expression) {
//   // Create a new function with the expression as its body.
//   var func = new Function('return ' + expression);

//   // Call the function and return the result.
//   return func();
// }

 const showresult =()=>{
  if(input=== "")
  {
    setResult("Error");
  }
  else{
    var res = eval(input);
    console.log(res);
    setResult(res);
  }
  
 }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input value ={input} type="text"/>
      <div className='result'>{result ? result: (isNaN(result) ? NaN : null)}</div>
      <div>
      <button onClick={handleInput} className='button'  value="7">7</button>
      <button onClick={handleInput} className='button'  value="8">8</button>
      <button onClick={handleInput} className='button'  value="9">9</button>
      <button onClick={handleInput} className='button' value="+">+</button>
      </div>
      <div>
      <button onClick={handleInput} className='button' value="4">4</button>
      <button onClick={handleInput} className='button' value="5">5</button>
      <button onClick={handleInput} className='button' value="6">6</button>
      <button onClick={handleInput} className='button' value="-">-</button>
      </div>
      <div>
      <button onClick={handleInput} className='button' value="1">1</button>
      <button onClick={handleInput} className='button' value="2">2</button>
      <button onClick={handleInput} className='button' value="3">3</button>
      <button onClick={handleInput} className='button' value="*">*</button>
      </div>
      <div>
      <button onClick={handleClear} className='button' value="C">C</button>
      <button onClick={handleInput} className='button' value="0">0</button>
      <button onClick={showresult} className='button' value="=">=</button>
      <button onClick={handleInput} className='button' value="/">/</button>
      </div>
      
    </div>
  );
}

export default App;
