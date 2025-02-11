// Write your code here.

import './index.css'

const NavBar = props => {
  const {userScore} = props

  return (
    <div className="nav-container">
      <div className="game-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-game-icon"
        />
        <p className="emoji-game-heading">Emoji Game</p>
      </div>
      <div className="score-container">
        <p>Score: {userScore}</p>
        <p>Top Score: 0</p>
      </div>
    </div>
  )
}

export default NavBar
