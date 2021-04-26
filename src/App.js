import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Widgets/navBar";
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { Fab } from '@material-ui/core';
import ScrollToTop from './components/Widgets/ScrollToTop'
import emailUs from './components/pages/contactForm'



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About-me' exact component={About} />
        <Route path='/Email-me' exact component={emailUs} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;