import './Algo.css'; //Realizando o import da classe css para utilização no JSX

//Função que retornará o JSX
function Algo() {
  const name = 'José'.toUpperCase()
  
  //É possível utilizar uma função em nosso componente
  const mult = (a, b)=>{
    let produto = a * b
    return produto
  }

  //JSX
  return (
    <div className="Algo">
      <h1>Novo componente</h1>

      <span>Olá {name}</span>
      <p>Produto de 4 e 2: {mult(4,2)}</p>
    </div>
  );
}

export default Algo;
