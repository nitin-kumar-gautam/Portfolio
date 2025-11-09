import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'
const About = () => {
  return (
    <>
      <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" className='frame'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field.
                        Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>C, HTML & CSS</p>
                        <hr style={{width:"95%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java Script & DSA</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Talwind css & Bootstrap</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>MERN Stack</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Year of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
