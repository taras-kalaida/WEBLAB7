import React from 'react';
import FirstExerсise from './pages/FirstEx';
import SecondExercise from './pages/SecondEx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../src/style/style.css'




function App() {

  return (
      <>
        <Router>
          <Routes>
            <Route
            path='/'
            element={<FirstExerсise/>}
            />
            <Route
            path='/second'
            element={<SecondExercise/>}
            />
          </Routes>
        </Router>
      </>
  );
}

export default App;
