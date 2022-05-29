import React from 'react'
import course1 from './../../../Assets/images/Home/course-01.jpeg'
import instructor1 from './../../../Assets/images/Home/instructor-1.jpeg'
import {AiTwotoneHeart ,AiFillStar} from 'react-icons/ai'
import {MdArticle} from 'react-icons/md'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Homecoursecard({course}) {
    console.log(course);
    const {
        teacher,
        courses_name,
        number_of_lesson,
        courses_topic,
        courses_description,
        courses_price,
        discount,
        time_courses,
        number_student,
        courses_points,
        teacher_pic,
        NumberOfLesson,
        courses_pic,
        id,
        group_name
    }=course
  return (
    <div className='homecoursecard'>
        <div className="homecoursecard__front">
            <div className="homecoursecard__front__content">
            <div className="homecoursecard__front__top">
                <div className="homecoursecard__front__top__image">
                    <img src={courses_pic} alt="" />
                </div>
                <div className="homecoursecard__front__top__heart">
                    <button className='homecoursecard__front__top__heart__btn'>
                        <AiTwotoneHeart />
                    </button>
                </div>
                <div className="homecoursecard__front__top__box">
                    {courses_topic}
                </div>
            </div>
            <div className="homecoursecard__front__bottom">
                <div className="homecoursecard__front__bottom__top">
                    <div className="homecoursecard__front__bottom__top__right">
                        <div className="homecoursecard__front__bottom__top__right__image">
                            <img src={teacher_pic} alt="" />
                        </div>
                        <span>{teacher}</span>
                    </div>
                    <div className="homecoursecard__front__bottom__top__right__left">
                        <MdArticle />
                        <span>
                            {number_of_lesson} درس</span>
                    </div>
                </div>
                <div className="homecoursecard__front__bottom__title">
                    {courses_name}
                </div>
                <div className="homecoursecard__front__bottom__bottom">
                    <div className="homecoursecard__front__bottom__bottom__right">
                            <div className="homecoursecard__front__bottom__bottom__right__currentprice">
                                {discount}
                            </div>
                            <div className="homecoursecard__front__bottom__bottom__right__oldprice">
                                {courses_price}
                            </div>
                    </div>
                    <div className="homecoursecard__front__bottom__bottom__left">
                        <div className="homecoursecard__front__bottom__bottom__left__rating">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className="homecoursecard__front__bottom__bottom__left__ratingcount">
                        ({courses_points})
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div> 
        <div className="homecoursecard__hover">
            <div className="homecoursecard__hover__inner">
                <div className="homecoursecard__hover__top">
                    <div className="homecoursecard__hover__top__text">
                    لورم ایپسوم
                    </div>
                    <div className="homecoursecard__front__top__heart2">
                    <button className='homecoursecard__front__top__heart2__btn'>
                        <AiTwotoneHeart />
                    </button>
                </div>
                </div>
                <div className="homecoursecard__hover__title">
                    {courses_topic}
                </div>
                <p className="homecoursecard__hover__text">
                    {courses_description}
                </p>
                <div className="homecoursecard__hover__price">
                ۵۵،۰۰۰
                </div>
                <div className="homecoursecard__front__bottom__top">
                    <div className="homecoursecard__front__bottom__top__right">
                        <div className="homecoursecard__front__bottom__top__right__image">
                            <img src={teacher_pic} alt="" />
                        </div>
                        <span style={{color:'#fff'}}>{teacher}</span>
                    </div>
                    <div className="homecoursecard__front__bottom__top__right__left">
                        <MdArticle  />
                        <span>{number_of_lesson} درس</span>
                    </div>
                </div>
                <Link to={`/allcourse/${group_name}/${id}`} className='homecoursecard__hover__btn__text'>
                    <button className='homecoursecard__hover__btn'>
                        مشاهده دوره
                     <BsArrowLeft />
                    </button>
                </Link>
            </div>
        </div> 
    </div>
  )
}
