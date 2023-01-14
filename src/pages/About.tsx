import React from 'react'
import '../assets/styles/about.css'
import { FcDocument } from 'react-icons/fc'
import Header from '../components/Header'
import Author from '../components/Author'
import TechStack from '../components/TechStack'

const About = () => {
  return (
    <main>
      <Header />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-xl">
        <Author />
        <TechStack />
      </div>

      <a className="glass" href="#">
        <FcDocument size={30} />
        <span className="text-secondary">Resume</span>
      </a>
    </main>
  )
}

export default About
