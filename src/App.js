import "./App.css";
import clsx from "clsx";
import { langOptions } from "./langOptions";
import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import { getRandomWord } from "./utils";

function App() {
  // 1. Storing guessed letters in state
  // (waitingLang = the language waiting to be removed upon a wrong guess)
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [correctTries, setCorrestTries] = React.useState(0);
  const [waitingLang, setWaitingLang] = React.useState("");
  const [gameBegins, setGameBegins] = React.useState(false)

  // 2. Storing the word to be guessed
  const [correctWord, setcorrectWord] = React.useState(getRandomWord());
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
    // 1.3 update the language waiting to be removed
    setWaitingLang(langOptions[wrongGuessCount].name)

    // 1.4 update gameStart
    setGameBegins(true);
  };

  
  // the number of wrong guesses, derived from the two states
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !correctWordArray.includes(letter)
  ).length;

  // the "isGameOver" variable that evaluates to 'true' if the user has used
  // all their available guesses
  const isGameOver = wrongGuessCount === 8 ? true : false;

  // 3. Display the guessed letters
  const wordMapped = correctWordArray.map((letter) => (
    isGameOver?
    <span style={{color:"red"}}>{letter}</span> : // if the game is lost, display all letters
    <span>{guessedLetters.includes(letter) ? letter.toUpperCase() : ""}</span> // else, display current guessed letters
  ));


  const isGameWon = correctTries === correctWordArray.length ? true: false

  // ---------------language chips section -----------------------//
  // state: language chips
    const [languageChips, setLanguageChips] = React.useState(langOptions);
  
    // mapping the state onto the page
    const languages = languageChips.map((lingo, index) => {
      const className = clsx({
        "crossed-out": wrongGuessCount > index
      });
  
      return (
        <div
          key={index}
          style={{
            backgroundColor: lingo.backgroundColor,
            borderRadius: "6px",
            color: lingo.color,
            minWidth: "10vh",
            minpHeight: "3vh",
            textAlign: "center",
          }}
          className={className}
        >
          {lingo.name}
        </div>
      );
    });

  // ---------- console log tests -----------------//
  
  console.log(isGameWon)

  return (
    <>
      <Header />
      <Status isGameOver={isGameOver} 
      isGameWon={isGameWon}
      wrongGuessCount = {wrongGuessCount}
      waitingLang = {waitingLang}
      gameBegins = {gameBegins}
      />
      <Languages languages = {languages} />
      <Word wordMapped={wordMapped} />
      <Keyboard guessLetter={guessLetter} word={correctWordArray} />
    </>
  );
}

export default App;
