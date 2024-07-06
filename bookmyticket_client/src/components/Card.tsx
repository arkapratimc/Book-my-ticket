import styles from "./Card.module.css";

const Card = ({
  id,
  heading,
  description,
}: {
  id: number;
  heading: string;
  description: string;
}) => {
  return (
    <div className={styles.card}>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
};

export { Card };
