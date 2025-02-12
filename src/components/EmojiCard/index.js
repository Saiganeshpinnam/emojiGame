// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {emojiName, emojiUrl, id} = eachEmoji

  const selectingEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="individual-emoji-container">
      <img
        src={emojiUrl}
        alt="emojiName"
        onClick={selectingEmoji}
        className="emoji"
      />
    </li>
  )
}

export default EmojiCard
