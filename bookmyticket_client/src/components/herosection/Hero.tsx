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
          backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${
            is_spec_movie_success && spec_movie.cover
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginLeft: "48px",
            marginRight: "48px",
            paddingTop: "32px",
            paddingBottom: "32px"
          }}
        >
          <img src={is_spec_movie_success && spec_movie.poster} alt="Poster" />

          <div>
            <h1 style={{ color: "white" }}>Name</h1>
            <p>Runtime</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export { Hero };
