import {useState, useEffect} from 'react';
import PlayerThrow from './PlayerThrow';
import ComputerThrow from './ComputerThrow';
import './style.css';

function Results({playerThrow, computerThrow, thinking}) {

    function displayResults() {
        if (!playerThrow || !computerThrow) {
            return "Make your throw!";
        }
        if (thinking) {
            return "Loading results...";
        }
        if (playerThrow === computerThrow) {
            return "It's a tie!";
        } else if (
            (playerThrow === 'rock' && computerThrow === 'scissors') ||
            (playerThrow === 'paper' && computerThrow === 'rock') ||
            (playerThrow === 'scissors' && computerThrow === 'paper')
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    return (
        <section className='results-section'>
            <h2>Results:</h2>
            <p>{displayResults()}</p>
        </section>
    )


}export default Results;