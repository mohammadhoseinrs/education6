import React from 'react'
import AnimatedPage from '../../animated'
import CourseComment from '../../components/CourseDetail/CourseDetailMain/CourseComment'
import CourseDetailMain from '../../components/CourseDetail/CourseDetailMain/CourseDetailMain'
import CourseDetailtop from '../../components/CourseDetail/CourseDetailtop/CourseDetailtop'

export default function CourseDetail() {
  return (
    <AnimatedPage>
      <CourseDetailtop />
      <CourseDetailMain />
      <CourseComment />
    </AnimatedPage>
  )
}
