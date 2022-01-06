import React from "react";

export default function Services() {
  return (
    <div>
      <div className="services" id="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Web & LOGO Design</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">App Design</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Trading</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}
