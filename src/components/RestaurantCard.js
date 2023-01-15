import {IMG_CDN_URL} from '../../constants';

export const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    costForTwoString,
    cloudinaryImageId,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId}></img>
        <div className="card-in">
          <h2>{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <button className={avgRating < 3 ? "badRating" : "goodRating"}>
            {avgRating}
          </button>
          <div className="card-price-order">
            <h5>{costForTwoString}</h5>
            <button>Order now</button>
          </div>
        </div>
      </div>
    );
  };

export default RestaurantCard; 