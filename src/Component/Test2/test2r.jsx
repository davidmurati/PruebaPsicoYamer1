import React, { useState } from 'react';
import CryptoJS from 'crypto-js'; // Asegúrate de importar CryptoJS
import "./Test2.css";
import Navbar from '../Navbar/Navbar';

const preguntas = [
  {
      texto: "1) El queso se fabrica de:",
      opciones: [
        "Las flores",
        "La harina",
        "La leche",
        "Las uvas",
        "El azúcar"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "2) Lo contrario de abierto es:",
      opciones: [
        "Liso",
        "Cerrado",
        "Delante",
        "Claro",
        "Despejado"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "3) De las siguientes palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Rojo",
        "Amarillo",
        "Morado",
        "Bandera",
        "Verde"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "4) El pájaro canta y el perro...",
      opciones: [
        "Habla",
        "Rebuzna",
        "Cacarea",
        "Maúlla",
        "Ladra"
      ],
      respuestaCorrecta: 4,
    },
    {
      texto: "5) Escribe los dos números que faltan a esta serie: 10, 15, 20, 25, x, 35, 40, x, 50",
      opciones: [
        "30 y 50",
        "25 y 45",
        "20 y 40",
        "30 y 40",
        "35 y 45"
      ],
      respuestaCorrecta: 0, // Índice de la respuesta correcta: "30 y 50"
    },
    {
      texto: "6) Para medir la temperatura se emplea...",
      opciones: [
        "Litro",
        "Gramo",
        "Termómetro",
        "Metro",
        "Kilowatio"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "7) Lo contrario de dormido es:",
      opciones: [
        "Noche",
        "Luz",
        "Amanecer",
        "Despierto",
        "Día"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "8) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Agua",
        "Platino",
        "Café",
        "Té",
        "Cerveza"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "9) El zapato protege al pie, y el sombrero protege a:",
      opciones: [
        "La cabeza",
        "La mano",
        "El dedo",
        "El brazo",
        "La rodilla"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "10) Escribe los números que faltan a esta serie: 6, 9, 12, x, 18, 21, 24, x, 30",
      opciones: [
        "15 y 27",
        "12 y 24",
        "18 y 25",
        "13 y 27",
        "14 y 26"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "11) El triángulo es una figura formada por:",
      opciones: [
        "4 lados",
        "6 lados",
        "65 lados",
        "3 lados",
        "9 lados"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "12) Lo contrario de negro es:",
      opciones: [
        "Oscuro",
        "Sombra",
        "Opaco",
        "Sucio",
        "Blanco"
      ],
      respuestaCorrecta: 4,
    },
    {
      texto: "13) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Enrique",
        "Pedro",
        "Ana",
        "José",
        "Carlos"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "14) El naranjo es un árbol, y el perro es:",
      opciones: [
        "Un objeto",
        "Un animal",
        "Una cosa",
        "Un mineral",
        "Un vegetal"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "15) Escribe los números que faltan a esta serie: 7, 9, 11, 13, x, 17, x, 21, 23",
      opciones: [
        "15 y 19",
        "16 y 18",
        "14 y 18",
        "12 y 18",
        "13 y 20"
      ],
      respuestaCorrecta: 0, // Índice de la respuesta correcta: "15 y 19"
    },
    {
      texto: "16) El gato es un:",
      opciones: [
        "Mamífero",
        "Insecto",
        "Ave",
        "Pez",
        "Reptil"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "17) Lo contrario de triste es:",
      opciones: [
        "Alegre",
        "Preocupado",
        "Dolorido",
        "Desgraciado",
        "Enfermo"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "18) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Bogotá",
        "Lima",
        "Alpes",
        "Caracas",
        "Quito"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "19) La piel cubre al hombre, y las plumas cubren a:",
      opciones: [
        "La vaca",
        "El perro",
        "El gato",
        "La gallina",
        "El caballo"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "20) Escribe los números que faltan a esta serie: 7, 14, 21, 28, x, 42, 49, x, 63, 70",
      opciones: [
        "35 y 56",
        "30 y 50",
        "32 y 55",
        "36 y 53",
        "34 y 57"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "21) Treinta es el triple de:",
      opciones: [
        "Quince",
        "Tres",
        "Diez",
        "Doce",
        "Cinco"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "22) Lo contrario de calor es:",
      opciones: [
        "Sudor",
        "Fatiga",
        "Blanco",
        "Frío",
        "Luz"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "23) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Cuchara",
        "Plato",
        "Tenedor",
        "Cuchillo",
        "Cucharita"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "24) Para coser se emplea la aguja, y para dibujar se emplea el:",
      opciones: [
        "Lápiz",
        "Bastón",
        "Tintero",
        "Pie",
        "Ojo"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "25) Escribe los números que faltan a esta serie: 40, 36, 32, 28, x, 20, 16, 12, x, 4",
      opciones: [
        "24 y 8",
        "22 y 6",
        "25 y 10",
        "23 y 9",
        "21 y 7"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "26) La cordillera de los Andes está en:",
      opciones: [
        "Europa",
        "Asia",
        "América",
        "Austria",
        "África"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "27) Lo contrario de arriba es:",
      opciones: [
        "Dentro",
        "Abajo",
        "Cerca",
        "Completo",
        "Lejos"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "28) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "General",
        "Teniente",
        "Capitán",
        "Presidente",
        "Coronel"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "29) Con el cuero se fabrica el calzado, y con la tela:",
      opciones: [
        "Piel",
        "Lana",
        "Algodón",
        "Seda",
        "Vestidos"
      ],
      respuestaCorrecta: 4,
    },
    {
      texto: "30) Escribe los dos números que faltan a esta serie: 64, 58, 52, 46, x, 34, 28, x, 16, 10, 4",
      opciones: [
        "40 y 22",
        "42 y 24",
        "38 y 20",
        "36 y 18",
        "44 y 26"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "31) Roma es la Capital de:",
      opciones: [
        "Nicaragua",
        "España",
        "Grecia",
        "Italia",
        "Paraguay"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "32) Lo contrario de si es:",
      opciones: [
        "Antes",
        "Afirmar",
        "Duda",
        "Luego",
        "No"
      ],
      respuestaCorrecta: 4,
    },
    {
      texto: "33) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Vaso",
        "Copa",
        "Agua",
        "Jarra",
        "Taza"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "34) La Nariz sirve para oler, y los ojos sirven para:",
      opciones: [
        "Oir",
        "Ver",
        "Gustar",
        "Tocar",
        "Andar"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "35) Escriba los dos números que faltan a esta serie: 5, 10, 20, x, 80, 160, x, 640, 1280",
      opciones: [
        "40 y 320",
        "50 y 300",
        "30 y 250",
        "60 y 350",
        "45 y 310"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "36) El idioma oficial de Haití es el:",
      opciones: [
        "Inglés",
        "Francés",
        "Español",
        "Holandés",
        "Portugués"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "37) Lo contrario de despacio es:",
      opciones: [
        "De prisa",
        "Lento",
        "Pausado",
        "Débil",
        "Grueso"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "38) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Carpintero",
        "Herrero",
        "Médico",
        "Albañil",
        "Zapatero"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "39) Al lunes sigue el martes, y a enero sigue:",
      opciones: [
        "Junio",
        "Viernes",
        "Mes",
        "Febrero",
        "Año"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "40) Escriba los dos números que faltan a esta serie: 2, 4, x, 16, 22, 32, x, 128, 256",
      opciones: [
        "8 y 64",
        "6 y 48",
        "10 y 60",
        "12 y 72",
        "7 y 56"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "41) Fernando Magallanes fue un famoso:",
      opciones: [
        "Militar",
        "Aviador",
        "Navegante",
        "Sabio",
        "Sacerdote"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "42) Lo contrario de blando es:",
      opciones: [
        "Suave",
        "Duro",
        "Liso",
        "Grueso",
        "Débil"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "43) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Ver",
        "Oir",
        "Oler",
        "Andar",
        "Gustar"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "44) El codo articula el brazo, y la rodilla articula:",
      opciones: [
        "El corazón",
        "Los dedos",
        "Los pulmones",
        "El cerebro",
        "La pierna"
      ],
      respuestaCorrecta: 4,
    },
    {
      texto: "45) Escriba los dos números que faltan a esta serie: 5, 6, 8, 11, 15, 20, x, 33, 41, x, 60",
      opciones: [
        "25 y 50",
        "30 y 55",
        "24 y 49",
        "28 y 52",
        "27 y 51"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "46) Cristóbal Colón descubrió América en el:",
      opciones: [
        "Siglo XIII",
        "Siglo XVII",
        "Siglo IV",
        "Siglo XV",
        "Siglo XIV"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "47) Lo contrario de fuera es:",
      opciones: [
        "Libre",
        "Lejos",
        "Distinto",
        "Malo",
        "Dentro"
      ],
      respuestaCorrecta: 4,
    },
    {
      texto: "48) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Venus",
        "Júpiter",
        "Satélite",
        "Urano",
        "Neptuno"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "49) Octubre es anterior a Noviembre y Jueves es anterior a:",
      opciones: [
        "Diciembre",
        "Viernes",
        "Septiembre",
        "Miércoles",
        "Día"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "50) Escriba los dos números que faltan a esta serie: 90, 80, 71, 63, x, 50, 45, x, 38, 36, 35",
      opciones: [
        "56 y 41",
        "57 y 42",
        "55 y 40",
        "58 y 43",
        "59 y 44"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "51) Los primeros ferrocarriles empezaron a funcionar hacia:",
      opciones: [
        "1900",
        "1800",
        "1825",
        "1750",
        "1710"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "52) Lo contrario de empezar es:",
      opciones: [
        "Iniciar",
        "Adelantar",
        "Obstruir",
        "Terminar",
        "Buscar"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "53) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Feliz",
        "Triste",
        "Satisfecho",
        "Alegre",
        "Contento"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "54) La paz viene después de la guerra y la calma viene después de:",
      opciones: [
        "La tormenta",
        "El crepúsculo",
        "El bienestar",
        "La felicidad",
        "El ocaso"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "55) Escriba los dos números que faltan a esta serie: 120, 100, 82, 66, x, 40, 30, x, 15, 12, 10",
      opciones: [
        "52 y 22",
        "55 y 25",
        "53 y 23",
        "50 y 20",
        "51 y 21"
      ],
      respuestaCorrecta: 0,
    },
    {
      texto: "56) La bitácora es de uso indispensable en:",
      opciones: [
        "Música",
        "Biología",
        "Navegación",
        "Teatro",
        "Química"
      ],
      respuestaCorrecta: 2,
    },
    {
      texto: "57) Lo contrario de homogéneo es:",
      opciones: [
        "Compacto",
        "Heterogéneo",
        "Abstracto",
        "Sutil",
        "Neutro"
      ],
      respuestaCorrecta: 1,
    },
    {
      texto: "58) De estas cinco palabras, una pertenece a una clase diferente. ¿Cuál es?",
      opciones: [
        "Stravinski",
        "Bach",
        "Mozart",
        "Newton",
        "Chopin"
      ],
      respuestaCorrecta: 3,
    },
    {
      texto: "59) La biblioteca es para guardar libros y la pinacoteca para guardar:",
      opciones: [
        "Periódico",
        "Discos",
        "Películas",
        "Monedas",
        "Cuadros"
      ],
      respuestaCorrecta: 4,
    },
    {
      texto: "60) Escriba los números que faltan a esta serie: 6561, 2187, 729, x, 81, x, 9, 3",
      opciones: [
        "243 y 27",
        "250 y 30",
        "240 y 28",
        "230 y 26",
        "235 y 25"
      ],
      respuestaCorrecta: 0,
    }
// Agrega más preguntas en este formato
];

const nivelesEstudios = [
  { value: '3gradoOmenos', label: '3er grado o menos' },
  { value: '4o5grado', label: '4to o 5to grado' },
  { value: '6grado', label: '6to grado' },
];

const BARSIT = () => {
  const [respuestas, setRespuestas] = useState({});
  const [cedula, setCedula] = useState("");
  const [nivelEstudios, setNivelEstudios] = useState('');
  const [totalCorrectas, setTotalCorrectas] = useState(null);
  const [archivoCargado, setArchivoCargado] = useState(null);
  const [claveInput, setClaveInput] = useState("");

  const handleChange = (index, value) => {
    setRespuestas({
      ...respuestas,
      [index]: parseInt(value, 10)
    });
  };

  const handleNivelEstudiosChange = (e) => {
    setNivelEstudios(e.target.value);
  };

  const finalizarTest = () => {
    if (!nivelEstudios) {
      alert('Por favor, selecciona tu nivel de estudios.');
      return;
    }

    const correctas = preguntas.reduce((acc, pregunta, index) => {
      if (respuestas[index] === pregunta.respuestaCorrecta) {
        return acc + 1;
      }
      return acc;
    }, 0);

    setTotalCorrectas(correctas);

    // Determinar la categoría basada en el nivel de estudios y puntuación
    let categoria = '';
    if (nivelEstudios === '3gradoOmenos') {
      if (correctas < 6) categoria = 'Muy inferior';
      else if (correctas >= 7 && correctas <= 14) categoria = 'Inferior';
      else if (correctas >= 15 && correctas <= 26) categoria = 'Mediano';
      else if (correctas >= 27 && correctas <= 34) categoria = 'Superior';
      else if (correctas >= 34) categoria = 'Muy superior';
    } else if (nivelEstudios === '4o5grado') {
      if (correctas < 15) categoria = 'Muy inferior';
      else if (correctas >= 16 && correctas <= 23) categoria = 'Inferior';
      else if (correctas >= 24 && correctas <= 35) categoria = 'Mediano';
      else if (correctas >= 36 && correctas <= 44) categoria = 'Superior';
      else if (correctas >= 44) categoria = 'Muy superior';
    } else if (nivelEstudios === '6grado') {
      if (correctas < 26) categoria = 'Muy inferior';
      else if (correctas >= 27 && correctas <= 37) categoria = 'Inferior';
      else if (correctas >= 34 && correctas <= 43) categoria = 'Mediano';
      else if (correctas >= 44 && correctas <= 50) categoria = 'Superior';
      else if (correctas >= 50) categoria = 'Muy superior';
    }

    const mensaje = `Resultados del TEST RÁPIDO BARRANQUILLA BARSIT:

Cédula: ${cedula}
Nivel de Estudios: ${nivelEstudios}
Total de respuestas correctas: ${correctas}
Categoría: ${categoria}
`;

    descargarArchivo(mensaje);
  };

  const descargarArchivo = (contenido) => {
    const clave = "123456"; // Clave para encriptar
    const contenidoEncriptado = CryptoJS.AES.encrypt(contenido, clave).toString();
    const blob = new Blob([contenidoEncriptado], { type: 'text/plain;charset=utf-8' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `Resultados_Test_BARSIT_${cedula}.txt`;
    enlace.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setArchivoCargado(file);
    }
  };

  const handleClaveChange = (event) => {
    setClaveInput(event.target.value);
  };

  const desencriptarArchivo = () => {
    if (!archivoCargado) {
      alert("Por favor, seleccione un archivo.");
      return;
    }

    const clave = claveInput;
    const reader = new FileReader();
    reader.onload = (event) => {
      const contenidoEncriptado = event.target.result;
      try {
        const bytes = CryptoJS.AES.decrypt(contenidoEncriptado, clave);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        alert("Contenido desencriptado:\n" + originalText);
      } catch (error) {
        alert("Clave incorrecta o archivo dañado.");
      }
    };
    reader.readAsText(archivoCargado);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px', lineHeight: '1.6' }}>
       
       <header className="header">
                <Navbar />
            
        </header>

      <div className="titulo-container">
      <h1>TEST RÁPIDO BARRANQUILLA BARSIT</h1>
      </div>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="cedula">Ingrese su Cédula:</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="nivelEstudios">Seleccione su nivel de estudios:</label>
          <select
            id="nivelEstudios"
            value={nivelEstudios}
            onChange={handleNivelEstudiosChange}
            style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
          >
            <option value="">Seleccionar nivel</option>
            {nivelesEstudios.map((nivel) => (
              <option key={nivel.value} value={nivel.value}>{nivel.label}</option>
            ))}
          </select>
        </div>

        {preguntas.map((pregunta, index) => (
          <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <p>{pregunta.texto}</p>
            <div style={{ marginLeft: '20px' }}>
              {pregunta.opciones.map((opcion, i) => (
                <label key={i} style={{ display: 'block' }}>
                  <input
                    type="radio"
                    name={`pregunta${index}`}
                    value={i}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                  {opcion}
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
      <button className='boton'
        onClick={finalizarTest}
        style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Finalizar Test
      </button>
      {totalCorrectas !== null && (
        <div id="results" style={{ marginTop: '20px', backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
          <h2>Resultados del Test</h2>
          <h2>Gracias por finalizar el Test</h2>
         {/* <p>Total de respuestas correctas: {totalCorrectas}</p> */}
        </div>
      )}

      {/* Sección para cargar el archivo y desencriptarlo */}
      <h2>Desencriptar Archivo</h2> 
      <input type="file" onChange={handleFileChange} accept=".txt" />
      <input
        type="text"
        placeholder="Ingrese la clave"
        value={claveInput}
        onChange={handleClaveChange}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <button className='boton'
        onClick={desencriptarArchivo}
        style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Desencriptar
      </button>
    </div>
  );
};

export default BARSIT;