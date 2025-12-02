import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {

  const handleDownload = () => {
    const fileUrl = '/Nitin.dev.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Nitin Kumar Web Developer .pdf'; 
    link.click();
  };

  return (
    <>
      <div id='home' className='hero'>
        <img src={profile_img} alt="" className='profile'/>
        <h1><span>I'm Nitin Kumar Gautam,</span> Full Stack Developer. in India</h1>
        <p>I'm Full Stack Developer from Up, India With 1 Year of experience in Eucoders Technologies Pvt. Ltd.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className='hero-resume' onClick={handleDownload}>My resume</div>
        </div>
      </div>
    </>
  )
}

export default Hero
