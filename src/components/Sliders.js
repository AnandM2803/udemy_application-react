import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
// import BackgroundImg1 from './BackgroundImg1.jpg';
import './Sliders.css'

export default function App() { 
	const [index, setIndex] = useState(0); 

	const handleSelect = (selectedIndex) => { 
		setIndex(selectedIndex); 
	}; 
	return ( 
		<div style={{ 
			display: 'block', 
			// width: 1500, padding: 8
		}}> 
		
			<Carousel activeIndex={index} 
				onSelect={handleSelect}> 
				<Carousel.Item interval={1900} className='carousel-container'> 
					<img className="slidersimg1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BfXtpgcbb-GYmYIn3hWHg0nkBK6c5q_ZZA&s " />
                  <div className='carousel-conetent-container'>
					<div className='heading1'> <h1>Skills that drive you <br /> forword</h1></div>
					<div className='sub-heading1'><h5>Technology and the world of work change fast-with <br /> us,you're faster.Get the skills to achive golas & <br /> stay competative</h5></div>
					<div className='heading_btn1'><button>Plan for organizations</button></div>
				  </div>

				</Carousel.Item> 
				<Carousel.Item interval={900} className='carousel-container'> 
					<img className="slidersimg2" src= 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCiA_ZRc2mu_JeuoSSGYmliKSp-X5S1_e0w&s"
						alt="HTML" /> 
						 <div className='carousel-conetent-container'>
					<div className='heading2'> <h1>This podcast is for the <br /> leadres</h1></div>
					<div className='sub-heading2'><h5>And those who will be. Learn to work,lead,and live <br /> better with new epsodes of leading Up dropping each<br /> Wednesady</h5></div>
					<div className='heading_btn2'><button> Listen now </button></div>
				  </div>

				</Carousel.Item> 
				<Carousel.Item interval={900} className='carousel-container'> 
					<img className="slidersimg3" src= 
"https://clone-udemy-landing-page.netlify.app/images/header/header.jpg"
						alt="Angular" /> 
						 <div className='carousel-conetent-container'>
					<div className='heading1'> <h1>Skills that drive you <br /> forword</h1></div>
					<div className='sub-heading1'><h5>Technology and the world of work change fast-with <br /> us,you're faster.Get the skills to achive golas & <br /> stay competative</h5></div>
					<div className='heading_btn1'><button>Plan for organizations</button></div>
				  </div>
				</Carousel.Item> 
			</Carousel> 
		</div> 
	); 
}
