import { useParams } from "react-router-dom";
import { Hero } from "../components/herosection/Hero.js";
import { useQuery } from "@tanstack/react-query";
import { type Locations, type HappenningDate } from "../utils/types.js";
import { Place } from "../components/places/Place.js";
import { useState } from "react";

const Location = () => {
  let { movie, id } = useParams();
  let [selectedDate, setSelectedDate] = useState(null);
  let {
    isError: is_locations_err,
    error: locations_err,
    isSuccess: is_locations_success,
    isPending: is_locations_pending,
    data: locations_list,
  } = useQuery({
    queryKey: ["Locations"],
    queryFn: (): Promise<HappenningDate[]> =>
      fetch(`/get-every-dates/${id}`).then((res) => res.json()),
  });
  console.log(locations_list);
  return (
    <>
      <Hero id={Number(id)} />
      {is_locations_pending && <p>Pending ... </p>}
      {is_locations_err && (
        <p style={{ color: "red" }}>{locations_err.message}</p>
      )}
      <div>
        {is_locations_success &&
          locations_list.map((date) => {
            let dateyy = new Date(date.happening_date);
            let is_it_today =
              new Date(date.happening_date).setHours(0, 0, 0, 0) ===
              new Date().setHours(0, 0, 0, 0);

            return (
              <>
                <div
                  style={{
                    color: `${
                      selectedDate === null &&
                      is_it_today /** it represents normal */
                        ? "red"
                        : selectedDate !== null &&
                          selectedDate === date.happening_date
                        ? "red"
                        : "black"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedDate(date.happening_date);
                  }}
                >
                  {dateyy.getDate()}{" "}
                  {dateyy.toLocaleString("default", { month: "long" })}
                </div>
              </>
            );
          })}
      </div>
      <hr />
      <div>

      </div>
    </>
  );
};

const AllTheLocations = () => {


  return <></>
};




export { Location };
