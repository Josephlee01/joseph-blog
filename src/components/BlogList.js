import { Link } from "react-router-dom";

const BlogList = ({ blog }) => {
  return (
    <div className="blog-list">
      <h2>{blog.title}</h2>
      
         <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Posted by {blog.writer}</p>
          </Link>
        </div>
      
    </div>
  );
};

export default BlogList;
