
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/about';
import TextForm from './components/TextForm';
import { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "Success")
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "Success")
    }
  }
  return (
  <>
  {/* <Router> */}
        <Navbar
          title="TextUtils"
          // aboutText="TextAbouts"
          // mode={mode}
          // toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route */}
              {/* exact path="/"element={ */}
                <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />
              
            {/* ></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
  </>
  );  
}

export default App;
