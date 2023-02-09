import React from 'react'
import module from './Login.module.scss'
import twitter from '../assets/twitter.png'
import gmail from '../assets/gmail.png'
import apple from '../assets/apple.png'
import instagram from '../assets/instagram.png'

function Login() {

  return (
    <div>
        <div className={module.container}> 
                <div> <input className={module.e_mail}
                type='text' 
                placeholder='Enter E-mail'/> 
                </div>
                <div> <input className={module.password}
                type='text' 
                placeholder='Enter password'/> 
                </div>
                <div > <button className={module.login_button}> LOGIN </button>
                </div>
                <div className={module.forgot}>
<a href='#'> Forgot your password? </a>
                </div>
                <div className={module.line}> </div>
                <div className={module.icons_container}> Enter with:
                    <div className={module.icons}>
                        <a href='#'> <img src={twitter} className={module.icon} alt='twitter'></img> </a>
                        <a href='#'> <img src={gmail} className={module.icon} alt='gmail'></img> </a>
                        <a href='#'> <img src={apple} className={module.icon} id={module.a} alt='apple'></img> </a>
                        <a href='#'> <img src={instagram} className={module.icon} alt='instagram'></img> </a>
                    </div>
                </div>
                <div> <button className={module.sign_button}> DONT HAVE ANY ACCOUNT? </button> </div>
        </div>

    </div>
  )
}

export default Login
