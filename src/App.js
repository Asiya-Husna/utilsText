import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import { Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => setAlert(null), 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("You have Enabled Dark Mode", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("You have Enabled Light Mode", "success")
    }
  }

  const redMode = () => {
    setMode('danger')
    document.body.style.backgroundColor = "rgb(226 72 93)"
    showAlert("You have Enabled Red Mode", "success")
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} redMode={redMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/utilsText" element={<TextForm title="Enter the text below" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </div >
    </>
  );
}

export default App;
