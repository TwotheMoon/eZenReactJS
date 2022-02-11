import { Route, } from 'react-router-dom';
import './App.css';
import Quiz from './Quiz';
import Score from './Score';
import Start from './Start';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('건강상식');

  return (
    <div className='app'>
      <Route path="/" exact>
        <Start name={name} />
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
