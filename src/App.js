import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Readme from './components/pages/Readme-project';
import Find from './components/pages/Find-and-dine-project';
import Materialize from './components/pages/Materialize-website-project';
import Quiz from './components/pages/Coding-quiz-project';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/readme-project' component={Readme} />
          <Route path='/find-and-dine-project' component={Find} />
          <Route path='/materialize-webpage-project' component={Materialize} />
          <Route path='/coding-quiz-project' component={Quiz} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
