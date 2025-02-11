// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, getEmojiId} = props
  const {emojiName, emojiUrl, id} = eachEmoji

  const selectingEmoji = () => {
    getEmojiId(id)
  }

  return (
    <li className="individual-emoji-container">
      <img src={emojiUrl} alt="emojiName" onClick={selectingEmoji} />
    </li>
  )
}

export default EmojiCard
