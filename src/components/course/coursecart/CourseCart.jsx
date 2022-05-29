import React from 'react'
import './CourseCart.css'
import {AiFillHeart ,AiFillStar} from 'react-icons/ai'
import {MdOutlineArticle} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import course2 from './../../../Assets/images/coursedetail/course-30.jpeg'
import { Link, useParams } from 'react-router-dom'
export default function CourseCart() {
    const params=useParams()
    console.log(params.courseid);
  return (
    <Link to={`/allcourse/params.courseid/2`} className='coursecart'>
        <div className="coursecart__right">
            <img src={course2} alt="" />
            <div className="coursecart__right__icon1">
                <AiFillHeart />
            </div>
            <div className="coursecart__right__icon2">
                برنامه نویسی
            </div>
        </div>
        <div className="coursecart__left">
            <div className="coursecart__left__top">
                سینا محمدی
            </div>
            <ul className="coursecart__left__item">
                <li className='coursecart__left__item1'>
                    <div className="coursecart__left__item1__svg">
                    <MdOutlineArticle />
                    </div>
                <p>۲۰ درس</p>
                </li>
                <li className='coursecart__left__item1'>
                <div className="coursecart__left__item1__svg coursecart__left__item2__svg">
                     <BiTimeFive />
                </div>
                    <p>۳ ساعت</p>
                </li>
                <li className='coursecart__left__item1'>
                <div className="coursecart__left__item1__svg coursecart__left__item3__svg">
                <BsPeople />
                 </div> 
                    <p>۳۳۲</p>
                </li>
            </ul>

            <h6 className="coursecart__title">
            آموزش ری اکت ( ReactJS ) در دنیای واقعی
            </h6>

            <div className="coursecart__bottom">
                <div className="coursecart__bottom__right">
                    <div className="coursecart__bottom__right__right">
                        ۳۰۰,۰۰۰
                    </div>
                    <p>تومان</p>
                    <div className="coursecart__bottom__right__left">
                        <p>۴۰۰</p>
                        <p>تومان</p>
                    </div>
                </div>
                <div className="coursecart__bottom__left">
                    <div className="coursecart__bottom__left__rating">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div className="coursecart__bottom__left__number">
                        (4.7)
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
