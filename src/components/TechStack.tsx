import React from 'react'
import { SiMacos } from 'react-icons/si'
import js from '../assets/svg/js.svg'
import php from '../assets/svg/php.svg'
import vs from '../assets/svg/vs.svg'
import figma from '../assets/svg/figma.svg'
import git from '../assets/svg/git.svg'
import mongodb from '../assets/svg/mongodb.svg'
import nodejs from '../assets/svg/nodejs.svg'
import html5 from '../assets/svg/html5.svg'
import css from '../assets/svg/css.svg'
import tailwind from '../assets/svg/tailwind.svg'
import postman from '../assets/svg/postman.svg'
import mozilla from '../assets/svg/mozilla.svg'
import reactjs from '../assets/svg/reactjs.svg'
import laravel from '../assets/svg/laravel.svg'
import ubuntu from '../assets/svg/ubuntu.svg'
import vite from '../assets/svg/vitejs.svg'

const TechStack = () => {
  return (
    <div className="tech-stack bg-matte rounded-xl p-5">
      <div className="tech-stack-section-title text-center mb-2">
        <h1 className="text-2xl">
          Technology <span className="text-secondary">Stack</span>
        </h1>
      </div>
      <div className="technology-stack-section grid grid-rows-3 grid-flow-col gap-4">
        <div className="technology-stack">
          <div className="card-content-title">
            <h4>Languages</h4>
          </div>
          <div className="icons">
            <img src={js} alt="" />
            <img src={php} alt="" />
          </div>
        </div>
        <div className="technology-stack">
          <div className="card-content-title">
            <h4>Other</h4>
          </div>
          <div className="icons">
            <img src={html5} alt="" />
            <img src={css} alt="" />
            <img src={tailwind} alt="" />
          </div>
        </div>
        <div className="technology-stack">
          <div className="card-content-title">
            <h4>Tools</h4>
          </div>
          <div className="icons">
            <img src={vs} alt="" />
            <img src={figma} alt="" />
            <img src={git} alt="" />
            <img src={postman} alt="" />
            <img src={mozilla} alt="" />
          </div>
        </div>
        <div className="technology-stack">
          <div className="card-content-title">
            <h4>Database</h4>
          </div>
          <div className="icons">
            <img src={mongodb} alt="" />
            <img src={nodejs} alt="" />
          </div>
        </div>
        <div className="technology-stack">
          <div className="card-content-title">
            <h4>Frameworks</h4>
          </div>
          <div className="icons">
            <img src={reactjs} alt="" />
            <img src={laravel} alt="" />
          </div>
        </div>
        <div className="technology-stack">
          <div className="card-content-title">
            <h4>OS</h4>
          </div>
          <div className="icons">
            <img src={ubuntu} alt="" />
            <SiMacos className="rounded" size={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
