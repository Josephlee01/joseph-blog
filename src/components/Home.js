import useFetch from "../useFetch";
import BlogList from "./BlogList";
import { collection, doc, query, getDoc, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../fbase";
import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const q = query(collection(db, "blog-list"), orderBy("publishedDate","desc"));
  onSnapshot(q, (snapshot) => {
    const blogArray = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(blogArray);
  });
}, [])


  return (
    <div className="home"> Home
    
      {blogs.map(blog=>(
      <BlogList key={blog.id} blog={blog} title="All Blogs!" />
      ))}
      {/* {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <div>
          
          <BlogList
            blogs={blogs.filter((b) => b.author === "Joseph")}
            title="Joseph's Blogs!"
          />
        </div>
      )} */}
    </div>
  );
};

export default Home;
