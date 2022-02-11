import { Route, } from 'react-router-dom';
import './App.css';
import Quiz from './Components/Quiz';
import Score from './Components/Score';
import Start from './Components/Start';


function App() {

  return (
    <div className='app'>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/quiz">
        <Quiz />
      </Route>
      <Route path="/score">
        <Score />
      </Route>
    </div>
  );
}
export default App;
