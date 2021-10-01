import { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../fbase";
import { collection, addDoc } from "firebase/firestore";

const Create = ({ userInfo }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const posting = {
      title,
      body,
      writer: userInfo.uid,
      displayName: userInfo.displayName,
      publishedDate: Date.now(),
    };
    await addDoc(collection(db, "blog-list"), posting);
    setTitle("");
    setBody("");
    setIsPending(true);
    history.push("/");
  };

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={onSubmit}>
        <label>Blog Title: </label>
        <input type="text" value={title} onChange={onTitleChange} required />
        <label>Blog body:</label>
        <textarea onChange={onBodyChange} value={body} required></textarea>
        {isPending && <button disabled>Add Blog</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
