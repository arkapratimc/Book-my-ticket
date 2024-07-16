import { type Location } from "../../utils/types.js";
import { useNavigate, useParams } from "react-router-dom";

const Place = ({ address, hallName, time, id: loc_id }: Location) => {

  const navigate = useNavigate();
  let { movie, id } = useParams();

  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid #eff1f3",
        padding: "13px 20px",
      }}
    >
      <div style={{ flexBasis: "28%" }}>
        <h3>{hallName}</h3>
        <p>{address}</p>
      </div>
      <div style={{ flexBasis: "72%", display: "flex", gap: "20px" }}>
        {time.map((time) => (
          <div
            onClick={() => navigate(`/${movie}/${id}/${hallName}/${time.id}`)}
            style={{
              borderRadius: "4px",
              borderStyle: "solid",
              borderColor: "rgb(153, 153, 153)",
              borderWidth: "0.8px",
            }}
          >
            {time.startTime}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Place };
