import React from 'react'
import './Contactmain.css'
import contact1 from './../../../Assets/images/contact/contact-1.jpeg'
import Mainbtn from '../../Mainbtn'
import shape5 from './../../../Assets/images/Home/shape-05.png'
import shape3 from './../../../Assets/images/Home/shape-03.png'
import linkedin from './../../../Assets/images/contact/linkedin.png'
import whatsapp from './../../../Assets/images/contact/whatsapp.png'
import house from './../../../Assets/images/contact/house.png'


export default function Contactmain() {
  return (
      <>
      <section className='contactmain'>
          <section className='contactmain__right'>
                <div className="contactmain__right__inner">
                    <div className="contactmain__right__inner__inner">
                        <img src={contact1} alt="" />
                        <div className="contactmain__right__inner__inner__text">
                            <h4>ارسال پیشنهادات و انتقادات</h4>
                            <br />
                            <h4>ارتباط با ما</h4>
                        </div>
                    </div>
                </div>
          </section>
          <section className='contactmain__left'>
               <div className="contactmain__left__top">
                    <span>ارتباط با ما</span>
                    <h3>فرم تماس با ما</h3>
               </div>
               <form className='contactmain__left__form'>
                    <div className="contactmain__left__form__item1">
                        <input type="text" placeholder='نام کاربری' />
                        <input type="text" placeholder='ایمیل' />
                    </div>
                    <div className="contactmain__left__form__item2">
                        <input type="text" placeholder='عنوان' />
                    </div>
                    <div className="contactmain__left__form__item2">
                        <textarea type="text" placeholder='عنوان' />
                    </div>
                    <Mainbtn text='تماس با ما' />
               </form>
            </section>
            <div className="contactmain__icon">
                <img src={shape5} alt="" />
            </div>
      </section>
      <div className="contactmain__footer">
      <div className="contactmain__footer__top">
          <span>آدرس</span>
          <h3>آدرس رسمی ما</h3>
      </div>
      <div className="contactmain__footer__main">
          <div className="contactmain__footer__main__item">
              <div className="contactmain__footer__main__item__inner">
                  <div className="contactmain__footer__main__item__inner__item">
                      <img src={whatsapp} alt="" />
                  </div>
                  <div className="contactmain__footer__main__item__inner__content">
                      <h6>تماس</h6>
                      <p>
                          <span>موبایل :</span>
                          <p>۰۹۳۳۸۴۴۱۶۹۰</p>
                      </p>
                      <p>
                          <span>دفتر :</span>
                          <p>۰۹۳۳۸۴۴۱۶۹۰</p>
                      </p>
                  </div>
              </div>
          </div>

          <div className="contactmain__footer__main__item">
              <div className="contactmain__footer__main__item__inner">
                  <div className="contactmain__footer__main__item__inner__item">
                      <img src={linkedin} alt="" />
                  </div>
                  <div className="contactmain__footer__main__item__inner__content">
                      <h6>ساعت کاری</h6>
                      <p>
                          <span>هر روز</span>
                      </p>
                      <p>۹ تا ۱۵</p>
                  </div>
              </div>
          </div>

          <div className="contactmain__footer__main__item">
              <div className="contactmain__footer__main__item__inner">
                  <div className="contactmain__footer__main__item__inner__item">
                      <img src={house} alt="" />
                  </div>
                  <div className="contactmain__footer__main__item__inner__content">
                      <h6>آدرس</h6>
                      <p>
                          <p>خیابان مدیرت کوچه سوم</p>
                      </p>
                      <span> پلاک ۴۸ </span>

                  </div>
              </div>
          </div>
      </div>

  </div>

  <div className="contantmain__bg">
          <div className="contantmain__bg__image">
              <img src={shape3} alt="" />
          </div>
      </div>
  </>
  )
}
