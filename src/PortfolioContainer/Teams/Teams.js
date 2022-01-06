import React from "react";

export default function teams() {
  return (
    <div>
      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">My teams</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src="images/profile-2.jpeg" alt="" />
                <div className="text">Devendra Panchal</div>
                <p>Full Stack Developer and part time f</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-3.jpeg" alt="" />
                <div className="text">Kshitij Dixit</div>  
                <p>Backend Developer & REST API developer.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-4.jpeg" alt="" />
                <div className="text">Aman kala</div>
                <p>Share & Crypto market adviser. Also a Trader</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="images/profile-5.jpeg" alt="" />
                <div className="text">Ashutosh kumar</div>
                <p>Bussiness Analyst and Social Influancer </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
