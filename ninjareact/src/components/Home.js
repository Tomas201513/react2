import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const handleDelete = (delid) => {
    const newblog = blog.filter((blog) => blog.id !== delid);
    // setBlog(newblog);
  };

  const {
    data: blog,
    ispending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      {error && <div>{error}</div>}
      {ispending && <div>loading.....</div>}
      {blog && (
        <BlogList blog={blog} title="All Blogs!" handleDelete={handleDelete} />
      )}
      {/* <BlogList
        blog={blog.filter((blog) => blog.author === "yoshi")}
        title="yoshi's Blogs!"
      /> */}
    </>
  );
};

export default Home;
