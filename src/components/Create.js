import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Joseph");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChange = (e) => {
    setBody(e.target.value);
  };
  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added.");
      setIsPending(false);
      // history.go(-1)
      history.push('/')
    });

    
  };

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={onSubmit}>
        <label>Blog Title: </label>
        <input type="text" value={title} onChange={onTitleChange} required />
        <label>Blog body:</label>
        <textarea onChange={onBodyChange} value={body} required></textarea>
        <label>Blog author:</label>
        <select onChange={onAuthorChange} value={author}>
          <option value="Joseph">Joseph</option>
          <option value="yoshi">yoshi</option>
        </select>
        {isPending && <button disabled>Add Blog</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
