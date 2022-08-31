import './App.css';
import Jogger from './images/Jogger.png';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Checks</h1>
      </div>
      <div className='actionBar'>
        <h2>To-do list</h2>
        <button className='add-btn'>
          <span>add</span>
        </button>
      </div>
        <div className='task'>
          algo
          <img classname='Jooger' src={Jogger}/>
        </div>
      </div>
      );
}

      export default App;
