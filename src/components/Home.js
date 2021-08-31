import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // 함수를 만들어서 BlogList에 Props로 전달
  const handleDelete = (id) => {
    // filter는 기존 Array를 변형하지 않고 새로운 Array를 생성함.
    const newBlogs = blogs.filter((b) => b.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && (
        <div>
          <BlogList
            blogs={blogs}
            title="All Blogs!"
            handleDelete={handleDelete}
          />
          <BlogList
            blogs={blogs.filter((b) => b.author === "Joseph")}
            title="Joseph's Blogs!"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
