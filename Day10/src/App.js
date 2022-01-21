import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Graphics from './Components/Graphics';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Web from './Components/Web';


function App() {

  return (
    <div className='app'>
      <h1>React Router Dom</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/web">
          <li>Web</li>
        </Link>
        <Link to="/graphics">
          <li>Graphics</li>
        </Link>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/web">
          <Web />
        </Route>
        <Route path="/graphics">
          <Graphics />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
