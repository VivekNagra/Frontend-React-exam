import React, { useState } from 'react';
import { useEffect } from 'react';

const EventBubbling = () => {
    const [message, setMessage] = useState('I am ');
  
  
    useEffect(() => {
      document.body.addEventListener('click', (e) => {
        setMessage('I am body');
      })
    }, []);
  
    const handleClick = (clickedElement) => {
      setMessage(`I am ${clickedElement}`);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          onClick={() => handleClick('Div')}
          style={{ backgroundColor: 'lightblue', padding: '20px', marginBottom: '10px', cursor: 'pointer' }}
        >
          Div
          <span
            onClick={(e) => {
                //e.stopPropagation();
              handleClick('Span');
            }}
            style={{ backgroundColor: 'lightgreen', padding: '20px', marginLeft: '10px', cursor: 'pointer' }}
          >
            Span
            <button
              onClick={(e) =>  {
                //e.stopPropagation();
                handleClick('Button')}}
              style={{ backgroundColor: 'lightcoral', marginLeft: '10px', cursor: 'pointer' }}
            >
              Click me
            </button>
          </span>
        </div>
        <h2 
        onClick={(e) => {
            //e.stopPropagation();
          handleClick('H2')
        }}
        >{message}</h2>
      </div>
    );
  };

  const MapExample = () => {
    <p>vis eksempel med Map() fra question 1</p>
  }

const Q8 = () => {
    return (
        <>
            <h1>Q8</h1>
            <EventBubbling />
            <MapExample />
        </>
    );
}

export default Q8;