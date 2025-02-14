// Write your code here.

import './index.css'

const NavBar = props => {
  const {userScore, topscore, isGameInProgress} = props

  return (
    <div className="nav-container">
      <div className="game-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-game-icon"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p>Score: {userScore}</p>
          <p>Top Score: {topscore} </p>
        </div>
      )}
    </div>
  )
}

export default NavBar
