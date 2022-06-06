const { useState } = React;
const { createRoot } = ReactDOM;

const HomeComponent = () => {
  return (
    <section className="pt-page" data-id="home">
      <div className="section-inner start-page-content">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="photo">
                <img src="./images/photo.jpg" alt="" />
              </div>
            </div>

            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="title-block">
                <h1>Ethan Uong</h1>
                <div className="owl-carousel text-rotation">
                  <div className="item">
                    <div className="sp-subtitle">Software Engineer</div>
                  </div>
                  <div className="item">
                    <div className="sp-subtitle">Adjunct Professor</div>
                  </div>
                  <div className="item">
                    <div className="sp-subtitle">Photographer</div>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/etuong" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ethan-uong-4066407a/" target="_blank"><i
                  className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="row">

            <div className="col-sm-6 col-md-6 col-lg-6" style={{ borderRight: "2px solid rgb(94, 196, 94)" }}>
              <div className="about-me">
                <div className="block-title">
                  <h3>About <span>Me</span></h3>
                </div>
                <p>I love to solve problems! At a young age, I had a candid characteristic to break things apart
                  and put them back together. My curiosity in engineering and technology led me to pursue my
                  passion in computer science and software development. This website was created out of my vast
                  collection of photographs that I captured during my world travels and my portfolio of various technical projects.</p>
              </div>
              <div className="download-resume">
                <a href="Resume.pdf" target="_blank" className="btn btn-secondary">Download Resume</a>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6">
              <ul className="info-list">
                <li><span className="title">Residence</span><span className="value">Fort Wayne, Indiana</span></li>
                <li><span className="title">E-mail</span><span className="value"><a
                  href="mailto:etuong@hotmail.com">etuong@hotmail.com</a></span></li>
                <li><span className="title">Phone</span><span className="value">(412) 397-8149</span></li>
                <li><span className="title">Freelance</span><span className="value available">Available</span></li>
                <div className="mobile-menu-hide">
                  <li><span className="title">Education</span><span className="value">B.S Structural Engineering</span>
                  </li>
                  <li><span className="title"></span><span className="value">M.S Computational Mechanics</span>
                  </li>
                  <li><span className="title"></span><span className="value">M.S Computer Science</span>
                  </li>
                </div>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};

const container = document.getElementById('home_container');
const root = createRoot(container);
root.render(<HomeComponent />);
