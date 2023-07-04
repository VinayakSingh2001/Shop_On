// import React from 'react'

// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   )
// }

import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Fotter from '../components/Fotter'





const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Fotter/>

    </div>
  )
}

export default Home

