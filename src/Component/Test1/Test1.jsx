import React, { useState } from 'react';
import CryptoJS from 'crypto-js'; // Asegúrate de importar CryptoJS
import "./Test1.css";
import Navbar from '../Navbar/Navbar';

const preguntas = [
  {
    texto: "1) Se le ha asignado un puesto en una gran empresa. La mejor forma de establecer relaciones amistosas y cordiales con sus nuevos compañeros será:",
    opciones: [
      "Evitando tomar nota de los errores en que incurran.",
      "Hablando bien de ellos al jefe.",
      "Mostrando interés en el trabajo de ellos.",
      "Pidiéndoles les permitan hacer los trabajos que usted puede hacer mejor."
    ],
    respuestaCorrecta: 2,
    habilidad: "HABILIDAD PARA ESTABLECER RELACIONES INTERPERSONALES"
  },{
    texto: "2) Tiene usted un empleado muy eficiente pero que constantemente se queja del trabajo, sus quejas producen mal efecto en los demás empleados, lo mejor sería:",
    opciones: [
        "Pedir a los demás empleados que no hagan caso.",
        "Averiguar la causa de esa actitud y procurar su modificación.",
        "Cambiarlo de departamento donde quede a cargo de otro jefe.",
        "Permitirle planear lo más posible acerca de su trabajo."
    ],
    respuestaCorrecta: 1,
    habilidad: "HABILIDAD DE SUPERVISION"
},
{
    texto: "3) Un empleado de 60 años de edad que ha sido leal a la empresa durante 25 años se queja del exceso de trabajo. Lo mejor sería:",
    opciones: [
        "Decirle que vuelva a su trabajo porque si no será desvinculado.",
        "Despedirlo, substituyéndolo por alguien más joven.",
        "Darle un aumento de sueldo que evite que continúe quejándose.",
        "Aminorar su trabajo."
    ],
    respuestaCorrecta: 3,
    habilidad: "HABILIDAD DE SUPERVISION"
},
{
    texto: "4) Uno de los socios, sin autoridad sobre usted le ordena haga algo en forma bien distinta de lo que planeaba. ¿Qué haría usted?",
    opciones: [
        "Acatar la orden y no armar mayor revuelo.",
        "Ignorar las indicaciones y hacerlo según había planeado.",
        "Decirle que esto no es asunto que a usted le interesa y que usted hará las cosas a su modo.",
        "Decirle que lo haga él mismo."
    ],
    respuestaCorrecta: 1,
    habilidad: "CAPACIDAD DE DECISION EN LAS RELACIONES HUMANAS"
},
{
    texto: "5) Usted visita a un amigo íntimo que ha estado enfermo por algún tiempo. Lo mejor sería:",
    opciones: [
        "Platicarle sus diversiones recientes.",
        "Platicarle nuevas cosas referentes a sus amigos mutuos.",
        "Comentar su enfermedad.",
        "Enfatizar lo mucho que le apena verle enfermo."
    ],
    respuestaCorrecta: 1,
    habilidad: "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES"
},
{
    texto: "6) Trabaja usted en una industria y su jefe quiere que tome un curso relacionado con su carrera pero que sea compatible con el horario de su trabajo. Lo mejor sería:",
    opciones: [
        "Continuar normalmente su carrera e informar al jefe sí pregunta.",
        "Explicar la situación u obtener su opinión en cuanto a la importancia relativa de ambas situaciones.",
        "Dejar la escuela en relación a los intereses del trabajo.",
        "Asistir en forma alterna y no hacer comentarios."
    ],
    respuestaCorrecta: 1,
    habilidad: "CAPACIDAD DE DECISION EN LAS RELACIONES HUMANAS"
},
{
    texto: "7) Un agente viajero con 15 años de antigüedad decide, presionado por su familia sentar raíces. Se le cambia a las oficinas generales. Es de esperar que:",
    opciones: [
        "Guste de los descansos del trabajo de oficina.",
        "Se sienta inquieto por la rutina de la oficina.",
        "Busque otro trabajo.",
        "Resulte muy ineficiente en el trabajo de oficina."
    ],
    respuestaCorrecta: 1,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "8) Tiene dos invitados a cenar, el uno radical y el otro conservador. Surge una acalorada discusión respecto a la política. Lo mejor sería:",
    opciones: [
        "Tomar partido.",
        "Intentar cambiar de tema.",
        "Intervenir dando los propios puntos de vista y mostrar donde ambos pecan de extremosos.",
        "Pedir cambien de tema para evitar mayor discusión."
    ],
    respuestaCorrecta: 1,
    habilidad: "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES"
},
{
    texto: "9) Un joven invita a una dama al teatro, al llegar se percata de que ha olvidado la cartera. Sería mejor:",
    opciones: [
        "Tratar de obtener boletos dejando el reloj en prenda.",
        "Buscar a algún amigo a quien pedir prestado.",
        "Decidir de acuerdo con ella lo procedente.",
        "Dar una excusa plausible para ir a casa por dinero."
    ],
    respuestaCorrecta: 2,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "10) Usted ha tenido experiencia como vendedor y acaba de conseguir de una tienda un empleo. La mejor forma de relacionarse con los empleados del departamento seria:",
    opciones: [
        "Permitirle hacer la mayoría de las ventas por unos días en tanto observa sus métodos.",
        "Tratar de instituir los métodos que anteriormente le fueron útiles.",
        "Adaptarse mejor a las condiciones y aceptar consejos de sus compañeros.",
        "Pedir al jefe todo el consejo necesario."
    ],
    respuestaCorrecta: 2,
    habilidad: "HABILIDAD PARA ESTABLECER RELACIONES INTERPERSONALES"
},
{
    texto: "11) Es usted un joven empleado que va a comer con una maestra a quien conoce superficialmente. Lo mejor sería iniciar la conversación acerca de:",
    opciones: [
        "Algún tópico de actualidad.",
        "Algún aspecto interesante de su propio trabajo.",
        "Las tendencias actuales en el terreno docente.",
        "Las sociedades de padres de familia."
    ],
    respuestaCorrecta: 0,
    habilidad: "HABILIDAD PARA ESTABLECER RELACIONES INTERPERSONALES"
},
{
    texto: "12) Una señora de especiales méritos que por largo tiempo ha dirigido trabajos benéficos dejando las labores de su casa a cargo de la servidumbre, se cambia a otra población. Es de esperarse que ella:",
    opciones: [
        "Se sienta insatisfecha de su nuevo hogar.",
        "Se interese más por los trabajos domésticos.",
        "Intervenga poco a poco en la vida de la comunidad, continuando así sus intereses.",
        "Adopte nuevos intereses en la nueva comunidad."
    ],
    respuestaCorrecta: 2,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "13) Quiere pedirle un favor a un conocido con quien tiene poca confianza. La mejor forma de lograrlo sería:",
    opciones: [
        "Haciéndole creer que será él quien se beneficie más.",
        "Enfatice la importancia que para usted tiene que se le conceda.",
        "Ofrecer algo de retribución.",
        "Decir que lo que desea en forma breve indicando los motivos."
    ],
    respuestaCorrecta: 3,
    habilidad: "HABILIDAD PARA ESTABLECER RELACIONES INTERPERSONALES"
},
{
    texto: "14) Un joven de 24 años gasta bastante tiempo y dinero en diversiones, solo ha hecho ver que así no logrará al éxito en el trabajo. Probablemente cambie sus costumbres si:",
    opciones: [
        "Sus hábitos nocturnos lesionan su salud.",
        "Sus amigos enfatizan el daño que se hace a sí mismo.",
        "Su jefe se da cuenta y lo previene.",
        "Se interesa en el desarrollo de alguna fase de su trabajo."
    ],
    respuestaCorrecta: 3,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "15) Tras de haber hecho un buen número de favores a un amigo, este empieza a dar por hecho que usted será quien le resuelva todas sus pequeñas dificultades. La mejor forma de readaptar la situación sin ofenderle sería:",
    opciones: [
        "Explicar el daño que se está causando.",
        "Pedir a un amigo mutuo que trate de arreglar las cosas.",
        "Ayudarle una vez más pero de tal manera que sienta que mejor hubiera sido no haberlo solicitado.",
        "Darle una excusa para no seguir ayudándole."
    ],
    respuestaCorrecta: 3,
    habilidad: "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES"
},
{
    texto: "16) Una persona recién ascendida a un mejor puesto de autoridad lograría mejor sus metas y la buena voluntad de los empleados:",
    opciones: [
        "Tratando de que cada empleado entienda qué es la verdadera eficiencia.",
        "Ascendiendo cuanto antes a quienes considere lo merezcan.",
        "Preguntando confidencialmente a cada empleado en cuanto a los cambios que estiman necesarios.",
        "Seguir los sistemas del anterior jefe y gradualmente hacer los cambios necesarios."
    ],
    respuestaCorrecta: 3,
    habilidad: "HABILIDAD DE SUPERVISION"
},
{
    texto: "17) Vive a 15 km. del centro y ha ofrecido llevar de regreso a un amigo a las 16:00 p.m. él lo espera desde las 15:00 y a las 16:00 horas usted se entera que no podrá salir antes de las 17:30, sería mejor:",
    opciones: [
        "Pedirle un taxi.",
        "Explicarle y dejar que él decida.",
        "Pedirle que espere hasta las 17:30 horas.",
        "Proponerle que se lleve su auto."
    ],
    respuestaCorrecta: 1,
    habilidad: "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES"
},
{
    texto: "18) Es usted un ejecutivo y dos de sus empleados se llevan mal, ambos son eficientes. Lo mejor sería:",
    opciones: [
        "Despedir al menos eficiente.",
        "Dar trabajo en común que a ambos interese.",
        "Hacerles ver el daño que se hacen.",
        "Darles trabajos distintos."
    ],
    respuestaCorrecta: 3,
    habilidad: "HABILIDAD DE SUPERVISION"
},
{
    texto: "19) El señor González ha estado conservando su puesto subordinado por 10 años, desempeña su trabajo callado y confidencialmente y se le extrañará cuando se vaya. De obtener el trabajo en otra empresa, muy probablemente:",
    opciones: [
        "Asuma fácilmente responsabilidad como supervisor.",
        "Haga ver de inmediato su valor.",
        "Sea lento para abrirse las necesarias oportunidades.",
        "Renuncie ante la más ligera crítica de su trabajo."
    ],
    respuestaCorrecta: 2,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "20) Va usted a ser maestro de ceremonias, en una cena el próximo sábado día en que por la mañana, debido a enfermedad de su familia, se ve imposibilitado para asistir lo mejor sería:",
    opciones: [
        "Cancelar la cena.",
        "Encontrar quien lo sustituya.",
        "Detallar los planes que tenía y evitarlos.",
        "Enviar una nota explicando la causa de su ausencia."
    ],
    respuestaCorrecta: 1,
    habilidad: "CAPACIDAD DE DECISION EN LAS RELACIONES HUMANAS"
},
{
    texto: "21) En igualdad de circunstancias el empleado que mejor se adapta a un nuevo puesto es aquel que:",
    opciones: [
        "Ha sido bueno en puestos anteriores.",
        "Ha tenido éxito durante 10 años en su puesto.",
        "Tiene sus propias ideas e invariablemente se rige por ellas.",
        "Cuenta con una buena recomendación de su jefe anterior."
    ],
    respuestaCorrecta: 0,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "22) Un conocido le platica acerca de una afición que él tiene, su conversación le aburre. Lo mejor sería:",
    opciones: [
        "Escuchar de manera cortés, pero aburrida.",
        "Escuchar con fingido interés.",
        "Decirle francamente que el tema no le interesa.",
        "Mirar el reloj con impaciencia."
    ],
    respuestaCorrecta: 0,
    habilidad: "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES"
},
{
    texto: "23) Es usted un empleado ordinario en una oficina grande. El jefe entra cuando usted lee en vez de trabajar. Lo mejor sería:",
    opciones: [
        "Doblar el periódico y volver a trabajo.",
        "Pretender que obtiene recortes necesarios al trabajo.",
        "Tratar de interesar al jefe leyéndole un encabezado importante.",
        "Seguir leyendo sin mostrar embarazo."
    ],
    respuestaCorrecta: 0,
    habilidad: "CAPACIDAD DE DECISION EN LAS RELACIONES HUMANAS"
},
{
    texto: "24) Es usted un maestro de primaria. Camino a la escuela tras de la primera nevada, algunos de sus alumnos lanzan bolas de nieve. Desde el punto de vista de la buena administración de la escolar, usted debería:",
    opciones: [
        "Castigarle ahí mismo por su indisciplina.",
        "Decirles que de volverlo a hacer los castigará.",
        "Pasar la queja a sus padres.",
        "Tomarlo como broma y no hacer caso al respecto."
    ],
    respuestaCorrecta: 3,
    habilidad: "HABILIDAD DE SUPERVISION"
},
{
    texto: "25) Preside el Comité de Mejoras Materiales en su colonia; las últimas reuniones han sido de escasa asistencia. Se mejoraría la asistencia:",
    opciones: [
        "Visitando vecinos prominentes explicándoles los problemas.",
        "Avisar de un programa interesante para la reunión.",
        "Poner avisos en los lugares públicos.",
        "Enviar avisos personales."
    ],
    respuestaCorrecta: 1,
    habilidad: "HABILIDAD PARA ESTABLECER RELACIONES INTERPERSONALES"
},
{
    texto: "26) Salinas, eficiente, pero de esos que “todo lo saben”, critica a Montoya, el jefe opina que la idea de Montoya ahorra tiempo. Probablemente Salinas:",
    opciones: [
        "Pida otro trabajo al jefe.",
        "Lo haga a su modo sin comentarios.",
        "Lo haga con Montoya, pero siga criticándolo.",
        "Lo haga con Montoya, pero mal a propósito."
    ],
    respuestaCorrecta: 2,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "27) Un hombre de 64 años tuvo algún éxito cuando joven como político, sus modos directos le han impedido descollar los últimos 20 años, lo más probable es que:",
    opciones: [
        "Persista en su manera de ser.",
        "Cambie para lograr éxito.",
        "Forme un nuevo partido político.",
        "Abandone la política por inmoral."
    ],
    respuestaCorrecta: 0,
    habilidad: "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES"
},
{
    texto: "28) Es usted un joven que encuentra en la calle a una mujer de más edad a quien apenas conoce y que parece haber estado llorando. Lo mejor sería:",
    opciones: [
        "Preguntarle por qué está triste.",
        "Pasarle el brazo por el hombro y consolarla.",
        "Simular no advertir su pena.",
        "Simular no haberla visto."
    ],
    respuestaCorrecta: 2,
    habilidad: "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES"
},
{
    texto: "29) Un compañero flojea de tal manera que usted le toca más de lo que le corresponde. La mejor forma de conservar las relaciones sería:",
    opciones: [
        "Explicar el caso al jefe cortésmente.",
        "Cortésmente indicarle que debe hacer lo que le corresponde o que usted se quejara con el jefe.",
        "Hacer tanto como pueda eficientemente y no decir nada del caso al jefe.",
        "Hacer lo suyo y dejar pendiente lo que el compañero no haga."
    ],
    respuestaCorrecta: 0,
    habilidad: "CAPACIDAD DE DECISION EN LAS RELACIONES HUMANAS"
},
{
    texto: "30) Se le ha asignado un puesto ejecutivo, en una organización. Para ganar el respeto y la admiración de sus subordinados, sin perjuicio de sus planes, habría que:",
    opciones: [
        "Ceder en todos los pequeños puntos posibles.",
        "Tratar de convencerlos de todas sus ideas.",
        "Ceder parcialmente en todas las cuestiones importantes.",
        "Abogar por muchas reformas."
    ],
    respuestaCorrecta: 3,
    habilidad: "HABILIDAD DE SUPERVISION"
}
  // Agrega más preguntas en este formato
];

const preguntasPorHabilidad = {
  "HABILIDAD DE SUPERVISION": 6,
  "CAPACIDAD DE DECISION EN LAS RELACIONES HUMANAS": 5,
  "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES": 8,
  "HABILIDAD PARA ESTABLECER RELACIONES INTERPERSONALES": 5,
  "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES": 6
};

const MossTest = () => {
  const [respuestas, setRespuestas] = useState({});
  const [cedula, setCedula] = useState("");
  const [resultados, setResultados] = useState(null);
  const [archivoCargado, setArchivoCargado] = useState(null);
  const [claveInput, setClaveInput] = useState("");

  const handleChange = (index, value) => {
    setRespuestas({
      ...respuestas,
      [index]: parseInt(value, 10)
    });
  };

  const finalizarTest = () => {
    const resultadosIniciales = {
      "HABILIDAD DE SUPERVISION": 0,
      "CAPACIDAD DE DECISION EN LAS RELACIONES HUMANAS": 0,
      "CAPACIDAD DE EVALUACION DE PROBLEMAS INTERPERSONALES": 0,
      "HABILIDAD PARA ESTABLECER RELACIONES INTERPERSONALES": 0,
      "SENTIDO COMUN Y TACTO EN LAS RELACIONES INTERPERSONALES": 0
    };

     // Recorre las preguntas y verifica las respuestas
  preguntas.forEach((pregunta, index) => {
    if (respuestas[index] === pregunta.respuestaCorrecta) {
      // Suma 1 a la habilidad correspondiente
      if (resultadosIniciales[pregunta.habilidad] !== undefined) {
        resultadosIniciales[pregunta.habilidad]++;
      }
    }
  });

    const resultadosConPorcentajes = {};
    for (const habilidad in resultadosIniciales) {
      const correctas = resultadosIniciales[habilidad];
      const totalPreguntas = preguntasPorHabilidad[habilidad];
      const porcentaje = (correctas / totalPreguntas) * 100;
      const rango = obtenerRango(porcentaje);
      resultadosConPorcentajes[habilidad] = {
        correctas,
        porcentaje: parseFloat(porcentaje.toFixed(2)),
        rango
      };
    }

    setResultados(resultadosConPorcentajes);

    const mensaje = generarMensaje(resultadosConPorcentajes);
    descargarArchivo(mensaje);
  };

  const obtenerRango = (porcentaje) => {
    if (porcentaje >= 98) return "MUY SUPERIOR";
    else if (porcentaje >= 83) return "SUPERIOR";
    else if (porcentaje >= 64) return "MED. SUP.";
    else if (porcentaje >= 42) return "MED. MED.";
    else if (porcentaje >= 27) return "MED. INF.";
    else if (porcentaje >= 7) return "INFERIOR";
    else if (porcentaje >= 2) return "DEF.";
    else return "NO DEFINIDO";
  };

  const generarMensaje = (resultados) => {
    let mensaje = `Resultados del Test de Moss:\n\nCédula: ${cedula}\n`;
    for (const habilidad in resultados) {
      const { correctas, porcentaje, rango } = resultados[habilidad];
      mensaje += `${habilidad}:\n`;
      mensaje += `  Respuestas correctas: ${correctas}\n`;
      mensaje += `  Porcentaje: ${porcentaje}%\n`;
      mensaje += `  Rango: ${rango}\n\n`;
    }
    return mensaje;
  };

  const descargarArchivo = (contenido) => {
    const clave = "123456"; // Clave para encriptar
    const contenidoEncriptado = CryptoJS.AES.encrypt(contenido, clave).toString();
    const blob = new Blob([contenidoEncriptado], { type: 'text/plain;charset=utf-8' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `Resultados_Test_Moss_${cedula}.txt`;
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
  
        // Mostrar el resultado en pantalla
        alert("Contenido desencriptado:\n" + originalText);
  
        // Descargar el archivo desencriptado como .txt
        const blob = new Blob([originalText], { type: 'text/plain;charset=utf-8' });
        const enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = `Resultados_Desencriptados_${cedula}.txt`;
        enlace.click();
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
      <h1>Test de Moss - Prueba de Habilidades Interpersonales</h1>
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
      {resultados && (
        <div id="results" style={{ marginTop: '20px', backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
          <h2>Resultados del Test</h2>
          <h2>Gracias por finalizar el Test</h2>

          {/* inicia comentario de mostrar en pantalla resultado

          {Object.entries(resultados).map(([habilidad, datos]) => (
            <div key={habilidad}>
              <p>
                <strong>{habilidad}:</strong>
              </p>
              <p>Respuestas correctas: {datos.correctas}</p>
              <p>Porcentaje: {datos.porcentaje}%</p>
              <p>Rango: {datos.rango}</p>
            </div> 
          ))}

         finaliza comentario */}

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

export default MossTest;


