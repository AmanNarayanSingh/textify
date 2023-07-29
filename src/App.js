// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


// let name="Aman"
function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    // if(mode==='light'){
    //   setMode('dark');
    //   document.body.style.backgroundColor='#063a45';
    //   document.body.style.color='white';
    //   document.getElementById('mybox').style.backgroundColor='lightgrey'
    // }
    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor='white';
    //   document.body.style.color='black';
    //   document.getElementById('mybox').style.backgroundColor='white';

    // }
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  }

  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }, [mode]);

  return (
    <>
      <div className={`app ${mode === 'dark' ? 'dark-mode' : ''}`}>
        {/* <Router> */}
          <Navbar title="Textify" about="About Author" mode={mode} toggleMode={toggleMode}/>
            <div className='container'>
              <Routes>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/" element={<Textform mode={mode} heading="Enter your text below"/>}/>
              </Routes>
              </div>
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
