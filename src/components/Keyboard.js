import clsx from "clsx"

export default function Keyboard(props){

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const keyboard = alphabet.map(letter => (
        <button onClick={(e)=>{
            props.guessLetter(letter);
            e.target.classList.add(
                props.word.includes(letter) ? 
                "keyboardColorGreen" : "keyboardColorRed"
            )
        }}
        >
            {letter.toUpperCase()}
        </button>
    ))
    return(
        <section>
            {keyboard}
        </section>
    )
}