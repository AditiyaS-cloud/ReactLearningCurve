import "bootstrap/dist/css/bootstrap.min.css";
import { RESTAURANT_CAROUSELS_API } from "../../constants";
import Image from "react-bootstrap/Image";

const Carousels = ({ creativeId }) => {
  return (
    <Image
      style={{ width: "16rem" }}
      src={RESTAURANT_CAROUSELS_API + creativeId}
    ></Image>
  );
};

export default Carousels;
