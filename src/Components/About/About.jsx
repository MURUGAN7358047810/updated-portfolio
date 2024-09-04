import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import img2 from '../../assets/img2.png'

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mb-100px'>
      <div>
      <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
      <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
      <img className='md:h-80' src={img2} alt="About img" />

      <ul>
      <div>
      <IoArrowForward size={30} className='mt-1'/>

      <span className='w-96'>
      <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
      <p className='text-sm md:text-md leading-tight'>Developed user experience across all devices</p>
      </span>
      </div>

      <div>
      <IoArrowForward size={30} className='mt-1'/>

      <span className='w-96'>
      <h1 className='text-xl md:text-2xl font-semibold leading-normal'>React js Developer</h1>
      <p className='text-sm md:text-md leading-tight'>For bilding reusable components,managing states effectively.</p>
      </span>
      </div>

      <div>
      <IoArrowForward size={30} className='mt-1'/>

      <span className='w-96'>
      <h1 className='text-xl md:text-2xl font-semibold leading-normal'>React Native Developer</h1>
      <p className='text-sm md:text-md leading-tight'>Beginner-level in react native and working on basic projects.</p>
      </span>
      </div>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default About