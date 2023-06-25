import React from 'react'
import Img from '../assets/river.gif'
import Img2 from '../assets/saving-money.gif'
import Img3 from '../assets/greenbg.gif'

const Gif = () => {
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-3 auto-cols-max mt-10 gap-10 ">
      <img src={Img} alt="error" className="w-full rounded" />
      <img src={Img2} alt="error" className="w-full rounded" />
      <img src={Img3} alt="error" className="w-full h-full rounded" />
      </div>
    </div>
  )
}

export default Gif
