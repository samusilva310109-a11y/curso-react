import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Samuel'
  
  //É possível criar uma função dentro de nosso componente
  const sum = (a, b)=>{
    let soma = a + b
    return soma
  }

  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIu9PQok6_of9pBISB0X-KpGJNnrhkwf9iw&s'

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>

      <span>Olá {name}</span>
      <p>Soma de 4 e 2: {sum(4,2)}</p>
      <img src={url} alt='Imagem Moto'/>
    </div>
  );
}

export default App;
