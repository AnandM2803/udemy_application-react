import React from 'react'
import './Footer.css'
import { MdLanguage } from "react-icons/md";

function Footer() {
  return (
    <div className='footer-main-container'>

       <div className='footer-top-container'>
        <div className='footer-text-container'>
            <h5>Top companies choose </h5> <h5 className='footer-sec-text'>Udemy Business  </h5> <h5> to build in-demand career skills.</h5>
        </div>
        <div className='footer-logo-container'>
            <div><img src='./nasdaq-light.svg' alt='nasdaq' /></div>
            <div><img src='./volkswagen-light.svg' alt='volkswagen' /></div>
            <div><img src='./box-light.svg' alt='boc-light' /></div>
            <div><img src='./netapp-light.svg' alt='netapp' /></div>
            <div><img  src='./eventbrite-light.svg' alt='eventbrite' /></div>
        </div>
        </div>  
        <div className='footer-list-container'>
            <div>
                <ul>
                    <li><a href="#">Udemy Business</a></li>
                    <li><a href="#">Teach on Udemy</a></li>
                    <li><a href="#">Get the app</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help and Support</a></li>
                    <li><a href="#">Affiliate</a></li>
                    <li><a href="#">Investors</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Cookies settings</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Accessibility statement</a></li>
                </ul>
            </div>
            <div className='language-englis'>
                <button><MdLanguage className='icon3'/>  English</button>
            </div>
            </div>  
            <div className='footer-logo'>
                <img src='./logo-udemy-inverted.svg' alt='logo' />
                </div>  
                <div className='footer-copyright'>
                    <h6>© 2024 Udemy, Inc.</h6>
                </div>
    </div>
  )
}

export default Footer
