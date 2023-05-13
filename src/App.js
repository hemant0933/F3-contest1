import './App.css';

import { useState } from 'react';

function App() {
  const [num1, setnum1] = useState('');  // for num1
  const [num2, setnum2] = useState('');  // for num2

  const [result, setResult] = useState('');  // for result
  const [error, setError] = useState('');    // for error and for success i have made two seprate useState for color 
  const [success, setSuccess] = useState('');  // issue 
   
  //this is the validate function in which we checking weather
  // the num1 and num2 are empty or not and it is valid number or not ?
 
  const ValidateValue = () => {
    if (num1 === '' && num2 === '') {
      setError('Please enter both numbers');
      setResult()  // reseting the result state
      return false; 
    }
    if(num1 === '' && num2 !== ''){
      setResult()   // reseting the result state
      setError('Please enter Num 1');
    }
    if(num2 === '' && num1 !== ''){
      setResult()    // reseting the result state
      setError('Please enter Num 2')
    }

    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setError('Please enter valid numbers');
      setResult()   // reseting the result state
      return false;
    }

    return true;
   
  }

  const Operation = (operator) => {   
    // Now before performing the required operation 
    //i am checking the function( ValidateValue func.) is true or not
    if (!ValidateValue()) {
      setSuccess('')  
      return;
    }
    else{
      setError('');
      setSuccess('Success: Your result is shown above!')
   
    let num1_parse = parseFloat(num1);
    let num2_parse = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(num1_parse + num2_parse);
        break;
      case '-':
        setResult(num1_parse - num2_parse);
        break;
      case '*':
        setResult(num1_parse * num2_parse);
        break;
      case '/':
        setResult(num1_parse / num2_parse);
        break;
      default:
        break;
    }
  }
  };

  return (
    <div className='outer-wrapper'>
       <div className='main-Wrapper'>
        <div className='heading-text'>
          <h1>React Calculator</h1>
        </div>
        <div className='input-div'>
          <input type='text' className='input-text' onChange={(e)=>setnum1(e.target.value)} value={num1} placeholder='Num 1' /><br/><br/>
          <input type='text' className='input-text' onChange={(e)=>setnum2(e.target.value)} value={num2}  placeholder='Num 2' /> <br></br>

          <div className='operation-bar'>
            <button className='button-text' onClick={()=> Operation('+')} >+</button>
            <button className='button-text'  onClick={()=> Operation('-')} >-</button>
            <button className='button-text'  onClick={()=> Operation('*')} >*</button>
            <button className='button-text'  onClick={()=> Operation('/')} >/</button>
          </div>

          <div className='result' style={{marginTop:'50px',fontSize:'1.5rem'}}>Result = {result}</div>
          <div className='error' style={{color:'red',marginTop:'20px',fontSize:'1.5rem'}}>{error}</div>
          <div className='success' style={{color:'yellowgreen',marginTop:'20px',fontSize:'1.5rem'}}>{success}</div>
        </div>
       </div>
    </div>
  );
}

export default App;
