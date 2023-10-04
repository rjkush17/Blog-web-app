import React, { useEffect, useState } from "react";
import BlogsComponents from "./BlogsComponents";

function BlogsList({ data }) {
  return (
    <div className=" w-[90%] mx-auto grid grid-cols-3 gap-24">
      {data.map((blog) => {
        return <BlogsComponents blog={blog} key={blog.id}/>;
      })}
    </div>
  );
}

export default BlogsList;
