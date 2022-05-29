import React, { useEffect, useState } from 'react'
import { getdetail } from '../../../api/userApi'
import Blogitem from './Blogitem'
import './Blogmain.css'
export default function Blogmain() {
  const [blog,setblog]=useState([])
  useEffect( ()=>{
    let mounted=true
    getdetail('articles')
    .then(item=>{
      setblog(item.data)
    })
},[])
  return (
    <section className='blogmain'>
        <section className='blogmain__container'>
          {blog?.map(blog=>(
                 <Blogitem key={blog.id} blog={blog} />
          ))}
         </section>
    </section>
  )
}
