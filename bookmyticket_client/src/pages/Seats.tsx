import { useQuery } from "@tanstack/react-query";
import { type Locations, type SeatsType, type Time } from "../utils/types.js";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const Seat = ({
  value: seat_number,
  rawSeatObject,
}: {
  value: boolean | string | any;
  rawSeatObject: any;
}) => {
  let is_already_booked = rawSeatObject[seat_number];

  let seat_colour = is_already_booked ? "green" : "white";

  let ref = useRef(null);

  let bookHandler = (is_it_booked_already) => {
    if (is_it_booked_already) {
      return 1;
    }

    // check which color it is ....

    if (
      ref.current.style.backgroundColor ===
      "white" /* then it needs to get booked */
    ) {
      ref.current.style.backgroundColor = "green";
    } else if (ref.current.style.backgroundColor === "green") {
      ref.current.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <div
        style={{ backgroundColor: seat_colour }}
        ref={ref}
        onClick={() => bookHandler(is_already_booked)}
      >
        {seat_number}
      </div>
    </>
  );
};

const Seats = () => {
  let { time_id } = useParams();

  // https://jsbin.com/yinawufeqe/3/edit?js,output
  /* let {
    isError: is_locations_err,
    error: locations_err,
    isSuccess: is_locations_success,
    isPending: is_locations_pending,
    data: locations_list,
  } = useQuery({
    queryKey: ["Locations"],
    queryFn: (): Promise<Locations> =>
      fetch(`/get-locations/${id}`).then((res) => res.json()),
  }); */

  let {
    isError: is_seat_err,
    error: seat_err,
    isSuccess: is_seat_success,
    isPending: is_seat_pending,
    data: seats_list,
  } = useQuery({
    queryKey: ["Seats"],
    queryFn: (): Promise<Time> =>
      fetch(`/get-specific-seat/${time_id}`).then((res) => res.json()),
  });

  const container = useRef(new Map());
  const ParentBlock = useRef(null);

  const decideWhichSeatsAreBooked = () => {
    let all_child_elems = ParentBlock.current.getElementsByTagName("*");
    all_child_elems = Array.from(all_child_elems);

    for (let elem of all_child_elems) {
      if (elem.style.backgroundColor === "green") {
        // console.log(Number(elem.textContent));
        container.current.set(Number(elem.textContent), true);
      }
    }

    
    for (let [ seat_no, is_booked_already ] of Object.entries(seats_list.seats)) {
      if (is_booked_already) {
        container.current.delete(Number(seat_no));
      }
    } 

    console.log(container.current);

  };

  return (
    <>
      <div className="display-seats">
        {is_seat_pending && <p>Pending ... </p>}
        {is_seat_err && <p style={{ color: "red" }}>{seat_err.message}</p>}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
          ref={ParentBlock}
        >
          {is_seat_success &&
            Object.keys(seats_list.seats).map((seat, index) => (
              <Seat value={seat} key={index} rawSeatObject={seats_list.seats} />
            ))}
        </div>

        <button>Cancel Booking</button>

        <button onClick={() => decideWhichSeatsAreBooked()} >Pay for booked tickets ... </button>
      </div>
    </>
  );
};

export { Seats };
