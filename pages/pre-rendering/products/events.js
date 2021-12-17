import { useRouter } from "next/router";
import { useState } from "react";

export default function Events({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSports = async () => {
    const response = await (
      await fetch(`http://localhost:4000/events?category=sports`)
    ).json();
    setEvents(response);
    router.push("/pre-rendering/products/events?category=sports", undefined, {
      shallow: true,
    });
  };
  return (
    <>
      <button onClick={fetchSports}>Sports</button>
      <h1>Events List</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id}. {event.title} - {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const qp = context.query.category;
  console.log("qp " + qp);
  const queryString = qp ? "category=sports" : "";
  console.log(queryString);
  const response = await (
    await fetch(`http://localhost:4000/events?${queryString}`)
  ).json();
  return {
    props: {
      eventList: response,
    },
  };
}
