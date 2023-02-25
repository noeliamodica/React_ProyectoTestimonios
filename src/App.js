import './App.css';
import Testimonio from './componentes/Testimonio';
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>


function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>
          <h1> Estos son los testimonios de nuestros alumnos </h1>

          <Testimonio
           nombre='Emma Bostian'
           pais='Sweden'
           imagen='emma'
           cargo='Software Engineer'
           empresa='Spotify'
           testimonio= 'Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer'
          />


          <Testimonio
           nombre='Shawn Wang'
           pais='Singapore'
           imagen='shawn'
           cargo='Software Engineer'
           empresa='Amazon'
           testimonio= 'Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer'
          />


          <Testimonio
           nombre='Sarah Chima'
           pais='Nigeria'
           imagen='sarah'
           cargo='Software Engineer'
           empresa='ChatDesk'
           testimonio= 'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
          />

        </div>
    </div>
  );
}

export default App;
