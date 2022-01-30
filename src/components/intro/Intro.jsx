import React from 'react'
import './intro.scss'

const Intro = () => {
    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src='assets/person.jpg' alt=''/>
                </div>
            </div>
            <div className="right">
                <div className='wrapper'>
                    <h1>Hi There,</h1>
                    <p>I’m Qilong, I was an army boy(Singapore National Service), now teaching myself how to code, and soon a Computer Science Student at NTU.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro
