import React from 'react'
import App from '../../App'

export default function AboutMe() {
    return (
        <div>
            <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="images/profile-1.jpeg" alt="" />
                </div>
                <div className="column right">
                    <div className="text">I'm Himanshu and I'm a <span className="typing-2"></span></div>
                    <p>To utilize my technical skills and provide a professional service to customers by applying and honing my knowledge and working in a challenging and motivating working environment.</p>
                    <a href="lohar.pdf" download='himanshu lohar.pdf'>Download CV</a>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

