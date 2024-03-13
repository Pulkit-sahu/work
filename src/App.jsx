import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepages from './pages/Homepages';
import Navbar from './Components/Navbar';

import Forms from './pages/Forms';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      
      <Routes>
        {/* Include Navbar only in the Route for the home page */}
        <Route path="/" element={<>
          <Navbar doShow={true} />
          <Homepages />
        </>} />
        {/* Exclude Navbar from other routes */}

        <Route path="/Forms" element={<>
          <Navbar doShow={false} />
          <Forms />
        </>
        } />

      </Routes>
    </div>
  );
}

export default App;