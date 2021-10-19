import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import Menu from './components/Layout/Menu/Index';
import Footer from './components/Layout/Footer/Index';
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
          </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
