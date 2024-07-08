import styles from "./Card.module.css";
import { type Movie } from "../utils/types.js";

const Card = ({ name, description, runtime, rating }: Movie) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{runtime}</p>
      <p>{rating}</p>
    </div>
  );
};

export { Card };
