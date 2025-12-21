import React from 'react'
import Home from './Components/Home/Home'
import AboutComponent from './Components/About/About'
import Skills from './Components/Skill/Skill'
import Projects from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

const page = () => {
  return (
    <div>
      <Home />
      <AboutComponent />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default page