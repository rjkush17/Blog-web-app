import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogsComponents({blog}) {
  return (
    <div className='border-2 border-gray-300 flex flex-col'>
        <img className='h-[250px] w-full object-cover' src={blog.cover} alt="Blog IMG" />
        <div className='p-2 flex-1'>
            <h1 className='text-primary font-bold'>{blog.title}</h1>
            <p className='bg-primary w-fit text-sm font-semibold py-1 px-4 text-white rounded-full mt-3 text-bold'>{blog.category}</p>
            <p className='text-sm my-3'>{blog.description}</p>
        </div>
        <NavLink to={`/Blog/${blog.id}`} className='bg-primary rounded p-1 text-white mt-auto self-start mb-2 ml-2'>...See Blog</NavLink>
    
    </div>
  )
}

export default BlogsComponents