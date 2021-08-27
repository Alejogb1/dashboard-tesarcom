import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fetchData from './services/fetchData';
function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetchData
    .getData()
    .then(response => setData(response.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
