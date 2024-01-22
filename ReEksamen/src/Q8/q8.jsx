import React, { useState } from 'react';

const BubbleExample = () => {
    const [message, setMessage] = useState('');

    const handleClick = (id) => {
        setMessage(`You clicked on: ${id}`);
    };

    const style = {
        border: '1px solid red',
        margin: '10px',
        width: '50px',
        cursor: 'pointer'
    };

    return (
        <div>
            <h1>Bubble demo</h1>
            <div id="outerdiv">
                <div id="first" style={style} onClick={() => handleClick('First')}>First</div>
                <div id="second" style={style} onClick={() => handleClick('Second')}>Second</div>
                <div id="third" style={style} onClick={() => handleClick('Third')}>Third</div>
            </div>
            {message && <h1>{message}</h1>}
        </div>
    );
};

const Q8 = () => {
    return (
        <>
            <h1>Q8</h1>
            <BubbleExample />
        </>
    );
}

export default Q8;