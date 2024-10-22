import React from 'react'
import './Footer.css'
import { assets } from './frontend_assets/assets'

export const Footer = () => {
  return (
    <>
        <div className="footer" id='footer'>
            <div className="footer-content row ">
                <div className="footer-content-left col-md-4 me-1">
                <img className="footer-logo d-block mx-auto" src="/images/footer-Mom’s Kitchen.png" alt=""/>
                <p className='footer-des pt-3 fw-semibold text-center fw-bold'>"Mom's Kitchen" is a delightful food ordering website that brings home-cooked meals to your door. With a diverse menu of fresh dishes, customers can easily browse and order their favorites, satisfying cravings for both hearty dinners and quick snacks.</p>
                <div className="footer-social-icons text-center d-block justify-content-around d-lg-flex">
                    <a className='me-3 mt-1' href="https://www.facebook.com/login.php/"><img src={assets.facebook_icon} alt="" /></a>
                    <a className='me-3 mt-1' href="https://x.com/i/flow/login"><img src={assets.twitter_icon} alt="" /></a>
                    <a className='me-3 mt-1' href="https://www.linkedin.com/login"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
                </div>
                <div className="footer-content-center col-md-3 text-center mt-5 ">
                <h2 className='text-warning'>COMPANY</h2>
                <ul className='list-unstyled '>
                    <li className='mt-3'>Home</li>
                    <li className='mt-3'>About Us</li>
                    <li className='mt-3'>Delivery</li>
                    <li className='mt-3'>Provacy Policy</li>
                </ul>
                </div>
                <div className="footer-content-right col-md-4 text-center mt-5">
                    <h2 className='text-warning'>DEVELOPED BY </h2>
                    <ul className='list-unstyled '>
                        <li className='mt-3 fw-bolder'>Prasanth.M</li>
                        <li className='mt-3 fw-bolder'>prasanth.krm2003@gmail.com</li>
                        <li className='mt-3 fw-bolder'>9994934132</li>
                    </ul>
                </div>
            </div>
            <hr className='my-4'/>
            <p className="footer-copyright text-center mt-4 mb-3">
                Copyright 2024 © Mom's Kitchen.com - All Right Reserved.
            </p>

        </div>
        
    </>
  )
}
