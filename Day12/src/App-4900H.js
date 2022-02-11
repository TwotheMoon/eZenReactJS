import { Route, Switch } from 'react-router-dom';
import './App.css';
import Day from './Day';
import DayList from './DayList';
import Header from './Header';

function App() {

  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path="/" exact>
          <DayList />
        </Route>
        <Route path="/day/:day">
          <Day />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
