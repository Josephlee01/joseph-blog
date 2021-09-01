import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>We're sorry</h2>
      <p>Page cannot be found.</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
};

export default NotFound;
