import React from 'react'
import './CardsSection.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LiaStarSolid } from "react-icons/lia";

function CardsSection() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <div className='cards-container'>
    <Carousel responsive={responsive}>
    <div className='card'>
        <div className='image'>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbzLpTCHnK1Pz9nRg4z-3iRe_frV4OGpSVZxcHb3GZG2TwgA4W" alt='card1' />
        </div>
        <div className='card-title'>
            <h2>The complete 2024 Web<br />Developmenet Bootcamp</h2>
        </div>
        <div className='card-professor'><h4>Dr. Angela Yu</h4></div>
        <div className='card-rating'><h4>4.7</h4><h5><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></h5><h3>(379,558)</h3></div>
        <div className='card-price'><h2>₹ 3,099</h2></div>
        <div className='card-btn'><button>BestSeller</button></div>
    </div>

    <div className='card'>

    <div className='image'>
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl5qpo558ov2tkXIL0azttGjuTBZyYodwP6PQN-jOE0v7lV0hD" alt='card1' />
        </div>
        <div className='card-title'>
            <h2>The complete 2020 Full stack Web Developmenet<br /> Course</h2>
        </div>
        <div className='card-professor'><h4>Kalob Taulien</h4></div>
        <div className='card-rating'><h4>4.6</h4><h5><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></h5><h3>(7,378)</h3></div>
        <div className='card-price'><h2>₹ 3,699</h2></div>

    </div>

    <div className='card'>
       
    <div className='image'>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4d8HNJd1lAtVcFAr91r4f-C2KQdPrgn-i_Z6rfUXhoBm9zY8y" alt='card1' />
        </div>
        <div className='card-title'>
            <h2>Intoduction to Web Developmenet<br />[HTML,CSS,JAVASCRIPT]</h2>
        </div>
        <div className='card-professor'><h4>Academy of Computing and Artficial..</h4></div>
        <div className='card-rating'><h4>4.3</h4><h5><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></h5><h3>(327)</h3></div>
        <div className='card-price'><h2>₹ 1,999</h2></div>

    </div>

     <div className='card'>
       
    <div className='image'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3Ojj5eeUS-kjS_BvBph9DAckrFiz2LsTuOzfckpJPF9k0xSR" alt='card1' />
        </div>
        <div className='card-title'>
            <h2>Laravel 10-For Beginner to<br />Advanced (2024)</h2>
        </div>
        <div className='card-professor'><h4>Web solution US</h4></div>
        <div className='card-rating'><h4>4.5</h4><h5><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></h5><h3>(286)</h3></div>
        <div className='card-price'><h2>₹ 3,699</h2></div>

    </div>

    
    <div className='card'>
       
       <div className='image'>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0v3DEDY53465RrE7t-lTbpiofqIq-MszCJX6LXs9GRkZmzlH" alt='card1' />
           </div>
           <div className='card-title'>
               <h2>NextJS & OpenAI -2024 Edition</h2>
           </div>
           <div className='card-professor'><h4>Jhon Smilga</h4></div>
           <div className='card-rating'><h4>4.8</h4><h5><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></h5><h3>(381)</h3></div>
           <div className='card-price'><h2>₹ 799</h2></div>
   
       </div>

       <div className='card'>
       
       <div className='image'>
               <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvvXpt50TehjYSfTsQ44PUqNJrWeZGU0PvPhnrCu1E-QbEwzP0" alt='card1' />
           </div>
           <div className='card-title'>
               <h2>Web Development concepts for <br /> Everyone</h2>
           </div>
           <div className='card-professor'><h4>scott Bromander</h4></div>
           <div className='card-rating'><h4>4.5</h4><h5><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></h5><h3>(834)</h3></div>
           <div className='card-price'><h2>₹ 2,699</h2></div>
   
       </div>
   
       <div className='card'>
       
       <div className='image'>
               <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0p88zBRR8lzwPlPZAVK31gZNo2hs5nJ9m_KaXLKL7_ICfE4V-" alt='card1' />
           </div>
           <div className='card-title'>
               <h2>Web Performance Bootcamp:<br />Mastring Speed Techniques</h2>
           </div>
           <div className='card-professor'><h4>Vitor Fonseca</h4></div>
           <div className='card-rating'><h4>4.5</h4><h5><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></h5><h3>(102)</h3></div>
           <div className='card-price'><h2>₹ 799</h2></div>
   
       </div>
  </Carousel> 
  </div>
  )
}

export default CardsSection
