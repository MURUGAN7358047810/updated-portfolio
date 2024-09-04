import React from 'react'
import img1 from '../../assets/h1img-removebg-preview.png'
import TextChanges from '../TextChanges'

const Home = () => {

 const handleContactClick = () => {
  window.location.href = 'mailto:muruganmanoj590@gmail.com';
 }

  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
    <div className='md:w-2/4 md:pt-10'>
    <h1 className='text-3xl md:text-6xl font-bold flexleading-normal tracking-tighter'>
    <TextChanges />
    </h1>
    <p className='text-sm md:text-2xl tracking-tight'> As a passionate Front-End Developer, I specialize in creating, responsive and user-friendly web application using react js. </p>
    <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' onClick={handleContactClick}>Contact Me</button>
    </div>
    <div><img className=''  src={img1} alt="" /></div>
    </div>
  )
}

export default Home