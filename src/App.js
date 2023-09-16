import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route

// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  
  const toggleDark = ()=>{
    if(mode === 'light' || mode === 'danger' || mode === 'success'){
      setMode('dark');
      document.body.style.backgroundColor = '#050a16';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const toggleDanger = ()=>{
    if(mode === 'light' || mode === 'dark' || mode === 'success'){
      setMode('danger');
      document.body.style.backgroundColor = '#ad0707';
      showAlert("Danger mode has been enabled", "success");
      document.title = 'TextUtils - Danger Mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const toggleSuccess = ()=>{
    if(mode === 'light' || mode === 'dark' || mode === 'danger'){
      setMode('success');
      document.body.style.backgroundColor = '#047a04';
      showAlert("Success mode has been enabled", "success");
      document.title = 'TextUtils - Success Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }

  return (
    <>
      <div className='container my-3'>
        {/* <Router> */}
          <Navbar title="Textutils" mode={mode} toggleDark={toggleDark} toggleDanger={toggleDanger} toggleSuccess={toggleSuccess} />
          <Alert alert={alert} />
          {/* <Routes> */}
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
          {/* </Routes> */}
        {/* /* </Router> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
  }
  
  export default App;
  
  