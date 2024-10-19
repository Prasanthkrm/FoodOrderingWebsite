import React from 'react'
import './Footer.css'
import { assets } from './frontend_assets/assets'

export const Footer = () => {
  return (
    <>
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                <img className="footer-logo" src="/images/footer-Mom’s Kitchen.png" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><div className="footer-social-icons">
                    <a href="https://www.facebook.com/login.php/"><img src={assets.facebook_icon} alt="" /></a>
                    <a href="https://x.com/i/flow/login"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://www.linkedin.com/login"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
                </div>
                <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Provacy Policy</li>
                </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Dev-Info</h2>
                    <ul>
                        <li>Prasanth<li>
                        <li>prasanth.krm2003@gmail.com</li>
                        <li>9994934132</li> 
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © Mom's Kitchen.com - All Right Reserved.
            </p>

        </div>
        
    </>
  )
}
