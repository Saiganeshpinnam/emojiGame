// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, playAgain} = props

  return (
    <div className="win-or-lose-card">
      <img
        src={
          isWon
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        className="won-lose-image"
        alt="win or lose"
      />
      <h1 className="won-loss-heading">{isWon ? 'You Won' : 'You Lose'}</h1>
      <p className="score">{isWon ? 'Best Score' : 'Score'}</p>
      <p className="user-score">{score}/12</p>
      <button type="button" onClick={playAgain} className="play-again-button">
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
