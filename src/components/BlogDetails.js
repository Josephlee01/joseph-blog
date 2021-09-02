import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const onDelete = async () => {
    try {
      await axios.delete("http://localhost:8000/blogs/" + blog.id);
    } catch (e) {
      console.log(e);
    }
    history.push("/");
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Posted by {blog.author}</p>
          <div>{blog.body}</div>
          <div className="buttons">
            <button className="del-btn" onClick={onDelete}>
              Delete
            </button>
            <button className="list-btn" onClick={() => history.push("/")}>
              List
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
