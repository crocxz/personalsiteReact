import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import './App.css';

import NavBar from './components/navbar';
import LandingPage from './components/landing_2';
import Work from './components/work';
import About from './components/about';
import Skills from './components/skills_2';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <LandingPage/>
        <Work/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
