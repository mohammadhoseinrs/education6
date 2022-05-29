import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import routes from './routes'
import './App.css'
import { useDispatch } from 'react-redux'
import { loginFailed, loginSuccess } from './features/loginSlice'

export default function App() {
  const dispatch=useDispatch()
  const checkAutoLogin=()=>{
    let token=''
    const tokenDetail=sessionStorage.getItem('educationsite')
    if(!tokenDetail){
      dispatch(loginFailed())
    }
    if(tokenDetail){
      token=JSON.parse(tokenDetail)
      dispatch(loginSuccess(token))
    }
  }
  useEffect(()=>{
    checkAutoLogin()
  },[checkAutoLogin])

  let router=useRoutes(routes)
  return (
    <div className='app'>
    <Navbar />
    {router}
    <Footer />
    </div>
  )
}