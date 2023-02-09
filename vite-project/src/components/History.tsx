import {ReactElement} from "react";

interface HistoryPropsInterface{
    history: (any)[][];

    setMapItems: (item: (string | null)[]) => void;
}

export default function History(props: HistoryPropsInterface): ReactElement{

    const onClickHandler = (index: number) => {
        props.setMapItems(props.history[index]);
    }

    return(
        <div>
            <h6>history</h6>
            <ol>
                {props.history.map((historyItem, index) => {
                    return <li key={index} onClick={() => onClickHandler(index)}>
                        step {index + 1}
                    </li>
                })}
            </ol>
        </div>
    )
}