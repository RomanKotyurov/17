import { useState } from "react";
import Exchange from "./components/Exchange";

export default function App(){
    const[inputText, setInputText] = useState(1) 
    return(
        <>
            <h1 id='header'>Конвертор валют</h1>
            <>RUB </>
            <input onChange={(event) => {
                setInputText(event.target.value)
            }} value={inputText} />
            <Exchange rub = {inputText}/>
        </>
    )
}