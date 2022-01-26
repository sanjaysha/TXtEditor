import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [checkText, setCheckText] = useState('Enable Dark Mode');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08082a';
      showAlert("Dark mode enabled!", "success");
      setCheckText("Enable Light Mode");
      // document.title = "TXtEditor - Dark Mode";
      // setInterval(() => {
      //   document.title = "TXtEditor is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TXtEditor now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!", "success");
      setCheckText(" Enable Dark Mode");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TXtEditor" mode={mode} checkText={checkText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextForm heading="Try TXtEditor - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />}>
            </Route>
            {/* <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
