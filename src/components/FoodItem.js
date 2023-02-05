import { IMG_CDN_URL } from "../../constants";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FoodItem = ({
  name,
  description,

  cloudinaryImageId,
}) => {
  return (
    <>
      <Card style={{ width: "19rem" }} className="wrapper">
        <Card.Img variant="top" src={IMG_CDN_URL + cloudinaryImageId} />
        <Card.Body>
          <Card.Title className="restaurant-name">{name}</Card.Title>
          <Card.Text className="notmal-text small-text">
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default FoodItem;
