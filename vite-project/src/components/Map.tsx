import {ReactElement} from "react";
import {MAP_SIZE} from "../settings";
import "./Map.css";

interface MapPropsInterface {
    mapItems: string[] | null[];
    onClickHandler: (index: number) => void;
    currentPlayer: string;
    winner: string | null;
}

export default function Map(props:MapPropsInterface): ReactElement{
    return(
        <div>

            {props.winner !== null && <div>
                <h1>
                    WINNER : {props.winner}
                </h1>
            </div>}

            <div className="mapWrapper">
                {props.mapItems.map((value, index) => {
                return (
                    <div key={index} className="mapItem" onClick={() => props.onClickHandler(index)}>
                        {index}: {value}
                    </div>
                        );
                })}

            </div>

            <div>Next player: {props.currentPlayer}</div>
        </div>
    )
}