import React, { useState } from 'react'
import './works.scss'

const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    const data = [
        {
            id: '1',
            img: "assets/todoapp.png",
            title: "Todo App",
            des: 'A simple check list built using react to enhance productivity.',
            link: 'https://fqltodoapp.netlify.app/'
        },
        {
            id: '2',
            img: "assets/chatapp.png",
            title: "Chat App",
            des: "A personal chat app that is built using react and ChatEngine API.(username: jack, password:123123) Try it! :))",
            link: 'https://fqlchatapp.netlify.app/'
        },
        {
            id: '3',
            img: "assets/calculator.png",
            title: "Calculator",
            des: "A Calculator that is capable of doing basic calculations.",
            link: 'https://fqlcalculator.netlify.app/'
        },
        {
            id: '4',
            img: "assets/wordquiz.png",
            title: "Word Quiz App",
            des: "A word-association game app that is built using react and Rapid API to help my friend to prepare his IELTS test.",
            link: 'https://ieltswordquiz.netlify.app/'
        }
    ]

    return (
        <div className='works' id="works">
            <div className="slide" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d => (<div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{d.title}</h2>
                                <p>{d.des}</p>
                                <span><a href={d.link}>Project Link</a></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=''/>
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/next.png" className='arrow left' alt="" onClick={() => handleClick("left")}/>
            <img src="assets/next.png" className='arrow right' alt="" onClick={() => handleClick("right")}/>
        </div>
    )
}

export default Works
