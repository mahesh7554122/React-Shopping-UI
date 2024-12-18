import React, { useState } from 'react'
import Header from '../Components/Header'
import Men from '../Components/Men'
import Women from '../Components/Women'
import Footer from '../Components/Footer'
import MenColl from './../Components/MenColl';
import WomenColl from './../Components/WomenColl';
import { Gents } from '../../data'

const Main = () => {
  const [men , setMen] = useState(Gents)
  return (
    <div>
      <Header />
      <Men />
      <MenColl men = { men }/>
      <Women />
      <WomenColl />
      <Footer />
    </div>
  )
} 
export default Main
