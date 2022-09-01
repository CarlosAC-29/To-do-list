import './App.css';
import jogger from './images/jogger.png';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Checks</h1>
        <section className='main'>
          <div className='actionBar'>
            <h2>To-do List</h2>
            <button className='btn-add'>
              <span>add task</span>
            </button>
          </div>
          <div className='right-img'>
              <img src={jogger} alt='Imagen de jogger' />
              <div className='frase'>
                <h2>Let's get your day going</h2>
              </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
