import { useNavigate, useParams } from "react-router-dom";
import { Hero } from "../components/herosection/Hero.js";
import { useQuery } from "@tanstack/react-query";
import {
  type Locations,
  type HappenningDate,
  type Occurence,
} from "../utils/types.js";
import { Place } from "../components/places/Place.js";
import { useState } from "react";
import { unusualMap } from "../utils/constants.js";

const Location = () => {
  let { movie, id } = useParams();
  let [selectedDate, setSelectedDate] = useState(null);
  let [selectedDateID, setSelectedDateID] = useState(null);
  let {
    isError: is_locations_err,
    error: locations_err,
    isSuccess: is_locations_success,
    isPending: is_locations_pending,
    data: locations_list,
  } = useQuery({
    queryKey: ["Dates"],
    queryFn: (): Promise<Occurence[]> =>
      fetch(`/get-every-occurences/${id}`).then((res) => res.json()),
  });
  // console.log(is_locations_success && unusualMap(locations_list));

  return (
    <>
      <Hero id={Number(id)} />
      {is_locations_pending && <p>Pending ... </p>}
      {is_locations_err && (
        <p style={{ color: "red" }}>{locations_err.message}</p>
      )}
      <div>
        {/*is_locations_success &&
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
                      is_it_today // it represents normal 
                        ? "red"
                        : selectedDate !== null &&
                          selectedDate === date.happening_date
                        ? "red"
                        : "black"
                    }`,
                  }}
                  onClick={() => {
                    setSelectedDate(date.happening_date);
                    selectedDateID(date.id);
                  }}
                >
                  {dateyy.getDate()}{" "}
                  {dateyy.toLocaleString("default", { month: "long" })}
                </div>
              </>
            );
          }) */}
        {is_locations_success &&
          unusualMap(locations_list).map(([date, occurences]) => {
            
            return (
              <>
                <section
                  key={date}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  style={{
                    backgroundColor: "white",
                    padding: "6px",
                    borderRadius: "10px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-blue-600">
                    {date}
                  </h2>
                  <div className="space-y-6">
                    {occurences.map(([place, times]) => {
              
              
                      return <>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{place}</h3>
                      {times.map((idx) => {

                        console.log(idx);
                    return <span
                      key={idx}
                      className="bg-yellow-300 text-black px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-yellow-400 transition"
                    >
                      {idx.time}
                    </span>
                    })}
                      
                      </>
                    })}
                  </div>
                </section>
              </>
            );
          })}
      </div>
      <hr />
      {/* is_locations_success && (
        <>
          <hr />
          <div>
            <AllTheLocations
              date_id={
                selectedDateID === null ? locations_list[0].id : selectedDateID
              }
            />
          </div>
        </>
      ) */}
      
    </>
  );
};

const AllTheLocations = ({ locations, metadata }) => {
  // console.log(locations[1]);
  const navigate = useNavigate();
  return (
    <>
      {locations[1].map((location) => {
        return (
          <>
            <div style={{ border: `1px solid red` }}>
              {location[0]}
              <ul>
                {location[1].map((x) => {
                  return (
                    <li
                      onClick={() => {
                        navigate(`/${metadata.movie}/${metadata.id}/${x.id}`);
                      }}
                    >
                      {x.time}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};

export { Location };
