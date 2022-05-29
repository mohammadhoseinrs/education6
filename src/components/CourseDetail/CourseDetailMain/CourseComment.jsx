import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './CourseComment.css'
export default function CourseComment() {
    const {user}=useSelector(state=>state.login)
    console.log(user.id);
    const [comment,setcomment]=useState('')
    const [commentlist , setcommentlist]=useState([])
    const submitHandler=(e)=>{
        e.preventDefault()
        {/*
        const variable={
            content:comment,
            writer:user.id,
            postId:we should get it from parent componnet video 10 min negah kon

        }
        axios.post('/api/comment ,variable).then(res=>{
            if(res.data.success){
                setcomment('')
                when we send data from child component to parent component we use props

            }else{
                alert('failed to save comment')
            }
        })
    
        */}
    }
  return (
    <div className='coursecomment'>
        <div className="coursecomment__container">
            <h2 className='coursecomment__titele'>
            دیدگاه و پرسش
            </h2>
            {/* comment list */}
             {/* root comment form */}

             <form className='coursecomment__form' onSubmit={submitHandler}>
                <textarea  cols="40" rows="10"
                onChange={(e)=>setcomment(e.target.value)}
                />
                <button className='coursecomment__form__btn'>ارسال</button>
             </form>
        </div>
    </div>
  )
}
