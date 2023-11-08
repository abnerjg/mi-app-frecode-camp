import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Aplicaciones mas usadas actualmente</h1>
        <Testimonio
          nombre='Gmail'
          imagen='gmail'
          cargo='Asistente'
          descripcion='Envio correos nacionales e internacionales, Envio correos nacionales e internacionales,Envio correos nacionales e internacionales,Envio correos nacionales e internacionales' />
        <Testimonio
          nombre='Whatsapp'
          imagen='whatsapp'
          cargo='Comuncacion'
          descripcion='Envio mensajes personalizados, Envio mensajes personalizados, Envio mensajes personalizados, Envio mensajes personalizados, Envio mensajes personalizados, Envio mensajes personalizados, Envio mensajes personalizados, Envio mensajes personalizados, Envio mensajes' />
        <Testimonio
          nombre='Zoom'
          imagen='zoom'
          cargo='Virtual'
          descripcion='Programo y doy reuniones virtuales, Programo y doy reuniones virtuales, Programo y doy reuniones virtuales, Programo y doy reuniones virtuales,Programo y doy reuniones virtuales,' />
      </div>
    </div>
  );
}

export default App;
