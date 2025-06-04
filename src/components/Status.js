import clsx from "clsx"
import React from "react"
import { getFarewellText } from "../utils";
export default function Status(props){

    
    // farewell messages
    const[msg, setMsg] = React.useState("")

    React.useEffect(()=>{
        setMsg(prevMsg => getFarewellText(props.waitingLang))
    },[props.wrongGuessCount])

    return(
        // conditionally render
            props.isGameOver || props.isGameWon ?

        <div className={clsx("status", props.isGameWon ? "status-won-addon" : "status-lost-addon")}>

            <span> {props.isGameWon? "You won" : "You lost"}</span>
            <p>
                {props.isGameWon? "Congratulations!" : "gg lil bro time to learn Assembly for the rest of eternity💀"}
            </p>
        </div>  

        :
        props.gameBegins && 
        <div className="status">
            <span>{msg}</span>
        </div>
        
    )
}