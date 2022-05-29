import React, { useState } from 'react'
import Animatedsubpage from '../../../Animatedsubpage'
import './userdetail.css'
export default function Userdetail() {

    const [name,setname]=useState('')
    const [phone,setphone]=useState('')
    const [email,setemail]=useState('')
    console.log(name);
  return (
      <Animatedsubpage>
    <div className='userdetail'>
        <div className="userdetail__number">
            <label htmlFor="">نام</label>
            <input type="text" onChange={(e)=>setname(e.target.value)} />
        </div>
        <div className="userdetail__number">
             <label htmlFor="">  شماره موبایل</label>
            <input type="text" onChange={(e)=>setphone(e.target.value)} />
          
        </div>
        <div className="userdetail__number">
            <label htmlFor="">آدرس ایمیل</label>
            <input type="text" onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div className="userdetail__pass">
        تغییر رمز عبور
        </div>
        <div className="userdetail__number">
            <label htmlFor="">رمز عبور کنونی (اگر نمی‌خواهید تغییر دهید خالی بگذارید)</label>
            <input type="text" />
        </div>
        <div className="userdetail__number">
            <label htmlFor="">رمز عبور جدید (برای عدم تغییر خالی بگذارید.)</label>
            <input type="text" />
        </div>
        <div className="userdetail__number">
            <label htmlFor="">تکرار رمز عبور جدید</label>
            <input type="text" />
        </div>
        <div className="userdetail__btn">
            <button>
            ذخیره تغییرات
            </button>
        </div>
    </div>
    </Animatedsubpage>
  )
}
