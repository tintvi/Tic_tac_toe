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

  const [winner, setWinner] = useState<string | null>(null);
  const [history, setHistory] = useState([]);

  const checkWinner = (mapItems: string[]) => {

    // for (let i = 0; i < winnerCombination.length; i++){
    //   for (let )
    // }
    console.log("checking winner");
    winnerCombination.forEach((winnerRow) => {
      if (mapItems[winnerRow[0]] === mapItems[winnerRow[1]] && mapItems[winnerRow[1]] === mapItems[winnerRow[2]] && mapItems[winnerRow[0]] !== null) {
        console.log("Winner is " + mapItems[winnerRow[0]]);
        setWinner(mapItems[winnerRow[0]]);
        //return winnerRow[0];
      }
    })

    console.log("checking if map is full");
    let full = true;
    mapItems.forEach((field) => {
      if (field === null){
        full = false;
      }
    })
    if (full == true) {
      console.log("Field is full.");
      setWinner("None.");
    }


  }
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const onClickHandler = (index: number): void => {
    console.log("click on index" + index);
    if (mapItems[index] !== null){
      return;
    }
    if (winner !== null) {
      return;
    }

    const newMapItems = [...mapItems];

      newMapItems[index] = currentPlayer;

      setMapItems(newMapItems);
      setCurrentPlayer(currentPlayer === "X" ? "0" : "X");



    const newHistory = [...history]
    // @ts-ignore
    newHistory.push(newMapItems);
    setHistory(newHistory);

      checkWinner(newMapItems);

  }



    return <div className="App">
      <History history={history}/>
      <Map mapItems={mapItems} onClickHandler={onClickHandler} currentPlayer={currentPlayer} winner={winner}/>
    </div>;
}

export default App
