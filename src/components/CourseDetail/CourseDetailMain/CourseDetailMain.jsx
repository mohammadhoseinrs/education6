import React from 'react'
import './CourseDetailMain.css'
import course2 from './../../../Assets/images/coursedetail/course-02.jpeg'
import course3 from './../../../Assets/images/coursedetail/course-03.jpeg'
import instructor1 from './../../../Assets/images/Home/instructor-1.jpeg'
import instructor2 from './../../../Assets/images/Home/instructor-2.jpeg'
import {AiFillStar} from 'react-icons/ai'
import CourseDetailAcc from './CourseDetailAcc'
import {BiTimeFive} from 'react-icons/bi'
import {BsFillPersonFill ,BsBarChartFill ,BsFillCalendarCheckFill} from 'react-icons/bs'
import {FaBookReader , FaLanguage ,FaCertificate} from 'react-icons/fa'
import {GiTeacher} from 'react-icons/gi'
import {AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'
import { useParams } from 'react-router-dom'
export default function CourseDetailMain() {
    const params=useParams()
    console.log(params);
  return (
    <section className="cdm">
        <section className='cdm__container'>
            <div className="cdm__image">
                <img src={course2} alt="" />
            </div>
            <section className="cdm__inner">
                <section className='cdm__inner__right'>
                    <div className="cdm__inner__right__inner">

                        <div className="cdm__inner__right__inner__top">
                            <div className="cdm__inner__right__inner__top__right">
                                <div className="cdm__inner__right__inner__top__right__image">
                                    <img src={instructor1} alt="" />
                                </div>
                                <p>توسط محمدرضا داوری</p>
                            </div>
                            <div className="cdm__inner__right__inner__top__left">
                                <div className="cdm__inner__right__inner__top__left__rating">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <div className="cdm__inner__right__inner__top__left__suggets">
                                    (۴۷ نظر)
                                </div>
                            </div>
                        </div>


                        <div className="cdm__inner__right__inner__title">
آموزش Reactjs راکت به شما کمک می‌کند به شکل جامع React را یاد بگیرید
                        </div>

                        <div className="cdm__card">
                            <h5>توضیحات</h5>
                            <p>لاراول 9 یک وب فریمورک رایگان و متن باز مبتنی بر PHP است که برای اولین بار در سال ۲۰۱۱ توسط Taylor Otwell ساخته شد. هدف از ایجاد لاراول، داشتن چهارچوبی مناسب برای ایجاد اپلیکیشن‌های مبتنی بر طراحی MVC یا Model-View-Controller بوده و باید گفت که لاراول بخوبی این وظیفه را انجام می‌دهد</p>
                            <p>شاید برای‌تان نیز این نکته جالب باشد که کل معماری MVC این فریمورک براساس فریمورک سمفونی یا Symfony ایجاد شده است. ما در وبسایت آموزشی راکت تلاش‌های بسیار زیادی را برای آموزش لاراول بعمل آورده‌ایم و هم اکنون نیز این تلاش‌ها ادامه دارند. برای مشاهده کامل آموزش‌های لاراول می‌توانید به «یادگیری لاراول» مراجعه کنید</p>
                            <h5>پس از اتمام دوره چه چیزهایی کسب می‌کنید؟</h5>
                            <ul>
                                <li>پشتیبانی و پاسخ به پرسش های شما</li>
                                <li>کسب امتیاز و اعتبار برای شرکت در دوره های دیگر</li>
                                <li>دریافت آپدیت های دوره به صورت مادامالعمر (در صورت خریداری نقدی این دوره)</li>
                                <li>توانایی کسب درآمد و گرفتن پروژه های واقعی</li>
                            </ul>
                            <h5>مدرک</h5>
                            <p>Reactjs به عنوان یک ابزار جاوااسکریپتی با هدف ایجاد وبسایت‌های SPA شناخته می‌شود که شما با استفاده از آن می‌توانید خیلی راحت چنین وبسایت‌های ایجاد کنید. در دوره آموزش Reactjs ما سعی داریم شما را قدم به قدم با این ابزار جذاب آشنا کنیم و به شما یاد دهیم که چطور می‌توان از React برای ایجاد وبسایت‌های SPA استفاده کرد</p>
                        </div>

                        <div className="cdm__videocard">
                            <div className="cdm__videocard__inner">
                                <CourseDetailAcc />
                            </div>
                        </div>


                        <div className="cdm__teacher">
                            <div className="cdm__teacher__pic">
                                <img src={instructor2} alt="" />
                            </div>
                            <div className="cdm__teacher__detail">
                                <h5>سینا محمدی</h5>
                                <h6>متخصص فرانت اند</h6>
                                <p>
                                اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2 سال با زبان جاوا اندروید کار میکردم .بعد تصمیم گرفتم در زمینه وب فعالیت داشته باشم.و...
                                </p>
                                <ul className='cdm__teacher__social'>
                                    <li>
                                        <BsTelegram />
                                    </li>
                                    <li>
                                        <IoLogoWhatsapp />
                                    </li>
                                    <li>
                                        <AiFillInstagram />
                                    </li>
                                    <li>
                                        <AiFillLinkedin />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cdm__inner__left'>
                    <div className="cdm__inner__left__inner">
                        <div className="cdm__inner__left__inner__box">
                            <div className="cdm__inner__left__inner__box__video">
                                <img src={course3} alt="" />
                                <button  className='cdm__inner__left__inner__box__video__btn'>
                                    <div className="cdm__inner__left__inner__box__video__btn__icon">

                                    </div>
                                </button>
                            </div>
                            <div className="cdm__inner__left__inner__box__inner">
                                <ul>
                                    <li>
                                        <span>
                                            <BiTimeFive />
                                            زمان دوره
                                        </span>
                                        <span> ۳ ساعت</span>
                                    </li>
                                    <li>
                                        <span>
                                            <BsFillPersonFill />
                                            تعداد دانشجو
                                        </span>
                                        <span> ۱۴۱</span>
                                    </li>
                                    <li>
                                    <span>
                                            <FaBookReader />
                                            تعداد دروس
                                        </span>
                                        <span> ۱۳</span>
                                    </li>
                                    <li>
                                    <span>
                                            <BsBarChartFill />
                                            سطح
                                        </span>
                                        <span> متوسط</span>
                                    </li>
                                    <li>
                                    <span>
                                            <FaLanguage />
                                             زبان
                                        </span>
                                        <span> فارسی</span>
                                    </li>
                                    <li>
                                    <span>
                                            <FaCertificate />
                                                مدرک
                                        </span>
                                        <span> دارد</span>
                                    </li>
                                    <li>
                                    <span>
                                            <BsFillCalendarCheckFill />
                                            ددلاین
                                        </span>
                                        <span> ندارد</span>
                                    </li>
                                    <li>
                                    <span>
                                            <GiTeacher />
                                            مدرس
                                        </span>
                                        <span> سینا محمدی</span>
                                    </li>
                                </ul>
                                <div className='cdm__inner__left__inner__box__inner__btn'>
                                        <p>قیمت  :</p>
                                        <span>۳۰۰</span>
                                        <p>هزار تومان</p>
                                </div>
                                <div className="cdm__inner__left__inner__box__inner__btn2">
                                    خرید
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </section>
  )
}
