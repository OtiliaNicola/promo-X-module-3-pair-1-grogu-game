import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";


function App() {
  
  const [groguPosition, setGroguPosition] = useState(0);
  const [merchandiseList, setMerchandiseList] = useState(['Cookie', 'Egg', 'Frog']);

  const rollDice = () => {
    const numberRandom = getRandomNumber(1,4);
    let message = '';
  if (numberRandom === 4) {
    setGroguPosition(groguPosition + 1);
    message = 'Grogu ha avanzado una casilla.';
  } else (numberRandom === 1){
    setMerchandiseList(po)
  }

}}

  return (
    <>
    <Header/>
    <main className="page">
      <Board/>
      <section>
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </>
  )


export default App;
