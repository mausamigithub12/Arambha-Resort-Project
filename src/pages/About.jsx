import React from 'react'
import Story from '../components/PageComponents/About/Story'
// import Introduction from '../components/PageComponent/About'
import Mission from '../components/PageComponents/About/Mission'
import Offer from '../components/PageComponents/About/Offer'
// import WhyChooseUs from '../components/PageComponent/Home/Choose'
import Review from '../components/PageComponents/HomeComponent/Review'
// import Booking from '../components/Booking'
// import Location from '../components/Location'
import Spend from '../components/PageComponents/HomeComponent/Spend'
import { FaHome } from 'react-icons/fa'
import AboutBanner from '../components/PageComponents/Banner/AboutBanner'
import WhyUs from '../components/PageComponents/HomeComponent/Whyus'
// import { Link } from 'react-router-dom'
// import { MdHome } from 'react-icons/md'

function About() {
  return (
   <>
  
    <AboutBanner/>
<Story/>
<Mission />
<Offer /> 
<WhyUs/>
<Review/>
{/* <Booking /> */}
{/* <Location/> */}
<Spend/>

 </>

  )
}

export default About