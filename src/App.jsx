import './App.css';
import logo from './meditation.svg'
import Meditation from './components/Meditation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Empieza a meditar
        </p>

      <Meditation />
      </header>
    </div>
  );
}

export default App;
