import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
       <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
       <div className='py-12 px-8 flex flex-wrap gap-5 mx-28'>
         <ProjectCard title="Chat web Application" main="this is a chat web application with user authentication and database" url="https://chatapp-eight-phi.vercel.app/" srcCode='https://github.com/MURUGAN7358047810/chatapp'/>
         <ProjectCard title="Youtube clone" main="youtube clone in this clone is used api for searching video content web application with user authentication and database" url='https://wonderful-capybara-b1ce00.netlify.app/login'  srcCode="https://github.com/MURUGAN7358047810/chatapp"/>
         <ProjectCard title="Netflix clone" main=" user Authentication, Product Catalog, Shopping Cart, CheckOut Process managinged states, react routing and redux toolkit" url='https://wonderful-capybara-b1ce00.netlify.app/login' srcCode="https://github.com/MURUGAN7358047810/Netflix-clone"/>
         
       </div>
    </div>
  )
}

export default Projects