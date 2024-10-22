import React from 'react'
import './Footer.css'
// import { assets } from './frontend_assets/assets';
import insta1 from './frontend_assets/instagram.png'
import linked1 from './frontend_assets/linkedin.png'
import github1 from './frontend_assets/github (1).png'
// import bg_black from "./frontend_assets/black-brick-wall-background.jpg"

export const Footer = () => {
  return (
    <>

    {/* Previous style start */}

        {/* <div className="footer mt-5" id='footer'>
            <div className="footer-content row ">
                <div className="footer-content-left col-md-4 me-1 mt-5">
                <img className="footer-logo mb-4 " src="/images/footer-Mom’s Kitchen.png" alt=""/>
                <h2 className='text-warning'>Mom's Kitchen</h2>
                <p className='footer-des pt-3 fw-semibold fw-bold pe-5'>Mom's Kitchen is a delightful food ordering website that brings home-cooked meals to your door.</p>
                
                </div>
                <div className="footer-content-center col-md-3 mt-5 ">
                <h2 className='text-warning'>COMPANY</h2>
                <ul className='list-unstyled '>
                    <li className='mt-3'>Home</li>
                    <li className='mt-3'>About Us</li>
                    <li className='mt-3'>Delivery</li>
                    <li className='mt-3'>Provacy Policy</li>
                </ul>
                </div>
                <div className="footer-content-right col-md-4 mt-5">
                    <h2 className='text-warning'>DEVELOPED BY </h2>
                    <ul className='list-unstyled '>
                        <li className='mt-3 fw-bolder'>Prasanth.M</li>
                        <li className='mt-3 fw-bolder'>prasanth.krm2003@gmail.com</li>
                        <li className='mt-3 fw-bolder'>9994934132</li>
                    </ul>
                </div>
            </div>
            <hr className='my-4 '/>
            <div className="d-flex justify-content-between">
                <p className="footer-copyright text-center mt-4 mb-3"> Copyright 2024 © Mom's Kitchen.com - All Right Reserved.</p>
                <div className="footer-social-icons text-center d-block justify-content-end d-lg-flex">
                    <a className='me-3 mt-1' href="https://www.facebook.com/login.php/"><img src={assets.facebook_icon} alt="" /></a>
                    <a className='me-3 mt-1' href="https://x.com/i/flow/login"><img src={assets.twitter_icon} alt="" /></a>
                    <a className='me-3 mt-1' href="https://www.linkedin.com/login"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>

        </div> */}
        
        {/* previous style end */}

        <div className="py-5 bg-black footer mt-5" >
            <div className=" row d-flex justify-content-between my-5 ">
                <div className="col-md-4 me-1 mt-5">
                    <h2 className='text-warning fw-bolder'>Mom's Kitchen</h2>
                    <p className='footer-des pt-3 fw-semibold fw-bold pe-5'>Mom's Kitchen is a delightful food ordering website that brings home-cooked meals to your door.</p>
                    </div>
                    <div className="col-md-3 mt-5 ">
                        <h2 className='text-warning fw-bolder'>COMPANY</h2>
                        <ul className='list-unstyled fw-bold'>
                            <li className='mt-3'>Home</li>
                            <li className='mt-3'>About Us</li>
                            <li className='mt-3'>Delivery</li>
                            <li className='mt-3'>Provacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mt-5">
                    <h2 className='text-warning fw-bolder'>DEVELOPED BY </h2>
                    <ul className='list-unstyled '>
                        <li className='mt-3 fw-bolder'>Prasanth.M</li>
                        <li className='mt-3 fw-bolder'>prasanth.krm2003@gmail.com</li>
                        <li className='mt-3 fw-bolder'>9994934132</li>
                    </ul>
                </div>
                </div>
                <hr className='my-4 '/>
            <div className="d-flex justify-content-between">
                <p className="footer-copyright text-center mt-4 mb-3"> Copyright 2024 © Mom's Kitchen.com - All Right Reserved.</p>
                <div className="footer-social-icons text-center d-block justify-content-end d-lg-flex rounded-5">
                    <a className='me-3 mt-1 ' href="https://www.instagram.com/mr_i_m_p_e_r_f_e_c_t__?igsh=ajFwYTlnODc3bWww"><img className='rounded-3' src={insta1} alt="" /></a>
                    <a className='me-3 mt-1' href="https://linkedin.com/in/prasanth-m-29a243206"><img className='rounded-3' src={linked1} alt="" /></a>
                    <a className='me-3 mt-1' href="https://github.com/Prasanthkrm   "><img className='rounded-3' src={github1} alt="" /></a>
                </div>
            </div>
            </div>
        
    </>
  )
}
