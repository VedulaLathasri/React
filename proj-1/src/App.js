import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message'
import Counter from './components/Counter';
import TrailProps from './components/trailProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TrailProps name ="latha" age="30"/>
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Welcome/>
        <Greet/> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
