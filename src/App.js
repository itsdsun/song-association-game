import React, { Component } from 'react';
import Wordsjs from './Words';
import words from './WordsDB';
import './App.css';

export default class App extends Component {

  //state
  state = {
    word: words[0],

  }

  //generate diffrent word function
  generateRandomWord = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * words.length)

    let newWord = words[num];

    //update state
    this.setState({
      word: newWord,
    })

    this.shuffleWords(words)

  }

  //shuufle words function
  shuffleWords = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Song Association</h1>
        <Wordsjs
          generateRandomWord={this.generateRandomWord}
          word={this.state}
        />
      </div>
    )
  }
}