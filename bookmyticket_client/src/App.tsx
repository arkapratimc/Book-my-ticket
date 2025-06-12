import { useQuery } from "@tanstack/react-query";
import { Card } from "./components/card/Card.js";
import styles from "./components/card/Card.module.css";
import { type Movies } from "./utils/types.js";
import { NavLink, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <>
      {/* TODO: Enhance Types & states */}
      <section className="banner">
        <img
          src="static/pictures/slider.avif"
          alt="..."
          style={{
            backgroundImage: "linear-gradient(to right, #000000, #434343)",
            color: "white",
            textAlign: "center",
            width: "100%",
            height: "auto",
          }}
        />
      </section>
      {/* <div style={{ padding: "0px 30px" }}>
        <div className={styles.container}>
          {is_movies_pending && <p>Pending ....</p>}
          {is_movies_err && (
            <p style={{ color: "red" }}>{movies_err.message}</p>
          )}

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
      </div> */}
      <section
        className="movies"
        style={{
          padding: "40px 20px",
          backgroundColor: "white",
        }}
      >
        <h2>Now Showing</h2>

        <div
          className="movie-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {is_movies_pending && <p>Pending ....</p>}
          {is_movies_err && (
            <p style={{ color: "red" }}>{movies_err.message}</p>
          )}
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
      </section>

      <section
        className="events"
        id="events"
        style={{
          padding: "40px 20px",
          backgroundColor: "#fefefe",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#e50914",
          }}
        >
          Upcoming Events
        </h2>
        <div
          className="event-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {is_movies_pending && <p>Pending ....</p>}
          {is_movies_err && (
            <p style={{ color: "red" }}>{movies_err.message}</p>
          )}
          {is_movies_success &&
            movies_data.map((card) => (
              <>
                <div className="event-card" style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  width: "220px",
                  textAlign: "center",
                  padding: "15px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                }}>
                  
                    <img
                      src={card.poster}
                      alt={card.name}
                      onClick={() => navigate(`/${card.name.replaceAll(" ", "-")}/${card.id}`)}
                      style={{
                        width: "100%",
                        borderRadius: "10px"
                      }}
                    />
                  
                  <h3 style={{
                    marginTop: "10px"
                  }}>{card.name}</h3>
                  <p style={{
                    color: "#666",
                    fontSize: "0.9em",
                    margin: "10px 0px"
                  }}>EDM Festival | Goa | 15 June</p>
                  <NavLink to="seats.html" style={{
                    backgroundColor: "#e50914",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    fontWeight: "bold"
                  }}>
                    {/** TODO URGENT SPECIAL FIX */}
                    Book Tickets
                  </NavLink>
                </div>
              </>
            ))}
        </div>
      </section>

      <div
        className="event-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {is_movies_pending && <p>Pending ....</p>}
        {is_movies_err && <p style={{ color: "red" }}>{movies_err.message}</p>}
      </div>
    </>
  );
}

export { App };
