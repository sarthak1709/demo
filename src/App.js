import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Courses from './pages/Courses';
//import Card from './components/cards/Cards'

function App() {
  //const[name,setName]= useState('Your Name');
      //const[job,setJob]= useState('Job Title');
      //const[about,setAbout]= useState('About');
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/courses' component={Courses} />
        </Switch> 
      </Router>
      
    </>
  );
}

export default App;