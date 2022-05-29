import React from 'react'
import AnimatedPage from '../../animated'
import CourseMain from '../../components/course/coursemain/CourseMain'
import Coursetop from '../../components/course/coursetop/Coursetop'
import './Course.css'
export default function Course() {
  return (
    <AnimatedPage>
      <Coursetop />
      <CourseMain />
    </AnimatedPage>
  )
}
