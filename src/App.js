import React from 'react';
import './App.css';
import { Boton } from './componentes/Boton';
import { Contador } from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo-white.png'


function App() {
  const [numClics, setNumClics] = React.useState(0);

const manejarClick = () => {
  setNumClics(numClics+1);
}

const reiniciarContador = () => {
  setNumClics(0);
}

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton 
          texto='Clic'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
