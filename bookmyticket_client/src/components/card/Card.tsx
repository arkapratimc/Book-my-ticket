import styles from "./Card.module.css";
import { type Movie } from "../../utils/types.js";
import { NavLink, useNavigate } from "react-router-dom";

const Card = ({
  name,
  description,
  runtime,
  rating,
  id,
  poster,
  cover,
}: Movie) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "grid", placeContent: "center" }}>
      <div
        style={{
          backgroundImage: `url("${cover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "10px",
          width: "222.4px",
          height: "378px",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => navigate(`/${name.replaceAll(" ", "-")}/${id}`)}
      >
        {/* <h2>{name}</h2> */}
        {/* <NavLink to={`/${name.replaceAll(" ", "-")}/${id}`}>{name}</NavLink> */}
        {/* <p>{description}</p>
        <p>{runtime}</p>
        <p>{rating}</p> */}
      </div>
      <p>{name}</p>
    </div>
  );
};

export { Card };
