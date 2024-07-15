import { useParams } from "react-router-dom";
import { Hero } from "../components/herosection/Hero.js";
import { useQuery } from "@tanstack/react-query";
import { type Locations } from "../utils/types.js";
import { Place } from "../components/places/Place.js";

const Location = () => {
  let { movie, id } = useParams();

  let {
    isError: is_locations_err,
    error: locations_err,
    isSuccess: is_locations_success,
    isPending: is_locations_pending,
    data: locations_list,
  } = useQuery({
    queryKey: ["Locations"],
    queryFn: (): Promise<Locations> =>
      fetch(`/get-locations/${id}`).then((res) => res.json()),
  });

  function foo() {
    console.log(locations_list);
  }

  return (
    <>
      Hi mom. Film's name - {movie.replaceAll("-", " ")}
      <Hero id={Number(id)} />
      {is_locations_pending && <p>Pending ... </p>}
      {is_locations_err && (
        <p style={{ color: "red" }}>{locations_err.message}</p>
      )}
      {is_locations_success &&
        locations_list.map((location) => (
          <Place
            id={location.id}
            address={location.address}
            hallName={location.hallName}
            movie={location.movie}
            time={location.time}
            key={location.id}
          />
        ))}
    </>
  );
};

export { Location };
