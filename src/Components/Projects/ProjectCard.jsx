import React from 'react'
import bannerImg from '../../assets/img2.png'

const ProjectCard = ({title, main, url, srcCode}) => {
    const redirectToGithub = (url)=> {
        window.location.href = url;
    }
    const redirectToCode = (srcCode) => {
      window.location.href = srcCode;
    }
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
    <img className='p-4' src={bannerImg} alt="" />
    <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
    {title}
    </h3>
    <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
    <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
    <button className='md:mt-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' onClick={() =>redirectToGithub(url)}>Demo</button>

    <button className='md:mt-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' onClick={() =>redirectToCode(srcCode)}>Source Code</button>
    </div>
    </div>
  )
}

export default ProjectCard