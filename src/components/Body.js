import { useState, useEffect } from "react";
import useOnline from "../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { RESTAURANT_API, NO_NETWORK_DOGS_API } from "../../constants";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { LinkContainer } from "react-router-bootstrap";
import Carousels from "./Carousels";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [carousels, setCarousels] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setCarousels(json?.data?.cards[0]?.data?.data?.cards);
    } catch (error) {
      console.log("There was an error while fetching restaurant data", error);
    }
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div>
        <h1 id="network-msg">
          🐙You are offline! Please check your internet connection!!❎
        </h1>
        <img id="dog-image" src={NO_NETWORK_DOGS_API} />
      </div>
    );
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div
        className="curousel-bg"
        style={{ padding: "40px", background: "black" }}
      >
        <div
          className="carousels-list d-flex justify-content-center"
          style={{ gap: "35px" }}
        >
          {carousels.length === 0
            ? "No data found"
            : carousels.map((carousel) => {
                return (
                  <Carousels {...carousel.data} key={carousel.data.bannerId} />
                );
              })}
        </div>
      </div>
      <div className="container">
        <InputGroup className="search-text">
          <Form.Control
            placeholder="Search Restaurants..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const data = filterData(e.target.value, allRestaurants);
              setFilteredRestaurants(data);
            }}
          />
          {/* <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            {" "}
            Search
          </Button> */}
        </InputGroup>
        <div className="restaurant-list">
          {filteredRestaurants.length === 0
            ? "No data found"
            : filteredRestaurants.map((restaurant) => {
                return (
                  <LinkContainer
                    to={"/restaurant/" + restaurant.data.id}
                    key={restaurant.data.id}
                    className="normal-text"
                  >
                    <Link>
                      <RestaurantCard {...restaurant.data} />
                    </Link>
                  </LinkContainer>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Body;
