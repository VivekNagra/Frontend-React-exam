import React, { useState } from 'react';

const SyncProgramming = () => {
    return (
        <div>
            <h1>Question 5</h1>
            <h3>What is synchronous & asynchronus programming?</h3>
            <p>Synchronous Programming: </p>
            <ul>
                <li>Sekvensiel udførelse af kode</li>
                <li>Progam udføres i rækkefølge</li>
                <li>Blocking manner</li>
                <li>dvs. En linje kode af gangen, næste linje kode læses først efter den forrige er udført</li>
            </ul>
            <p>Asynchronous Programming: </p>
            <ul>
                <li>Progam udføres ikke i rækkefølge</li>
                <li>Non-blocking manner</li>
                <li></li>
            </ul>
        </div>
    )
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
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            await delay(2000);
            setMessage("Loader...");
            await delay(4000);
            setMessage("async Operation is finished");
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




const Q5 = () => {
        return (
            <>
                <SyncProgramming />
                <PromiseExample />
            </>
        );
    }

export default Q5;