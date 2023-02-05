import { Link } from "react-router-dom";

const BlogList = ({ blog, title, handleDelete }) => {
  // const blog = props.blog
  // console.log(props, blog)

  return (
    <>
      <h2>{title}</h2>
      <div className="home">
        {blog.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/create/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
              {/* <button onClick={() => handleDelete(blog.id)}> Delete</button> */}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
