// Higher order funtion example with a component
import React, {useState} from 'react';

const HigherOrderFunction = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Diana", age: 40 }
  ]);

  
  const incrementAges = () => {
    const updatedPeople = people.map(person => ({
      ...person,
      age: person.age + 1
    }));
    setPeople(updatedPeople);
  };

  return (
    <div className="container">
      <h1 className="main-title">People Lists</h1>

      <div className="list-container">
        <h2 className="list-title">Original List</h2>
        <ul className="people-list">
          {people.map(person => (
            <li key={person.id} className="person-item">
              ID: {person.id}, Name: {person.name}, Age: {person.age}
            </li>
          ))}
        </ul>
      </div>

      <button className="increment-button" onClick={incrementAges}>Increment Ages</button>
    </div>
  );
};

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
    <div>
      <h1>React Routing</h1>
      <p>Routing</p>
      <ul>
        <li>Single Page Application</li>
        <li>Tillader rendering af specifikke komponenter</li>
        <li>Indlæsning af komponent ud fra URL</li>
      </ul>
    </div>
  );
}



const Q1 = () => {
  return (
    <div>
      <HigherOrderFunction />
      <ReactComponent />
      <ReactRoutingExample />
    </div>
  );
};

export default Q1;