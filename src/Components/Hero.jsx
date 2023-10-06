import React from 'react'
import heroImage from '../img/blog.jpg';
import BlogsList from './BlogsList';
import {data} from '../config/data'
import Button from './Button';
function Hero() {
  return (
    <>
    <section className='lg:flex-row lg:flex w-[90%]  mx-auto mt-[12vh] min-h-[81vh]'>
        <div className=' gap-5 lg:flex-1 text-center flex flex-col gap-8'>
            <p className='mx-auto lg:text-normal border-2 border-gray-600 w-fit px-5 rounded-full'>the Perfect blogs Does not exi...</p>
            <h1 className='text-5xl leading-[.9] lg:my-heading font-bold leading-loose'>All Your <span className='text-primary'>Stories</span> and <br className='hidden sm:block'/> <span className='text-primary'>Blogs</span> in one place <br className='hidden sm:block'/> at the <span className='text-primary'>Same time</span></h1>
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