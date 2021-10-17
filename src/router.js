import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import Menu from './components/Layout/Menu/Index';
import Footer from './components/Layout/Footer/Index';
import Home from './pages/Home/index';
import Projetos from './pages/Projetos';

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
