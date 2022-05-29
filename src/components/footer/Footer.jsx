import React, { useEffect, useState } from 'react'
import './Footer.css'
import logowhite from './../../Assets/images/footer/logo-white.png'
import {AiFillInstagram ,AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'
import {MdOutlineDoubleArrow , MdLocationOn ,MdEmail} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
import footer1 from './../../Assets/images/footer/footer1.png'
import footer2 from './../../Assets/images/footer/footer2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getdetail } from '../../api/userApi'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [footer,setfooter]=useState([])
    useEffect( ()=>{
        getdetail('footer')
        .then(item=>{
            setfooter(item.data)
        })
    },[])
    console.log(footer);
  return (
    <section className='footer'>
        <section className='footer__container'>
            <div className="footer__top">
                <div className="footer__top__inner">

                    <div className="footer__top__inner__right1">
                        <div className="footer__top__inner__right1__logo">
                            <img src={logowhite} alt="" />
                            <p>لورم ایپسوم</p>
                        </div>
                        <p className='footer__top__inner__right1__text'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                        <ul className="footer__top__inner__right1__social">
                            <Link to ='/'>
                               <IoLogoWhatsapp className='footer__top__inner__right1__social__icon' /> 
                            </Link>
                            <Link to ='/'>
                                <AiFillInstagram className='footer__top__inner__right1__social__icon' />
                            </Link>
                            <Link to ='/'>
                                <BsTelegram className='footer__top__inner__right1__social__icon' />
                            </Link>
                            <Link to ='/'>
                                <AiFillLinkedin className='footer__top__inner__right1__social__icon' />
                            </Link>
                        </ul>
                    </div>


                    <div className="footer__top__inner__right2">
                        <div className="footer__top__inner__right2__inner">
                            <div className="footer__top__inner__right2__inner__title">
                            لورم ایپسوم
                            </div>
                            <ul className="footer__top__inner__right2__inner__item">
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>قوانین</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>وبلاگ</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>لیست کلاس‌ها</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>برگزاری کلاس آنلاین</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>سوالات متداول</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>تماس با ما</p>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div className="footer__top__inner__right2">
                        <div className="footer__top__inner__right2__inner">
                            <div className="footer__top__inner__right2__inner__title">
                            وبلاگ
                            </div>
                            <ul className="footer__top__inner__right2__inner__item">
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>تنظیمات حساب کاربری</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>راهنمای استفاده</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>  اطلاع‌رسانی </p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>وبلاگ</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>لورم ایپسوم</p>
                                </li>
                                <li>
                                    <MdOutlineDoubleArrow className='footer__top__inner__right2__inner__item__svg' />
                                    <p>لورم ایپسوم</p>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div className="footer__top__inner__right3">
                        <h5> درباره ما</h5>
                        <div className="footer__top__inner__right3__bottom">
                            <ul className='footer__top__inner__right3__bottom__info'>
                                <li>
                                    <MdLocationOn />
                                    <p>تهران ، خیابان شورا</p>
                                </li>
                                <li>
                                    <FaPhone />
                                    <p>۰۹۳۳۸۴۴۱۶۹۰</p>
                                </li>
                                <li>
                                <FaPhone />
                                <p>۰۹۳۳۸۴۴۱۶۹۰</p>
                                </li>
                                <li>
                                    <MdEmail />
                                    <p>mohammadhoseinr1377@gmail.com</p>
                                </li>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__icon">
                <div className="footer__icon1">
                    <img src={footer1} alt="" />
                </div>
                <div className="footer__icon2">
                    <img src={footer2} alt="" />
                </div>
            </div>
            <div className="footer__fotter">

کلیه حقوق برای آکادمی  برنامه نویسی  ویرا محفوظ است.
            </div>
        </section>
    </section>
  )
}
