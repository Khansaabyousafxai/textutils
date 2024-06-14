import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {Route, Routes} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

 const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
  }


  const togglemode=()=>{

    
    if(mode==='light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("dark mode enabled", "success");
      document.title = 'textutils - dark mode enabled';
    }
    else 
    {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("light mode enabled", "success");
      document.title = 'textutils - light mode enabled';
    }
  }

  return (
    
    <>
    <Navbar  tittle="Textutility" textabout="About" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={<Textform heading = "Enter the text to analyze below" mode={mode}/>} />
        <Route path="/about" element={<About />} />
        
    </Routes>
    </div>
    
    </>
  )
}

export default App;
