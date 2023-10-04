import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'

const Portfolio1 = () => {
  return (
    <>
    <div className="portfolio-component-wrapper">
      <img className='portfolio-main-image' src="/public/imgs/website1.webp" alt="" />
      <div className="portfolio-under-image">
        <div className="portfolio-links">
          <Link to='#'className="portfolio-link">View code</Link>
          <Link to='#'className="portfolio-link">Visit site</Link>
        </div>
        <div className="portfolio-languages">
          <img src="/public/imgs/html5.png" alt="" />
          <img src="/public/imgs/sasspng.png" alt="" />
          <img src="/public/imgs/react.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio1