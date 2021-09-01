import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <div>
          <BlogList blogs={blogs} title="All Blogs!" />
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
