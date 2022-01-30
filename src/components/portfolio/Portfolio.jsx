import React from 'react'
import './portfolio.scss'

const Portfolio = () => {

    return (
        <div className='portfolio' id="portfolio">
            <h1>Skill Stack</h1>
            <div className="slider">
                    <div className='single-img'><img src='assets/python.png' alt=''/></div>
                    <div className='single-img'><img src='assets/js.png' alt=''/></div>
                    <div className='single-img'><img src='assets/database.png' alt=''/></div>
                    <div className='single-img'><img src='assets/html-5.png' alt=''/></div>
                    <div className='single-img'><img src='assets/css.png' alt=''/></div>
                    <div className='single-img'><img src='assets/excel.png' alt=''/></div>
                    <div className='single-img'><img src='assets/react.png' alt=''/></div>
                    <div className='single-img'><img src='assets/django.png' alt=''/></div>
            </div>
        </div>
    )
}

export default Portfolio
