export default function Keyboard(props){

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const keyboard = alphabet.map(letter => (
        <button onClick={(e)=>{
            props.guessLetter(letter);

            // keyboard letter styles, if it's in the current word
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