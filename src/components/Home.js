import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Joseph");

  const nameClick = () => {
    if (name === "Joseph") {
      setName("Jack");
    } else {
      setName("Joseph");
    }
  };

  const onClick = (e) => {
    console.log(e.target);
  };

  const onClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target);
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <p>{name}</p>
      <button onClick={nameClick}>Change Name</button>
      <div>
        <button onClick={onClick}>Click me</button>
        <button
          onClick={(e) => {
            onClickAgain("Joseph", e);
          }}
        >
          Click me Again
        </button>
      </div>
    </div>
  );
};

export default Home;
