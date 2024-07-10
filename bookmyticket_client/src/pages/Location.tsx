import { useParams } from "react-router-dom";

const Location = () => {
  let { movie } = useParams();
  return <>Hi mom. Film's name - {movie.replaceAll("-", " ")}</>;
};

export { Location };
