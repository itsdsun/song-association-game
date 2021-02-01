import React from 'react'
import words from './WordsDB'

export default function Wordsjs(props) {

    const { word, generateRandomWord } = props;
    return (
        <div className="card" >

            <div className="card-body">
                <p className="card-text">{word.word}</p>
                <button
                    onClick={() => { generateRandomWord(words) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Play!</button>
                <button
                    className="ml-3"
                    onClick={() => {
                        generateRandomWord(words);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(word.word))
                    }}
                    type="submit"><i class="fab fa-twitter"></i> Share Word</button>
            </div>
        </div>
    )
}