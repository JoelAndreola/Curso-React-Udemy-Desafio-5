import './App.css';
import CarsInfo from './components/CarsInfo';

function App() {
  const cars = [
    { id: 1, nome: "Chevette", marca: "Chevrolet", cor: "Preto", ano: 75, img: require("./img/Chevette-75.jpg")},
    { id: 2, nome: "Maverick", marca: "Chevrolet", cor: "Amarelo", ano: 76, img: require("./img/maverick-76.jpg")},
    { id: 3, nome: "Mustang", marca: "Ford", cor: "Verde", ano: 67, img: require("./img/mustang-67.jpg")},
  ]

  return (
    <div className="App">
      <h2>Carros a Venda</h2>
      <div className="divCentral">
        {cars.map((carro) => (
          <CarsInfo carro={carro}/>
        ))}
      </div>
    </div>
  );
}

export default App;
