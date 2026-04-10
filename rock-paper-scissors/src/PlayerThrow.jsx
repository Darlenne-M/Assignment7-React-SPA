
import './style.css';

function PlayerThrow({ handleClick }) {


    return (
        <>
            <section className='player-section'>
                <div>
                    <img src="/images/rock.PNG" alt="Rock" onClick={() => { handleClick('rock') }} />
                    <img src="/images/paper.PNG" alt="Paper" onClick={() => handleClick('paper')} />
                    <img src="/images/scissors.PNG" alt="Scissors" onClick={() => handleClick('scissors')} />
                </div>

            </section>
        </>
    );
}

export default PlayerThrow;