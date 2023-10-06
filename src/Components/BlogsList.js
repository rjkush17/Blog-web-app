import React from "react";
import BlogsComponents from "./BlogsComponents";

function BlogsList({ data }) {
  return (
    <div className="grid grid-cols-1 w-[80%] mx-auto sm:grid-cols-2 lg:grid-cols-3  gap-24">
      {data.map((blog) => {
        return <BlogsComponents blog={blog} key={blog.id}/>;
      })}
    </div>
  );
}

export default BlogsList;
