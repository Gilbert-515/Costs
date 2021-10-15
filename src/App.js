import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import Menu from './Components/Menu/Index';
import Home from './Pages/Home';
import Projetos from './Pages/Projetos';

function App() {
  return ( 
      <Router>
        <Menu/>
          <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>    

              <Route path='/projetos'>
                  <Projetos/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
