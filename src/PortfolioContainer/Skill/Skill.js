import React from 'react'

export default function Skill() {
    return (
        <div>
            <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills & experiences.</div>
                    <p>I learn C++, DSA, MERN STACK, Figma, SQL.. and also make project of Figma and MERN stack .</p>
                    <a href="#">Read more</a>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>C</span>
                            <span>65%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>OOPs</span>
                            <span>75%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MERN</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>SQL</span>
                            <span>65%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>dsa</span>
                            <span>70%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
