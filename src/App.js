import { useState } from "react";
import Exchange from "./components/Exchange";

export default function App(){
    // const[headerText, setHeaderText] = useState('Конвертор валют:');
    const[inputText, setInputText] = useState(1)
    // const[USD, setUSD] = useState(0)
    
    return(
        <>
            <h1 id='header'>Конвертор валют</h1>
            <>RUB </>
            <input onChange={(event) => {
                setInputText(event.target.value)
                // let usd = event.target.value / 100
                // setUSD(event.target.value / 100)
            }} value={inputText} />

            {/* <>USD {USD}</> */}

            <Exchange rub = {inputText}/>
        </>
    )
}