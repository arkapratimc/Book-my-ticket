import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UserTickets = () => {


    const { user } = useParams();



    const { isSuccess, data } = useQuery({
        queryKey: ["bookings by users"],
        queryFn: () => fetch("/get-user-bookings", { method: "POST" }).then(res => res.json())
    });

    console.log(isSuccess && data);
    return <>
    
    <p>Hi {user} !!!!!</p>
    <p>These are your bookings :- </p>
    
    {isSuccess && data.map((x, index) => <>
    
    <div key={index} style={{ borderBottom: "1px solid black" }}>
        <p>Film name - {x.film_name}, Hall - {x.hallName}, address - {x.address}</p>
        <p>Seats booked - {Object.keys(x.seats).map(y => <span>{y} </span>)}</p>
        <p>Starting time - {x.starting_time}</p>
    </div>
    
    
    </>)}
    
    </>
};


export { UserTickets };