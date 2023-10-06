import React, { useEffect, useState } from "react";
import { data } from "../config/data";
import { NavLink, useParams } from "react-router-dom";
import Button from "../Components/Button";

function Blog() {
  const [blogData, setBlogData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let blog = data.find((blogs) => blogs.id === parseInt(id));

    setBlogData(blog);
  },[id]);

  return (
    <div>
      <div className="flex justify-between items-center px-10  mt-12 lg:px-28">
        <NavLink to="/">
          <Button label={"Home"} />
        </NavLink>
        <Button label={"Subscribe NewsLatter"} />
      </div>
      <div className="w-11/12 text-base mx-auto mt-10  sm:w-9/12">
        <h1 className="text-3xl text-center text-header text-primary font-bold ">{blogData.title}</h1>
        <h3 className="text-normal font-semibold  mx-auto mt-10 sm:w-9/12">{blogData.description}</h3>
        <div className="py-10 mx-auto w-11/12">
          <img src={blogData.cover} alt="1" />
        </div>
        <div className="flex gap-4">
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <img className="h-full w-full object-cover" src={blogData.authorAvatar} alt="author profile" />
            </div>
           <div className="flex flex-col leading-[1] justify-center">
           <h1 className="text-primary font-bold">{blogData.authorName}</h1>
            <h2 className="text-zinc-500 font-bold">Published on  {blogData.createdAt}</h2>
           </div>
          </div>
          <div className="mb-4 indent-10 text-normal mt-12">{blogData.content && blogData.content.p1 ? blogData.content.p1 : 'No content available'}</div>
          <div className="mb-4 indent-10 text-normal">{blogData.content && blogData.content.p2 ? blogData.content.p2 : 'No content available'}</div>
          <div className="mb-4 indent-10 text-normal border-b-4 border-zinc-500 ">{blogData.content && blogData.content.p3 ? blogData.content.p3 : 'No content available'}</div>
      </div>
      <div className=" text-center text-zinc-500 fond-bold mb-12 "> Source :- <span className="text-primary font-semibold">{blogData.source}</span></div>
    </div>
  );
}

export default Blog;
