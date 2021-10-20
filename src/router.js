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
import Company from './pages/Company';
import Contacts from './pages/Contacts';

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

                <Route path='/novo-projeto'>
                    <NewProject/>
                </Route>

                <Route path='/empresa'>
                  <Company/>
                </Route>

                <Route path='/contato'>
                    <Contacts/>
                </Route>
              </div>
            </React.Fragment>
          </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
