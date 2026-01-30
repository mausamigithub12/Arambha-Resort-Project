import React from 'react'
import HomeBanner from '../components/PageComponents/Banner/HomeBanner'
import AboutSection from '../components/PageComponents/HomeComponent/AboutSection'
import Spend from '../components/PageComponents/HomeComponent/Spend'

function Home() {
  return (
    <div>
<HomeBanner/>
<AboutSection/>
      <Special /> 
      <Amenities />
      <RoomSection />
      <Highlight />
      <WhyUs />
      <Review />
      <BlogSection />
      <Spend />

    </div>
  )
}

export default Home