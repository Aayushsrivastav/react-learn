import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import Nav from './Nav';

function App() {
  const counter = useSelector(state => state.counter);
  const signedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <Nav />
      {signedIn && (
        <h2>movie</h2>
      )}
    </div>
  );
}

export default App;
