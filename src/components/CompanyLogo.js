import React from 'react'

import './CompanyLogo.css'

function ComanyLogo() {
  return (
    <div className='company-logo-container'>
        <div className='hedaer-container-logo'>
            <h2>Trusted by over 15,000 companies and millions of learners around the world</h2>
        </div>
        <div className='logo-conatiner'>
            <div> <img src="./volkswagen_logo.svg" alt='volkswagen'></img> </div>
            <div> <img src="./samsung_logo.svg" alt='samsung'></img> </div>
            <div> <img src="./cisco_logo.svg" alt='cisco'></img> </div>
            <div> <img src="./vimeo_logo.svg" alt='vimeo'></img> </div>
            <div> <img src="./procter_gamble_logo.svg" alt='p&g'></img> </div>
            <div> <img src="./hewlett_packard_enterprise_logo.svg" alt='hpe'></img> </div>
            <div> <img src="./citi_logo.svg" alt='citi'></img> </div>
            <div> <img src="./ericsson_logo.svg" alt='ericsson'></img> </div>
        </div>
      
    </div>
  )
}

export default ComanyLogo
