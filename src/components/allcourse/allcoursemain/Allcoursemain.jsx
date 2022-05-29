import React from 'react'
import './Allcoursemain.css'
import icdl from './../../../Assets/images/coursedetail/icdl.svg.svg'
import { Link } from 'react-router-dom'
export default function Allcoursemain() {
  return (
    <div className='allcoursemain'>
        <div className="allcoursemain__container">
            <p className='allcoursemain__text'>
            در ادامه فهرستی از مجموعه‌های آموزشی فرادرس آمده است، که طبقه‌بندی موضوعی و کاربردی آموزش‌ها را نشان می‌دهند. استفاده از این فهرست، یافتن و انتخاب هدف مورد نظر شما را، راحت‌تر خواهد کرد
            </p>
            <div className="allcoursemain__inner">
                {[1,2,3,4,5,6].map(item=>(
                    <Link to={`/allcourse/${item}`} className="allcoursemain__item">
                <div className="allcoursemain__item__top">
                    <img src={icdl} alt="" />
                </div>
                <div className="allcoursemain__item__bottom">
                    <div className="allcoursemain__item__bottom__title">
                        <p>مجموعه آموزش مهارت های کاربردی کامپیوتر (ICDL)</p>
                    </div>
                    <div className="allcoursemain__item__bottom__item">
                        <div className='allcoursemain__item__bottom__item__item'>
                            <p>51 آموزش</p>
                        </div>
                        <div className='allcoursemain__item__bottom__item__item'>
                            <p>۸۵ ساعت</p>
                        </div>
                        <div className='allcoursemain__item__bottom__item__item'>
                            <p>۲۵۶ دانشجو</p>
                        </div>
                    </div>
                </div>
            </Link>

                ))}
            </div>


        </div>
    </div>
  )
}
