import "./App.css";
import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  // 1. Selecting the word to be guessed
  const [currentWord, setCurrentWord] = React.useState("react");
  const currentWordArray = currentWord.split("");
  const wordMapped = currentWordArray.map((letter) => (
    <span>{letter.toUpperCase()}</span>
  ));

  // 2. Storing guessed letters in state
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const guessLetter = (letter) => {
    // update the guessed-letter array
    let isRight = currentWordArray.includes(letter)? true : false;
    setGuessedLetters((prevArray) =>
      prevArray.includes(letter) ? prevArray : [...prevArray, letter]
    );

  };

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word wordMapped = {wordMapped}/>
      <Keyboard guessLetter={guessLetter} word = {currentWordArray}/>
    </>
  );
}

export default App;
