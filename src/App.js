
import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import HomePage from "./HomePage";
import BarChart1 from './BarChart1'
import "./App.css"

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="*" element={<Navigate to ="/covidChart" />}/>
          <Route path="/covidChart" element={<HomePage />} />
          <Route path="/BarChart" element={<BarChart1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
