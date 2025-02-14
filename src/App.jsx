
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Page2 from './page/descibe'
import Page3 from './page/describe2'
import Page4 from './page/describe3'
import Home from './home/home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/describe" element={<Page2 />} />
        <Route path="/describe2" element={<Page3 />} />
        <Route path="/describe3" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App
