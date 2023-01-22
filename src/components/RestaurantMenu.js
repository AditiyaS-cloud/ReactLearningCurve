import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RestaurantMenu = () => {
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <Card style={{ width: "19rem" }} className="restroBanner">
        <Row>
          <Col style={{ margin: "auto", textAlign: "right" }}>
            <Card.Img
              className="restroImage"
              variant="top"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{restaurant?.name}</Card.Title>
              <Card.Text style={{ color: "#a19a9a" }}>
                {restaurant?.cuisines?.join(",")}
              </Card.Text>
              <Card.Text style={{ color: "#a19a9a" }}>
                {restaurant?.area}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <div className="restaurant-list">
        <div className="restro">
          {Object.values(restaurant?.menu?.items).map((item) => {
            return (
              <Card style={{ width: "19rem" }} key={item.id} className="restro">
                <Row>
                  <Col>
                    <Card.Body>
                      <Card.Title className="restaurant-name">
                        {item.name}
                      </Card.Title>
                      <Card.Text className="notmal-text small-text">
                        {item.price / 100} Rs
                      </Card.Text>
                      <Card.Text className="notmal-text small-text">
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col style={{ margin: "auto" }}>
                    <Card.Img
                      variant="top"
                      src={IMG_CDN_URL + item.cloudinaryImageId}
                    />
                  </Col>
                </Row>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
