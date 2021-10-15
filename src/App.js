import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import Menu from './Components/Layout/Menu/Index';
import Footer from './Components/Layout/Footer/Index';
import Home from './Pages/Home';
import Projetos from './Pages/Projetos';

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
                    <Projetos/>
                </Route>
              </div>
          </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
