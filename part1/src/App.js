import './App.css';
import Mensaje from './components/Mensaje.js';


const Description = () => {
  return <p>Es una descripcion</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje message="Hola Mundo" color="green" />
      <Mensaje message="This is a test" color="blue" />
      <Mensaje message="Yessica boba" color="red" />
      <Description />
    </div>
  );
}
 
export default App;
