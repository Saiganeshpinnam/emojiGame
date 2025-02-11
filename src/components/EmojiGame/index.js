import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import './index.css'

import NavBar from '../NavBar'

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
  }

  getEmojiId = id => {
    const {userSelectionEmojiList} = this.state
    //  console.log(id)
    // if (!userSelectionEmojiList.includes(id)) {
    //   userSelectionEmojiList.push(id)
    // }
    // this.setState({
    //   userSelectionEmojiList : [...userSelectionEmojiList, id]
    // })
    if (!userSelectionEmojiList.includes(id)) {
      this.setState({
        userSelectionEmojiList: [...userSelectionEmojiList, id],
      })
    }
  }

  render() {
    const {emojisList} = this.props
    const {userSelectionEmojiList} = this.state
    console.log(userSelectionEmojiList)

    const userScore = userSelectionEmojiList.length
    console.log(userScore)
    return (
      <div>
        <NavBar className="navbar-container" />

        <div className="bg-container">
          <NavBar userScore={userScore} />
          <ul className="emojis-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                eachEmoji={eachEmoji}
                getEmojiId={this.getEmojiId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
