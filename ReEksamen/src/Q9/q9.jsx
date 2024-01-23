import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


const PassForm = () => {
 
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Handler til at opdatere input værdien og tjekke om det et over 6 tegn
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue); 
    setIsValid(newValue.length >= 6); 
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleInputChange}/>
      {isValid ? <p>Input is over 6 characters</p> : <p>Input must be 6 characters long</p>}
      <br/>
      {isValid ? <button>Valid</button> : <button disabled>Not valid</button> }
      
    </form>
    
  );
}

const SubrouteExample = () => {
    return (
        <>
            <h1>Subroute Example</h1>
        </>
    );
};


const Q9 = () => {
    return (
        <div>
            <h1>Q9</h1>
            <PassForm />
            <Outlet />
        </div>
    );

}

export {Q9, SubrouteExample};
