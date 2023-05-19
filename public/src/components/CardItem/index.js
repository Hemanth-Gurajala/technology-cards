// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardElements} = props
  const {title, description, imgUrl, className} = cardElements

  return (
    <li className={` ${className} cards-container`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
