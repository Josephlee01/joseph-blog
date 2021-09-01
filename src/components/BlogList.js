const BlogList = ({ blogs, title,  }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
          <h2>{b.title}</h2>
          <p>Posted by {b.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
