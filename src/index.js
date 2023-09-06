import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from '/Users/apple/Documents/notes-app/src/Home.jsx';
import reportWebVitals from './reportWebVitals';
import { Routes,Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from '/Users/apple/Documents/notes-app/src/Navbar.jsx';
import SignIn from './signIn';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
    </Routes>
    
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
