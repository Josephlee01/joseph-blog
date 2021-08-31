const Home = () => {
  const onClick = (e) => {
    console.log(e.target);
  };

  const onClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target);
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <button onClick={onClick}>Click me</button>
      <button
        onClick={(e) => {
          onClickAgain("Joseph", e);
        }}
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
