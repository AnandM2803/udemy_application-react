import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import './CategoriesList.css'

function CategoriesList() {
  return (
    <div className='list-main-container'>
        <div className='list-cintainr'>
           <ul>
            <li><a href="#">Development </a> <FaAngleRight className='list-arrow1'/></li>
            <li><a href="#">Business</a> <FaAngleRight className='list-arrow2'/></li>
            <li><a href="#">Financing & Accounting</a> <FaAngleRight className='list-arrow3'/></li>
            <li><a href="#">IT & Software</a> <FaAngleRight className='list-arrow4'/></li>
            <li><a href="#">Office Productivity</a> <FaAngleRight className='list-arrow5'/></li>
            <li><a href="#">Personal Development</a> <FaAngleRight className='list-arrow6'/></li>
            <li><a href="#">Design</a> <FaAngleRight className='list-arrow7'/></li>
            <li><a href="#">Marketing</a> <FaAngleRight className='list-arrow8'/></li>
            <li><a href="#">Lifestyle</a> <FaAngleRight className='list-arrow9'/></li>
            <li><a href="#">Photography & Video</a> <FaAngleRight className='list-arrow10'/></li>
            <li><a href="#">Health & Fiteness</a> <FaAngleRight className='list-arrow11'/></li>
            <li><a href="#">Music</a> <FaAngleRight className='list-arrow12'/></li>
            <li><a href="#">Teaching & Academics</a> <FaAngleRight className='list-arrow13'/></li>
           </ul>
        </div>
        
           
           
      
    </div>
  )
}

export default CategoriesList
