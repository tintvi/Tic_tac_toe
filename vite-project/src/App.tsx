import { useState } from 'react'
import './App.css'
import History from "./components/History";
import Map from "./components/Map"
import {MAP_SIZE} from "./settings";
import {winnerCombination} from "./settings";


function App() {
  const [mapItems, setMapItems] = useState(
      Array(MAP_SIZE * MAP_SIZE)
          .fill(null)
  );

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const onClickHandler = (index: number): void => {
    console.log("click on index" + index);
    if (mapItems[index] !== null){
      return;
    }
    const newMapItems = [...mapItems];

      newMapItems[index] = currentPlayer;

      setMapItems(newMapItems);
      setCurrentPlayer(currentPlayer === "X" ? "0" : "X");

      //winner check
    const checkWinner = () => {
      //winnerCombination.forEach() //add field check
    }
  }



    return <div className="App">
      <History/>
      <Map mapItems={mapItems} onClickHandler={onClickHandler} currentPlayer={currentPlayer}/>
    </div>;
}

export default App
