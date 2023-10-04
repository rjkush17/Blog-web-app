import React from 'react'
import heroImage from '../img/blog.jpg';
import BlogsList from './BlogsList';
import {data} from '../config/data'
import Button from './Button';
function Hero() {
  return (
    <>
    <section className='flex w-[90%]  mx-auto mt-[12vh] min-h-[81vh] '>
        <div className='flex-1 flex flex-col gap-8'>
            <p className='text-normal border-2 border-gray-600 w-fit px-5 rounded-full'>the Perfect blogs Does not exi...</p>
            <h1 className='my-heading font-bold leading-loose'>All Your <span className='text-primary'>Stories</span> and <br/> <span className='text-primary'>Blogs</span> in one place <br/> at the <span className='text-primary'>Same time</span></h1>
            <p className='text-normal'>Saving and having at your blogs and stories in the same place</p>
            <Button label={"Subscribe for More"} />
            <p className='text-normal'>Trusted by millions of user and companies</p>
        </div>
        <div className="flex-1">
            <img src={heroImage} alt="Hero img" />
        </div>
    </section>
    <BlogsList data={data}/>
  
    
    </>
  )
}

export default Hero