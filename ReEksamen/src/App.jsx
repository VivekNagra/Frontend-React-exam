import { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Q1 from './Q1/q1';
import Q2 from './Q2/q2';
import Q3 from './Q3/q3';
import Q4 from './Q4/q4';
import Q5 from './Q5/q5';
import Q6 from './Q6/q6';
import EventsExample from './Q7/q7';
import Q8 from './Q8/q8';
import Q9 from './Q9/q9';
import SubrouteExample from './Q9/subrouteExample';

function App() {

  const [userProfile, setUserProfile] = useState({
    name: "",
    age: 0,
    email: "",
    bio:"",
    married: false
  })

  const updateProfile = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUserProfile({
      ...userProfile,
      [e.target.name]: value
    });
  };

  return (
    <div>
    <Router>
      <div>
        <h1>Frontend Exam</h1>
        <Navbar />
        {/* <ErrorBoundry /> rundt om alle routes */ }
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/question1" element={<Q1 />} />
          <Route path="/question2" element={<Q2 />} />
          <Route path="/question3" element={<Q3 />} />
          <Route path="/question4" element={<Q4 />} />
          <Route path="/question5" element={<Q5 />} />
          <Route path="/question6" element={<Q6 />} />
          <Route path="/question7" element={< EventsExample userProfile={userProfile} updateProfile={updateProfile}/>} />
          <Route path="/question8" element={<Q8 />} />
          <Route path="/question9" element={<Q9 />} >
            <Route path="/question9/details" element={<SubrouteExample />} />
          </Route>
          {/* Add other routes for your components */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
