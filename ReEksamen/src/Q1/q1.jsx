// Higher order funtion example with a component
import React, {useState} from 'react';


const HigherOrderFunction = () =>{
    const [result, setResult] = useState("");
    const [toggle, setToggle] = useState(false);

    const numbers=[1, 2, 3, 4, 5];

    const handleClick = () =>{
       const doubled = numbers.map((number, index) => <li key={index} > {number * 2} </li>);
       setResult(doubled);
       setToggle(!toggle);
    }

    return (
        <>
            <h1>Higher Order Function</h1>
            <h2>{numbers}</h2>
            <p>click the button below to see the numbers get doubled, using a Higher-Order Function</p>
            <button onClick={handleClick}>Click me</button>
            <ul>
                {toggle && result}
            </ul>
        </>
        );
        
}

const ReactComponent = () => {
    return (
        <>
            <h1>React Component</h1>
            <p>components</p>
            <ul>
                <li>Opdeling af UI i mindre dele</li>
                <li>Hvert komponent har står for sit eget logik</li>
                <li>Tillader Genbrug af kode</li>
            </ul>
        </>
    );
}

const ReactRoutingExample = () => {
    return (
    <>
      <h1>React Routing</h1>
      <p>Routing</p>
      <ul>
        <li>Single Page Application</li>
        <li>Tillader rendering af specifikke komponenter</li>
        <li>Binde et komponent til en URL</li>
      </ul>
    </>
  );
}



const Q1 = () => {
  return (
    <>
      <HigherOrderFunction />
      <ReactComponent />
      <ReactRoutingExample />
    </>
  );
};

export default {Q1};