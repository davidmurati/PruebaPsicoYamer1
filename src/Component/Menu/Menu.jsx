import React, { useState } from "react";
import "./Menu.css";
import Footer from '../Footer/Footer';
import imagen1 from './logoY.jpeg';

function App() {
  const [selectedTest, setSelectedTest] = useState(null);

  const handleTestSelection = (test) => {
    setSelectedTest(test);
  };

  return (
    <div className="app-container">
      <div className="welcome-message">
        <h1>¡Bienvenido al Test de Habilidades!</h1>

        <img src={imagen1} className="App-logo" alt="logo" />

        <p>Selecciona uno de los test para comenzar. ¡Te deseamos mucho éxito!</p>
        <p>Al finalizar se generará un archovo txt que deberas enviar a la profesora para su interpretación.</p>
      </div>

      <button className="boton1" onClick={() => window.location.href = "/Test1"}>
        Test 1
        </button>
        <button className="boton1" onClick={() => window.location.href = "/Test2"}>
        Test 2
        </button>

        <Footer />
    </div>
    
  );
}

export default App;