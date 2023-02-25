import './App.css';
import Testimonio from './componentes/Testimonio';
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>


function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>
          <h1> Estos son los testimonios de nuestros alumnos </h1>

          <Testimonio/>
        </div>
    </div>
  );
}

export default App;
