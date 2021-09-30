import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <br />
      <p>Page cannot be found.</p>
      <br />
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
};

export default NotFound;
