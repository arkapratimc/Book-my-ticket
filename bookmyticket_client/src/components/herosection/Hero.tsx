import { useQuery } from "@tanstack/react-query";
import { type Movie } from "../../utils/types.js";

const Hero = ({ id }: { id: number }) => {
  let {
    isError: is_spec_movie_err,
    error: spec_movie_err,
    isSuccess: is_spec_movie_success,
    isPending: is_spec_movie_pending,
    data: spec_movie,
  } = useQuery({
    queryKey: ["specific movie"],
    queryFn: (): Promise<Movie> =>
      fetch(`/get-a-movie/${id}`).then((res) => res.json()),
  });

  return (
    <>
      {is_spec_movie_pending && <p>Pending ... </p>}
      {is_spec_movie_err && (
        <p style={{ color: "red" }}>{spec_movie_err.message}</p>
      )}
      <div
        style={{
          /* display: "flex",
        flexWrap: "wrap",
        background: "white",
        maxWidth: "1000px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        borderRadius: "10px" */
          backgroundColor: "#f4f4f4",
        }}
      >
        {is_spec_movie_success && (
          <>
            {/* <div
          style={{
            backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${
              is_spec_movie_success && spec_movie.poster
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginLeft: "48px",
              marginRight: "48px",
              paddingTop: "32px",
              paddingBottom: "32px",
            }}
          >
            <img
              src={is_spec_movie_success && spec_movie.cover}
              alt="Poster"
              style={{ width: "261px", height: "392px" }}
            />

            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: "36px",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                }}
              >
                {spec_movie.name}
              </h1>
              <p
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                {`${
                  typeof spec_movie.runtime === "string"
                    ? Math.floor(Number(spec_movie.runtime) / 60)
                    : Math.floor(spec_movie.runtime / 60)
                } h ${
                  typeof spec_movie.runtime === "string"
                    ? Number(spec_movie.runtime) % 60
                    : spec_movie.runtime % 60
                } minutes`}
              </p>
              <p style={{ color: "white"}}>{spec_movie.description}</p>
            </div>
            <div></div>
          </div>
        </div> */}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                background: "white",
                maxWidth: "1000px",
                margin: "0px auto",
                padding: "20px",
                boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                borderRadius: "10px",
              }}
            >
              <div className="poster">
                <img
                  src={spec_movie.poster}
                  alt={spec_movie.name}
                  style={{
                    borderRadius: "10px",
                    width: "300px",
                    height: "auto",
                  }}
                />
              </div>
              <div className="details" style={{
                flex: "1",
                marginLeft: "30px",

              }}>
                <h1 style={{
                  marginTop: "0px",
                  color: "#e50914"
                }}>{spec_movie.name}</h1>
                <p className="genre" style={{
                  color: "#888",
                  fontSize: "0.95em",
                  marginBottom: "15px"
                }}>Action | Crime | 2h 07min</p>
                <p className="description" style={{
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>{spec_movie.description}</p>

                
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { Hero };
