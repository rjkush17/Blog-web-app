import React from 'react'
import {data} from '../config/data'
import { useParams } from 'react-router-dom'

function Blog() {

  let blogID = useParams();
  console.log(blogID)
  return (
    <div>Page not create yet </div>
  )
}

export default Blog