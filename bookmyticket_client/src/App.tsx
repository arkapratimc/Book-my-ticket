import { useQuery } from "@tanstack/react-query";
import { Card } from "./components/card/Card.js";
import styles from "./components/card/Card.module.css";
import { type Movies } from "./utils/types.js";

function App() {
  const {
    isError: is_movies_err,
    error: movies_err,
    isPending: is_movies_pending,
    isSuccess: is_movies_success,
    data: movies_data,
  } = useQuery({
    queryKey: ["all movies"],
    queryFn: (): Promise<Movies> =>
      fetch("/all-movies/").then((res) => res.json()),
  });
  return (
    <>
      <h1>Book My Ticket</h1>
      {/* TODO: Enhance Types & states */}
      <div className={styles.container}>
        {is_movies_pending && <p>Pending ....</p>}
        {is_movies_err && <p style={{ color: "red" }}>{movies_err.message}</p>}

        {is_movies_success &&
          movies_data.map((card) => (
            <Card
              id={card.id}
              name={card.name}
              description={card.description}
              runtime={card.runtime}
              rating={card.rating}
              cover={card.cover}
              poster={card.poster}
              key={card.id}
            />
          ))}
      </div>
    </>
  );
}

export { App };
