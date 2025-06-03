import "./App.css";
import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  // 1. Storing guessed letters in state
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [correctTries, setCorrestTries] = React.useState(0);

  // 2. Storing the word to be guessed
  const [correctWord, setcorrectWord] = React.useState("react");
  const correctWordArray = correctWord.split("");

  const guessLetter = (letter) => {
    // 1.1 add the letter to the guessed words array
    setGuessedLetters((prevArray) =>
      prevArray.includes(letter) ? prevArray : [...prevArray, letter]
    );
    // 1.2 update the correct guesses
    setCorrestTries((prevNum)=>
      correctWordArray.includes(letter) ? prevNum+1 : prevNum
    )

    
  };

  // 3. Display the guessed letters
  const wordMapped = correctWordArray.map((letter) => (
    <span>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span>
  ));

  // the number of wrong guesses, derived from the two states
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !correctWordArray.includes(letter)
  ).length;

  // the "isGameOver" variable that evaluates to 'true' if the user has used
  // all their available guesses
  const isGameOver = wrongGuessCount === 8 ? true : false;

  const isGameWon = correctTries === correctWordArray.length ? true: false

  // ---------- console log tests -----------------//
  
  console.log(isGameWon)

  return (
    <>
      <Header />
      <Status isGameOver={isGameOver} 
      isGameWon={isGameWon}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word wordMapped={wordMapped} />
      <Keyboard guessLetter={guessLetter} word={correctWordArray} />
    </>
  );
}

export default App;
