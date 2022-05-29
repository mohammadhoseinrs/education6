import React from 'react'
import AnimatedPage from '../../animated'
import Signin from '../../components/Signup/Signin/Signin'
import Signupform from '../../components/Signup/SignupForm/Signupform'
import Signupnew from '../../components/Signup/signupnew/Signupnew'
import SignupTop from '../../components/Signup/Signuptop/SignupTop'
import './Signup.css'
export default function Signup() {
  return (
    <AnimatedPage>
      <SignupTop />
      <div className='signuppage'>
          <Signin />
          <Signupform />
      </div>
    </AnimatedPage>
  )
}
