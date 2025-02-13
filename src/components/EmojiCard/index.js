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
      <button type="button" onClick={selectingEmoji}>
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
