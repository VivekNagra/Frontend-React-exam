import React, { useState } from 'react';

function MyForm() {
 
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
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isValid ? <p>Input is over 6 characters</p> : <p>Input must be 6 characters long</p>}
      <br/>
      {isValid ? <button>Valid</button> : <button disabled>Not valid</button> }
    </form>
  );
}

const Q9 = () => {
    return (
        <>
            <h1>Q9</h1>
            <MyForm />
        </>
    );

}

export default Q9;
