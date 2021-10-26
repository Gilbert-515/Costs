import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import { Menu, Footer } from './components';
import Home from './pages/Home/';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject/';
import Project from './pages/Project';

function App() {
  return ( 
      <Router>
        <Menu/>
          <Switch>
            <React.Fragment>
              <div id='body'>
                <Route exact path='/'>
                    <Home/>
                </Route>   

                <Route path='/projetos'>
                    <Projects/>
                </Route>

                <Route path='/projeto/:id'>
                    <Project/>
                </Route> 

                <Route path='/novo-projeto'>
                    <NewProject/>
                </Route>
              </div>
            </React.Fragment>
          </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
