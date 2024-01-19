import { useState } from 'react'
import './App.css'

import { BrowserRouter as Routes, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Q1 from './Q1/q1';
import Q2 from './Q2/q2';
import Q3 from './Q3/q3';
import Q4 from './Q4/q4';



function App() {


  return (
    <div>
   <h1>Frontend Exam 3 Semester</h1>
            <Navbar />
            <Routes>
                <Route index path="/" element={<h1>homepage</h1>} />
                <Route path="/question1" element={<Q1/>} />
                <Route path="/question2" element={<Q2/>} />
                <Route path="/question3" element={<Q3/>} />
                <Route path="/question4" element={<Q4/>} />
                
                {/* Add other routes for your components */}
            </Routes>

       {/* <HigherOrderFunction /> */}
    </div>
  )
}

export default App
