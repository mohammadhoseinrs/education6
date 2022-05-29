import React from 'react'
import AnimatedPage from '../../animated'
import Blogmain from '../../components/Blog/blogmain/Blogmain'
import Blogtop from '../../components/Blog/Blogtop/Blogtop'

export default function Blog() {
  return (
    <AnimatedPage>
        <Blogtop />
        <Blogmain />
    </AnimatedPage>
  )
}
