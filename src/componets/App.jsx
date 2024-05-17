import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";
//import Form from "./Form";
import { useState } from "react";


function App() {
  
  const [groguPosition, setGroguPosition] = useState(0);
  const [merchandiseList, setMerchandiseList] = useState(['Cookie', 'Egg', 'Frog']);
  //const [name, setName] = useState("");

  const rollDice = () => {
    const numberRandom = getRandomNumber(1,4);
    let message = '';
  if (numberRandom === 4) {
    setGroguPosition(groguPosition + 1);
    message = 'Grogu ha avanzado una casilla.';
  } else (numberRandom === 1){
    const removedMerchandise = merchandiseList[namberRandom - 1];
    const updatedMerchandiseList = merchandiseList.filter((item, index) => index !== numberRandom - 1);
    setMerchandiseList(updatedMerchandiseList);
    message = `Se ha descargado una mercancía: ${removedMerchandise}.`;
  }
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}}

  return (
    <>
    <Header/>
    <main className="page">
      <Board/>
     {/* <Form name={name}/>*/}
      <section>
        <button className="dice" onClick={rollDice}>Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
      {merchandiseList.map((item, index) => (
            <div className="goods-item" key={index}>{item}</div>))}
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </>
  )


export default App;
