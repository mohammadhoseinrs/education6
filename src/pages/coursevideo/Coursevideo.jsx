import React from 'react'
import './Coursevideo.css'
import CourseDetailAcc from '../../components/CourseDetail/CourseDetailMain/CourseDetailAcc'
import ReactPlayer from 'react-player'
export default function Coursevideo() {
  return (
    <div className='coursevideo'>
        <div className="coursevideo__right">
            <CourseDetailAcc />
        </div>
        <div className="coursevideo__left">
            <div className="coursevideo__left__top">
                <ReactPlayer url='https://youtu.be/9Yfn2XBGC2E' controls={true} />
            </div>
        </div>
    </div>
  )
}
