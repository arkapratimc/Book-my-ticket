import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type Time } from "../utils/types.js";
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
  // useQueryClient hook
  let queryClient = useQueryClient();
  let { movie, id, occur_id } = useParams();

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
    isError: is_occurence_err,
    error: occurence_error,
    isSuccess: is_occurence_success,
    isPending: is_occurence_pending,
    data: specific_occurence,
  } = useQuery({
    queryKey: ["a specific occurence"],
    queryFn: () => fetch(`/get-seats/${occur_id}`).then((res) => res.json()),
  });
  // console.log(is_occurence_success && specific_occurence);
  /* let {
    isError: is_seat_err,
    error: seat_err,
    isSuccess: is_seat_success,
    isPending: is_seat_pending,
    data: seats_list,
  } = useQuery({
    queryKey: ["Seats"],
    queryFn: (): Promise<Time> =>
      fetch(`/get-specific-seat/${time_id}`).then((res) => res.json()),
  }); */

  // const container = useRef(new Map());
  const ParentBlock = useRef(null);

  let { mutate: joeyyyy } = useMutation({
    mutationFn: (body: any) =>
      fetch("/add-log", { method: "POST", body: JSON.stringify(body) }).then(
        (res) => res.text()
      ),

    onSuccess(data, variables, context) {
      // will think later .....
      if (data === "Hi mom") {
        alert("Seats are booked");
        queryClient.invalidateQueries({
          queryKey: ["a specific occurence"],
        });
      }
    },
  });

  const decideWhichSeatsAreBooked = () => {
    const container = new Map();

    let all_child_elems = ParentBlock.current.getElementsByTagName("*");

    for (let elem of all_child_elems) {
      if (elem.style.backgroundColor === "green") {
        // console.log(Number(elem.textContent));
        container.set(Number(elem.textContent), true);
      }
    }

    for (let [seat_no, is_booked_already] of Object.entries(specific_occurence.seats)) {
      if (is_booked_already) {
        container.delete(Number(seat_no));
      }
    }

    if (container.size === 0) {
      alert("Please select the seats!!");
      return;
    }

    const object_to_send = {} as any;
    const foo = Object.fromEntries(container);
    object_to_send.seats = foo;
    object_to_send.occur_id = occur_id;
    object_to_send.movie_id = id;
    
    // console.log(foo);
    

    joeyyyy(object_to_send);
  };

  let {
    isError: is_booking_err,
    isSuccess: can_i_book,
    data: users_username,
  } = useQuery({
    queryKey: ["decider of booking seats"],
    queryFn: () =>
      fetch("/login-access").then((res) => {
        if (!res.ok) {
          throw new Error("cant");
        }

        return res.text();
      }),
    retry: false
  }); 

  return (
    <>
      <div className="display-seats">
        {/* is_seat_pending && <p>Pending ... </p> */}
        {/* is_seat_err && <p style={{ color: "red" }}>{seat_err.message}</p> */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
          ref={ParentBlock}
        >
          {is_occurence_success &&
            Object.keys(specific_occurence.seats).map((seat, index) => {
              // console.log("h");
              return (
                <Seat
                  value={seat}
                  key={index}
                  rawSeatObject={specific_occurence.seats}
                />
              );
            })}
        </div>

        {is_booking_err && <p>Sorry, you cant book without logging in :)</p>}

        {can_i_book && (
          <>
            <button>Cancel Booking</button>

            <button onClick={() => decideWhichSeatsAreBooked()}>
              Pay for booked tickets ...{" "}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export { Seats };
