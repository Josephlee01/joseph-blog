import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { collection, doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../fbase";
import { useState } from "react";
import { useEffect } from "react";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const docSnap = getDoc(doc(db, "blog-list", "qvj8S8cILHXiZbPemDQ2"));
    console.log(docSnap.data());

  return (
    <div className="blog-details">
      <article>
        {/* <h2>{blog.title}</h2> */}
        {/* <h2>{blog.title}</h2>
          <p>Posted by {blog.author}</p>
          <div>{blog.body}</div>
          <div className="buttons">
            <button className="del-btn" onClick={onDelete}>
              Delete
            </button>
            <button className="list-btn" onClick={() => history.push("/")}>
              List
            </button>
          </div> */}
      </article>
    </div>
  );
};

export default BlogDetails;
