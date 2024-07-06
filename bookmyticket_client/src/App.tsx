import { Card } from "./components/Card.js";

function App() {
  const foo = [
    { id: 1, heading: "kalki", description: "lorem10" },
    { id: 2, heading: "kalki", description: "gg" },
    { id: 3, heading: "kalki", description: "gg" },
    { id: 4, heading: "kalki", description: "gg" },
  ];

  return (
    <>
      <p>Hi mom</p>

      {foo.map((card) => (
        <Card
          id={card.id}
          heading={card.heading}
          description={card.description}
        />
      ))}
    </>
  );
}

export { App };
