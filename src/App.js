import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <h1>TIME</h1>
        <button>Get Time</button>
   </div>
  );
}

export default App;


// console.log
let time = new Date().toLocaleTimeString();
console.log(time);