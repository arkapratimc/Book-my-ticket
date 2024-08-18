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
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >{`${hallName} : ${address}`}</p>
      </div>
      <div style={{ flexBasis: "72%", display: "flex", gap: "20px" }}>
        {time.map((time) => (
          <div
            onClick={() =>
              navigate(`/${movie}/${id}/${hallName}/${loc_id}/${time.id}`)
            }
            style={{
              borderRadius: "4px",
              borderStyle: "solid",
              borderColor: "rgb(153, 153, 153)",
              borderWidth: "0.8px",
              height: "40px",
              width: "110px",
              display: "grid",
              placeContent: "center"
            }}
          >
            {/** https://stackoverflow.com/a/36822046 */}
            {new Date(time.startTime).toLocaleString("en-US", {
              hour: "numeric",
              hour12: true,
              minute: "numeric",
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Place };
