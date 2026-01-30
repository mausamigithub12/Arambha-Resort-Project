import React from 'react'
import Pool from '../components/PageComponent/Service/Pool'
import Resturant from '../components/PageComponent/Service/Resturant'
import Eventservice from '../components/PageComponent/Service/Eventservice'
import Roomservice from '../components/PageComponent/Service/Roomservice'
import Hallsection from '../components/PageComponent/Service/Hallsection'
import Spend from '../components/PageComponent/Home/Spend'
import ServiceBanner from '../components/PageComponent/Banner/ServiceBanner'

function Service() {
  return (

 <div>
    <ServiceBanner/>
      <Pool/>
      <Resturant/>
      <Eventservice/>
      <Roomservice/>
      <Hallsection/>
      <Spend/>

    </div>
  )
}



export default Service