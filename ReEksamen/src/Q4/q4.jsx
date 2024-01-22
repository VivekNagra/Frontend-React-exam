import React, { useState } from 'react';

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: userId,
                name: 'John Doe',
                email: 'johndoe@example.com'
            };

            const success = true; // Change to false to simulate failure

            if (success) {
                resolve(userData);
            } else {
                reject('Failed to fetch user data');
            }
        }, 2000);
    });
}

const PromiseExample = () => {
    const [isActive, setIsActive] = useState(true);
    const [counter , setCounter] = useState(0);
    const [message, setMessage] = useState("");

    const handleSyncClick = () => {
        
        
        setTimeout(() => {
            setIsActive(false);
            setMessage("Starting sync operation...")
        }, 1000);

        setTimeout(() => {
            setMessage("Synchrounous operation in progress...");
          }, 3000);

        setTimeout(() => {
        setMessage("Synchrounous operation is finshed");
        setIsActive(true);
          }, 6000);

          
    };

    async function handleAsyncClick() {
        const delay = (ms) => new Promise(setTimeout(ms))

        delay(2000).then(() => setMessage("step one"))
        delay(4000).then(() => setMessage("step two"))
    }

    const handleCountClick = () => {
        setCounter(counter + 1);
    }

    return (
        <> 
            <h1>Question 4</h1>
            <button onClick={handleSyncClick}>Sync</button>
            
            {isActive ? <button onClick={handleCountClick}>Count me</button> : <button disabled>Count me</button> }
            <button onClick={handleAsyncClick}>Async</button>
            <br/>
            {counter}
            <br/>
            {message}
           
        </>
    );
};

const Q4 = () => {
    return (
        <>
            <br />
            <PromiseExample />
        </>
    );
};

export default Q4;
