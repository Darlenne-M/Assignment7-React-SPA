import { useState, useEffect } from 'react';
import './style.css';

function ComputerThrow({trigger, onComputerChoice, setThinking}) {

    const [computerChoice, setComputerChoice] = useState("question-mark");
    
    function getRandomThrow() {
        const choices = ['rock', 'paper', 'scissors'];
         let i = 0;

        let shuffle = setInterval(() => {
           
            setComputerChoice(choices[i]);
            console.log(choices[i]);
            i++;
            
            //console.log("Computer throw: bitxg", randomChoice);
        }, 1000);

        setTimeout(() => {
            clearInterval(shuffle);
            console.log("3");
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            setComputerChoice(randomChoice);
            onComputerChoice(randomChoice);
            setThinking(false);
        },3500);
      

    } useEffect(() => {
        if (!trigger) return;

            getRandomThrow();

        }, [trigger]);

    return (
        <>
            <section className='computer-section'>
                <div>
                    <img src={`/images/${computerChoice}.PNG`} alt="computer throw" className='compt-img' />
                </div>
            </section>
        </>
    );

}
export default ComputerThrow;