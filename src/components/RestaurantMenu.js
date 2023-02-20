import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NO_CART_IMAGE_URL } from "../../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLocalOffer } from "react-icons/md";
import fallbackImg from "../assets/images/errorImage.jpg";
import Widget from "./Widget";
import MenuItems from "./MenuItems";
import EmptyCart from "./EmptyCart";
import MenuCart from "./MenuCart";
import { useState } from "react";
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const cartItems = useSelector((store) => store.cart.items);

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
              onError={(e) => {
                e.target.src = fallbackImg;
              }}
            />
          </Col>
          <Col style={{ margin: "auto" }}>
            <Card.Body>
              <Card.Title>{restaurant?.name}</Card.Title>
              <Card.Text className="small-text" style={{ color: "#a19a9a" }}>
                {restaurant?.cuisines?.join(", ")}
              </Card.Text>
              <Card.Text className="small-text" style={{ color: "#a19a9a" }}>
                {restaurant?.locality + ", " + restaurant?.area}
              </Card.Text>
              <Row>
                <Col style={{ borderRight: "1px solid white" }}>
                  <Card.Subtitle>{restaurant?.avgRating}</Card.Subtitle>
                  <Card.Text className="small-text">
                    {restaurant?.totalRatingsString}
                  </Card.Text>
                </Col>
                <Col style={{ borderRight: "1px solid white" }}>
                  <Card.Subtitle>{restaurant?.sla?.slaString}</Card.Subtitle>
                  <Card.Text className="small-text">Delivery Time</Card.Text>
                </Col>
                <Col>
                  <Card.Subtitle>
                    &#8377;{restaurant?.costForTwo / 100}
                  </Card.Subtitle>
                  <Card.Text className="small-text">Cost for two</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Col>
          <Col style={{ margin: "auto" }}>
            <div style={{ border: "1px solid white", width: "263px" }}>
              {restaurant.aggregatedDiscountInfo.descriptionList.map(
                (item, index) => {
                  return (
                    <p key={index} style={{ margin: "20px" }}>
                      <MdOutlineLocalOffer /> {item.meta}
                    </p>
                  );
                }
              )}
            </div>
          </Col>
        </Row>
      </Card>

      <div style={{ margin: "10px", padding: "10px" }}>
        <Row>
          <Col
            style={{
              textAlign: "right",
              listStyleType: "none",
              margin: "10px",
              padding: "10px",
            }}
          >
            {restaurant?.menu?.widgets?.map((e, index) => {
              return <Widget name={e.name} index={index} key={index} />;
            })}
          </Col>
          <Col style={{ padding: "10px" }}>
            <div className="restaurant-list">
              <div className="restro">
                {Object.values(restaurant?.menu?.items).map((item) => {
                  return (
                    <MenuItems
                      restaurantMenuDetails={restaurant}
                      cartItems={cartItems}
                      item={item}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      cloudinaryImageId={item.cloudinaryImageId}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
          <Col style={{ margin: "10px", padding: "10px", opacity: 1 }}>
            {!cartItems.length ? (
              <EmptyCart NO_CART_IMAGE_URL={NO_CART_IMAGE_URL} />
            ) : (
              <MenuCart cartItems={cartItems} />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RestaurantMenu;
