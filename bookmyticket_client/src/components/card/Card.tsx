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
    <>

    <div className="movie-card" style={{
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      width: "200px",
      textAlign: "center",
      padding: "15px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    }}>
        <img src={poster} alt="Movie 1" onClick={() => navigate(`/${name.replaceAll(" ", "-")}/${id}`)} style={{
          width: "100%",
          borderRadius: "10px"
        }}/>
        <h3 style={{ margin: "10px 0 5px" }}>{name}</h3>
        <p style={{ color: "#555", fontSize: "0.9em", marginBottom: "10px" }}>Action, Crime | 2h 07min</p>
        <NavLink to={`/${name.replaceAll(" ", "-")}/${id}`} style={{ backgroundColor: "#e50914", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px", fontWeight: "bold" }}>Book Now</NavLink>
      </div>
    
    {/* <div style={{ display: "grid", placeContent: "center" }}>
      <div
        style={{
          backgroundImage: `url("${poster}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "10px",
          width: "222.4px",
          height: "378px",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => navigate(`/${name.replaceAll(" ", "-")}/${id}`)}
      >
        
      </div>
      <p>{name}</p>
    </div> */}
    
    </>
    
  );
};

export { Card };
