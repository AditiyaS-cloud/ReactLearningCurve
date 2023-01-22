import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU } from "../../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_RESTAURANT_MENU + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
