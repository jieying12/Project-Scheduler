import { FaRegStar, FaStar, FaQuoteRight } from "react-icons/fa";
import '../css/ReviewCard.css';
import image from '../../assets/user-round.svg'

const ReviewCard = (props) => {

    const renderStars = () => {
        let toReturn = []

        for (let count = 0; count < props.rating; count++) {
            toReturn.push(<FaStar/>)
        }
        for (let count = 5-props.rating; count > 0; count--) {
            toReturn.push(<FaRegStar/>)
        }

        return toReturn
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4>{props.username}</h4>
            <p>{props.text}</p>
            <p>{renderStars()}</p>
        </article>
      );
}

export default ReviewCard