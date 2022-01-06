import React from "react";

export default function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Himanshu Lohar</div>
            <div className="text-3">
              And I'm a 
              {/* <Typical 
               loop = {Infinity}
               steps= {
                     "Mern stack developer",
                     1000,

               }
               /> */}
            </div>
            <a href="#" target="_blank">Hire me</a>
    
            
          </div>
        </div>
      </section>
    </div>
  );
}
