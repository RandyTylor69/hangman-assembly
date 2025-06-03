import clsx from "clsx"

export default function Status(props){
    const gameWon = props.correctTries === 8? true : false;
    return(
        // conditionally render
            props.isGameOver &&

        <div className={clsx("status", !gameWon && "status-lost-addon")}>
            
            <span> {gameWon? "You won" : "You lost"}</span>
            <p>
                {gameWon? "Congratulations!" : "gg lil bro time to learn Assembly for the rest of eternity💀"}
            </p>
        </div>  
        
    )
}