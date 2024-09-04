import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

import { FaGoogle } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiReactrouter } from 'react-icons/si';
import { RiNetflixFill } from '@remixicon/react';
import  { FaAmazon } from 'react-icons/fa'

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
    <h1 className='text-2xl md:text-4xl text-white font-bold'>Technologies and Projects</h1>
    <div className='flex flex-wrap items-center justify-around'>
    <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
     <FaHtml5 color='#E34f26' size={50}/>
    </span>
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
     <FaCss3 color='#1572b6' size={50}/>
    </span>
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
     <FaReact color='#61dafb' size={50}/>
    </span>
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
     <FaJs color='#f7df1e' size={50}/>
    </span>
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
     <SiReactrouter color='#f24e1e' size={50}/>
    </span>
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
     <SiMongodb color='#47a248' size={50}/>
    </span>
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
     <SiFirebase color='##ff4438' size={50}/>
    </span>
    </div>
    <div>
    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
      <FaGoogle color='#4285f4' size={50}/>
      <span className='text-white'>
      <h2 className='leading-tight'> Google gemini clone</h2>
      <p className='text-sm leading-tight font-thin'>By using gemini api</p>
      <ul className='text-sm p-2'>
      <li>- It is responsive in mobile and web</li>
      <li>- Integrated gemini API in this project</li>
      </ul>
      </span>
    </div>

    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
      <RiNetflixFill color='#4285f4' size={50}/>
      <span className='text-white'>
      <h2 className='leading-tight'> Netflix Clone</h2>
      <p className='text-sm leading-tight font-thin'>This project simplified frontend clone of netflix</p>
      <ul className='text-sm p-2'>
      <li>- It uses the movieDB API to search for movies and display details</li>
      <li>- And include SignOut and SignIn in this project with simple database connection</li>
      </ul>
      </span>
    </div>

    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
      <FaAmazon color='#4285f4' size={50}/>
      <span className='text-white'>
      <h2 className='leading-tight'>E-Commerce clone</h2>
      <p className='text-sm leading-tight font-thin'>This clone replicate features like amazon and flipkart</p>
      <ul className='text-sm p-2'>
      <li>- user Authentication, Product Catalog, Shopping Cart, CheckOut Process</li>
      <li>- managinged states, react routing and redux toolkit </li>
      </ul>
      </span>
    </div>

    </div>

    </div>
    </div>
  )
}

export default Experience