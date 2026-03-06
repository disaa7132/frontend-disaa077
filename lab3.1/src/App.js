import './App.css';
import CounterApp from './CounterApp';
import UserApp from './UserApp';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Lab 3.1 - React Components</h1>
      <CounterApp />
      <hr />
      <UserApp />
    </div>
  );
}

export default App;
