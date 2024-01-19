import React, {useState} from 'react';

const CallbackExample = () => {
        const [counter, setCounter] = useState(0);

        const incrementCounter = () => {
            setCounter(counter + 1);
        };
    
        return (
            <>
                <h2>Callback funktioner</h2>
                <ul>
                    <li>En funktion der bruges som argument i en anden</li>
                </ul>
                <p>Callback funktion</p>
                <button onClick={incrementCounter}>Klik Mig</button>
                <p>Antal klik: {counter}</p>
            </>
    );
}

const JsxExample = () => {
    return (
        <>
            <h2>JSX</h2>
            <p>JSX er en syntaks udvidelse til JavaScript</p>
            <ul>
                <li>HTML-lignende syntaks</li>
                <li>Bruges til at returnere HTML i React</li>
                <li>Bliver oversat til JavaScript</li>
            </ul>
        </>
    );
}

const StylingExample = () => {
    return (
        <>
            <h2>Styling</h2>
            <h3>Grid & Flexbox</h3>
            <p>Grid</p>
            <ul>
                <li>2 akses ændringer</li>
                <li>passer bedst til faste arealer</li>
                <li>Til kendte str.</li>
            </ul>
            <p>Flexbox</p>
            <ul>
                <li>1 akses ændring</li>
                <li>f.eks. til kollonne eller række</li>
                <li>laver opdelinger af elementer til samme str.</li>
                <li></li>
            </ul>
        </>
    );
}

const Q2 = () => {
    return (
        <>
            <CallbackExample />
            <JsxExample />
            <StylingExample />
        </>
    )
}
export default {Q2};