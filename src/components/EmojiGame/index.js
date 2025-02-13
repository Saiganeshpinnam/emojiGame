import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import './index.css'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    userSelectionEmojiList: [],
    isGameInProgress: true,
    isGameWon: false,
    topscore: 0,
  }

  finishGameAndSetTopScore = userScore => {
    const {emojisList} = this.props
    console.log(userScore / emojisList.length)
    return userScore / emojisList.length
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {userSelectionEmojiList} = this.state

    if (userSelectionEmojiList.includes(id)) {
      this.setState({isGameInProgress: false})
    } else {
      const updatedUserSelectionEmojiList = [...userSelectionEmojiList, id]
      if (updatedUserSelectionEmojiList.length === emojisList.length) {
        this.setState({
          userSelectionEmojiList: updatedUserSelectionEmojiList,
          isGameInProgress: false,
          isGameWon: true,
        })
      } else {
        this.setState({
          userSelectionEmojiList: updatedUserSelectionEmojiList,
        })
      }
    }
  }

  render() {
    const {emojisList} = this.props
    //  console.log(emojisList.length)
    const {
      userSelectionEmojiList,
      isGameInProgress,
      isGameWon,
      topscore,
    } = this.state
    const shuffledEmojis = this.shuffledEmojisList()
    console.log(userSelectionEmojiList)

    const userScore = userSelectionEmojiList.length
    console.log(userScore)
    return (
      <>
        <div className="bg-container">
          <NavBar userScore={userScore} topscore={topscore} />
          {isGameInProgress ? (
            <>
              <div className="score-container">
                <p>Score: {userScore}</p>
                <p>Top Score: {userScore} </p>
              </div>
              <ul className="emojis-container">
                {shuffledEmojis.map(eachEmoji => (
                  <EmojiCard
                    key={eachEmoji.id}
                    eachEmoji={eachEmoji}
                    clickEmoji={this.clickEmoji}
                  />
                ))}
              </ul>
            </>
          ) : (
            <WinOrLoseCard
              isWon={isGameWon}
              score={userScore}
              playAgain={() =>
                this.setState({
                  isGameInProgress: true,
                  userSelectionEmojiList: [],
                  isGameWon: false,
                })
              }
            />
          )}
        </div>
      </>
    )
  }
}
export default EmojiGame
