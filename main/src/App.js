import React from 'react'

function App() {
  return (
    <div className="material-template">

      <div className="preloader">
        <div className="preloader-animation">
          <div className="preloader-spinner">
          </div>
        </div>
      </div>


      <div id="page" className="page">

        <header id="site_header" className="header mobile-menu-hide">
          <div className="header-content">
            <div className="site-title-block mobile-hidden">
              <div className="site-title">Ethan <span>Uong</span></div>
            </div>


            <div className="site-nav">

              <ul id="nav" className="site-main-menu text-uppercase">
                <li>
                  <a className="pt-trigger" href="#home">Home</a>
                </li>
                <li>
                  <a className="pt-trigger" href="#resume">Resume</a>
                </li>
                <li>
                  <a className="pt-trigger" href="#services">Services</a>
                </li>
                <li>
                  <a className="pt-trigger" href="#portfolio">Portfolio</a>
                </li>

                <li>
                  <a className="pt-trigger" href="#travel">Travel</a>
                </li>
                <li>
                  <a className="pt-trigger" href="#timeline">Timeline</a>
                </li>
                <li>
                  <a className="pt-trigger" href="#contact">Contact</a>
                </li>
              </ul>

            </div>

          </div>
        </header>

        <div className="mobile-header mobile-visible">
          <div className="mobile-logo-container">
            <div className="mobile-site-title">Ethan Uong</div>
          </div>

          <a className="menu-toggle mobile-visible">
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <div id="main" className="site-main">

          <div className="pt-wrapper">

            <div className="subpages">


              <section className="pt-page" data-id="home">
                <div className="section-inner start-page-content">
                  <div className="page-header">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="photo">
                          <img src={require("./images/photo.jpg")} alt="" />
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
                            collection of photographs that I captured and my portfolio of various projects.</p>
                        </div>
                        <div className="download-resume">
                          <a href="Resume.pdf" target="_blank" className="btn btn-secondary">Download Resume</a>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <ul className="info-list">
                          <li><span className="title">Residence</span><span className="value">Fort Wayne, Indiana, USA</span></li>
                          <li><span className="title">E-mail</span><span className="value"><a
                            href="mailto:etuong@hotmail.com">etuong@hotmail.com</a></span></li>
                          <li><span className="title">Phone</span><span className="value">‪(412) 397-8149‬</span></li>
                          <li><span className="title">Freelance</span><span className="value available">Available</span></li>
                          <li><span className="title">Education</span><span className="value">‪B.S Structural Engineering‬</span>
                          </li>
                          <li><span className="title"></span><span className="value">‪M.S Computational Mechanics‬</span>
                          </li>
                          <li><span className="title"></span><span className="value">‪M.S Computer Science‬</span>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              <section className="pt-page" data-id="resume">
                <div className="section-inner custom-page-content">
                  <div className="page-header color-1">
                    <h2>Resume</h2>
                  </div>
                  <div className="page-content">

                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                          <div className="block-title">
                            <h3>Education</h3>
                          </div>

                          <div className="timeline">

                            <div className="timeline-item">
                              <h4 className="item-title">The Johns Hopkins University</h4>
                              <span className="item-period">2022</span>
                              <span className="item-small">Master of Science in Computer Science</span>
                              <p className="item-description">Cloud Computing, Big Data, Computer Architecture, Machine
                                Learning, Data Science</p>
                            </div>

                            <div className="timeline-item">
                              <h4 className="item-title">Carnegie Mellon University</h4>
                              <span className="item-period">2014</span>
                              <span className="item-small">Master of Science in Computational Mechanics</span>
                              <p className="item-description">Computer Vision, Computer Aided Design, Parallel Computing,
                                Numerical Methods</p>
                            </div>

                            <div className="timeline-item">
                              <h4 className="item-title">University of California, San Diego</h4>
                              <span className="item-period">2011</span>
                              <span className="item-small">BS in Structural Engineering, Minor in
                                Mathematics</span>
                              <p className="item-description">Solid Mechanics, Structural Analysis, Finite Element, Steel
                                Design, Earthquake Engineering</p>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                          <div className="block-title">
                            <h3>Experience</h3>
                          </div>

                          <div className="timeline">

                            <div className="timeline-item">
                              <h4 className="item-title">Senior Software Engineer</h4>
                              <span className="item-period">June 2018 - Current</span>
                              <span className="item-small"></span>
                              <p className="item-description">DevOps, Enterprise Web Development, Extreme Programming, Java
                                Modular Design</p>
                            </div>

                            <div className="timeline-item">
                              <h4 className="item-title">Software Developer</h4>
                              <span className="item-period">June 2014 - April 2018</span>
                              <span className="item-small">Michael Baker International</span>
                              <p className="item-description">C++/C#, WPF, XML, XSLT, .NET</p>
                            </div>

                            <div className="timeline-item">
                              <h4 className="item-title">Adjunct Math Instructor</h4>
                              <span className="item-period">June 2015 - May 2019</span>
                              <span className="item-small">University of Pittsburgh</span>
                              <p className="item-description">Delivered lectures to undergraduate students on various subjects
                                including applied calculus, linear algebra, differential equations, and numerical
                                methods.</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                          <div className="block-title">
                            <h3>Design <span>Skills</span></h3>
                          </div>

                          <div className="skills-info">
                            <h4>Web Design (HTML/CSS/JS)</h4>
                            <div className="skill-container">
                              <div className="skill-percentage skill-1"></div>
                            </div>

                            <h4>Mobile Design (Android)</h4>
                            <div className="skill-container">
                              <div className="skill-percentage skill-3"></div>
                            </div>

                            <h4>Software Design (OOP)</h4>
                            <div className="skill-container">
                              <div className="skill-percentage skill-2"></div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                          <div className="block-title">
                            <h3>Coding <span>Skills</span></h3>
                          </div>

                          <div className="skills-info">
                            <h4>Java</h4>
                            <div className="skill-container">
                              <div className="skill-percentage skill-4"></div>
                            </div>

                            <h4>Python</h4>
                            <div className="skill-container">
                              <div className="skill-percentage skill-5"></div>
                            </div>

                            <h4>React + Angular + Vue</h4>
                            <div className="skill-container">
                              <div className="skill-percentage skill-8"></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="block">
                          <div className="center download-resume">
                            <a href="Resume.pdf" target="_blank" className="btn btn-secondary">Download Resume</a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </section>

              <section className="pt-page" data-id="services">
                <div className="section-inner custom-page-content">
                  <div className="page-header color-1">
                    <h2>Services</h2>
                  </div>
                  <div className="page-content">

                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <div className="block-title">
                          <h3>My <span>Services</span></h3>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className="service-block">
                          <div className="service-info">

                            <div className="service-image">
                              <img src={require("./images/service/web_design_icon.png")} alt="Web Design" className="mCS_img_loaded" />
                            </div>
                            <h4>Web Design</h4>
                            <p>I design responsive and modern websites. Check out my portfolio for more information!</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className="service-block">
                          <div className="service-info">
                            <div className="service-image">
                              <img src={require("./images/service/photography_icon.png")} alt="Photography" className="mCS_img_loaded" />
                            </div>
                            <h4>Photography</h4>
                            <p>I specialized in bright high contrast photography with proficient knowledge in Adobe suites
                              including Photoshop and Premiere</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className="service-block">
                          <div className="service-info">
                            <div className="service-image">
                              <img src={require("./images/service/creativity_icon.png")} alt="Coding" className="mCS_img_loaded" />
                            </div>
                            <h4>Coding</h4>
                            <p>I write maintainable, deliverable, and scalable software in C++, Java, and Python for
                              desktop, web, and mobile platform</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className="service-block">
                          <div className="service-info">
                            <div className="service-image">
                              <img src={require("./images/service/advetising_icon.png")} alt="Teaching" className="mCS_img_loaded" />
                            </div>
                            <h4>Teaching</h4>
                            <p>I have 5 years of teaching experiences ranging from high school calculus to college
                              differential equations</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <div className="block-title">
                          <h3>Testimonials</h3>
                        </div>

                        <div className="testimonials owl-carousel block">

                          <div className="testimonial-item">

                            <div className="testimonial-credits">

                              <div className="testimonial-picture">
                                <img src={require("./images/testimonials/man.png")} alt="" />
                              </div>

                              <div className="testimonial-author-info">
                                <p className="testimonial-author">Neil Patel</p>
                                <p className="testimonial-firm">Software Engineer at Microsoft Corporation</p>
                              </div>
                            </div>

                            <div className="testimonial-content">
                              <div className="testimonial-text">
                                <p>"I have had the pleasure of working with Ethan at Michael Baker International. Ethan's
                                  responsibilities included creating desktop application windows from scratch and conducting
                                  code review for his peers. He would consistently meet the budget of his tasks and never
                                  backed down from any unprecedented challenge. However, what made him stand out in the team
                                  was his unsatiable desire to learn and better his skills. His curiosity has helped the
                                  team find creative and innovative solutions and his fine attention to small details
                                  minimized our reworks."</p>
                              </div>
                            </div>

                          </div>



                          <div className="testimonial-item">

                            <div className="testimonial-credits">

                              <div className="testimonial-picture">
                                <img src={require("./images/testimonials/man.png")} alt="" />
                              </div>

                              <div className="testimonial-author-info">
                                <p className="testimonial-author">David E.</p>
                                <p className="testimonial-firm">Principal Engineering Fellow at an Aerospace company</p>
                              </div>
                            </div>

                            <div className="testimonial-content">
                              <div className="testimonial-text">
                                <p>"Ethan has the ability to dive deep into technology, derive creative solutions and then
                                  able to communicate those thoughts clearly to his team leads and peers. He organized
                                  several “tech time” events that allowed engineers to present technical and interesting
                                  topics to their peers. And Ethan always was a presenter at his own events, always excited
                                  to share relevant information! It is with good faith that I recommend Ethan to any
                                  company, I am
                                  sure he will prove to be an asset as he had in my team."</p>
                              </div>
                            </div>

                            <div className="testimonial-item">
                              <div className="testimonial-credits">
                                <div className="testimonial-picture">
                                  <img src={require("./images/testimonials/woman.png")} alt="" />
                                </div>

                                <div className="testimonial-author-info">
                                  <p className="testimonial-author">Alice Carr</p>
                                  <p className="testimonial-firm">UCSD Faculty Assistant</p>
                                </div>
                              </div>

                              <div className="testimonial-content">
                                <div className="testimonial-text">
                                  <p>"Ethan is an incredibly talented photographer. I had the pleasure of working with him on
                                    my wedding day and let me just say that it was so much fun and the pictures turned out
                                    amazing! It was such a joyful experience to have his service on my very special day. Would
                                    love to hire him again, except I'm only getting married once in this life!"</p>
                                </div>
                              </div>
                            </div>

                            <div className="testimonial-item">
                              <div className="testimonial-credits">
                                <div className="testimonial-picture">
                                  <img src={require("./images/testimonials/woman.png")} alt="" />
                                </div>
                                <div className="testimonial-author-info">
                                  <p className="testimonial-author">Caitlyn G.</p>
                                  <p className="testimonial-firm">Student at University of Pittsburgh, MATH 0125, Business
                                    Calculus</p>
                                </div>
                              </div>
                              <div className="testimonial-content">
                                <div className="testimonial-text">
                                  <p>"Ethan is super friendly and always helpful when we ask him questions. This was easily my
                                    favorite class this semester. I loved the positive environment, and I was even inspired to
                                    change my major by this class. Thank you, Ethan! :)"</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              <section className="pt-page" data-id="portfolio">
                <div className="section-inner custom-page-content">
                  <div className="page-header color-1">
                    <h2>Portfolio</h2>
                  </div>
                  <div className="page-content">

                    <ul id="portfolio_filters" className="portfolio-filters">
                      <li className="active">
                        <a className="filter btn btn-sm btn-link active" data-group="all">All</a>
                      </li>
                      <li>
                        <a className="filter btn btn-sm btn-link" data-group="code">Code</a>
                      </li>
                      <li>
                        <a className="filter btn btn-sm btn-link" data-group="photo">Photography</a>
                      </li>
                      <li>
                        <a className="filter btn btn-sm btn-link" data-group="hdr">HDR</a>
                      </li>
                      <li>
                        <a className="filter btn btn-sm btn-link" data-group="shop">Photoshop</a>
                      </li>
                      <li>
                        <a className="filter btn btn-sm btn-link" data-group="solid">SolidWorks</a>
                      </li>
                    </ul>

                    <div id="portfolio_grid" className="portfolio-grid">
                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-8.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/askS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Ask Ethan!</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favColorL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favColorS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "solid"]'>
                        <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swPlaneL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/swPlaneS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "shop"]'>
                        <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/pcUsaL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/pcUsaS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-5.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/wpfS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Windows Presentation Foundation && Model-View-ViewModel</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "hdr"]'>
                        <a className="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrWallL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/hdrWallS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "hdr"]'>
                        <a className="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrChicagoL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/hdrChicagoS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-3.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/visionS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Computer Vision</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "shop"]'>
                        <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/pcWarsawL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/pcWarsawS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favCappadociaL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favCappadociaS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-7.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/algoS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Data Structures and Algorithms</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "hdr"]'>
                        <a className="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrDancingL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/hdrDancingS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "solid"]'>
                        <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swSkateL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/swSkateS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-4.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/finiteS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Finite Element</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "solid"]'>
                        <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swDriveL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/swDriveS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favElephantL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favElephantS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-1.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/lightS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Personal Website - Light Version</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "shop"]'>
                        <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/pcSiemReapL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/pcSiemReapS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "shop"]'>
                        <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/psFlameL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/psFlameS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-2.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/darkS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Personal Website - Dark Version</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favHeadL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favHeadS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favPenangL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favPenangS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favSantoriniL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favSantoriniS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "solid"]'>
                        <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swBulbL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/swBulbS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favTempleL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favTempleS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "code"]'>
                        <a className="ajax-page-load" href="pages/project/project-6.html">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/lorenzS.jpg")} alt="" />
                          <div>
                            <h5 className="name">Numerical Analysis</h5>
                          </div>
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "shop"]'>
                        <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/psSmokeL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/psSmokeS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure className="item" data-groups='["all", "photo"]'>
                        <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favCopenhagenL.jpg">
                          <img className="img-fluid img-thumbnail" src={require("./images/portfolio/favCopenhagenS.jpg")} alt="" />
                        </a>
                      </figure>

                    </div>
                  </div>
                </div>
              </section>

              <section className="pt-page" data-id="travel">
                <div className="section-inner custom-page-content">
                  <div className="page-header color-1">
                    <h2>Travel</h2>
                  </div>
                  <div id="gmap"></div>
                </div>
              </section>


              <section className="pt-page" data-id="timeline">
                <div className="section-inner custom-page-content">
                  <div className="page-header color-1">
                    <h2>Timeline</h2>
                  </div>
                  <div className="page-content">

                    <ul className="timeline">
                      <li className="timeline-inverted">
                        <div className="timeline-badge primary"><i className="fa fa-globe-americas"></i></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">America</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Grew up in central Los Angeles. First love was music, second love was sports.</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="timeline-badge danger"><i className="fa fa-university"></i></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">College</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Attended University of California, San Diego and majored in Structural Engineering with a
                              minor in Mathematics.</p>
                          </div>
                        </div>
                      </li>

                      <li className="timeline-inverted">
                        <div className="timeline-badge light"><i className="fa fa-plane"></i></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">World Travel</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Traveled the world including two study abroad programs in Berlin, Germany, and Rome, Italy.
                              Also did an internship on seismic retrofit at the University of Auckland, New Zealand.</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="timeline-badge warning"><i className="fa fa-graduation-cap"></i></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Higher Education</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Attended Carnegie Mellon University to pursue a Master of Science in Computational Mechanics.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li className="timeline-inverted">
                        <div className="timeline-badge success"><i className="fa fa-code"></i></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">America</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Switched career to software development. Dabbled with .NET, Java technology, and web
                              services.</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="timeline-badge info"><i className="fa fa-chalkboard-teacher"></i></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Academia</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Started a teaching career at local universities, taught numerous courses from linear algebra
                              to web design.</p>
                          </div>
                        </div>
                      </li>

                      <li className="timeline-inverted">
                        <div className="timeline-badge secondary"><i className="fa fa-directions"></i></div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4 className="timeline-title">Future?</h4>
                          </div>
                          <div className="timeline-body">
                            <p>Capture the perfect picture in Machu Picchu and Taj Mahal, and engage in business development
                              to advance career.</p>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>

                </div>
              </section>


              <section className="pt-page" data-id="contact">
                <div className="section-inner custom-page-content">
                  <div className="page-header color-1">
                    <h2>Contact</h2>
                  </div>
                  <div className="page-content">

                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <div className="block-title">
                          <h3>Get in <span>Touch</span></h3>
                        </div>

                        <div id="googlemap" className="map"></div>


                        <div className="contact-info-block">
                          <div className="ci-icon">
                            <i className="fa fa-map-marker"></i>
                          </div>
                          <div className="ci-text">
                            <h5>Fort Wayne, Indiana, USA</h5>
                          </div>
                        </div>
                        <div className="contact-info-block">
                          <div className="ci-icon">
                            <i className="fa fa-envelope"></i>
                          </div>
                          <div className="ci-text">
                            <h5>etuong@hotmail.com</h5>
                          </div>
                        </div>
                        <div className="contact-info-block">
                          <div className="ci-icon">
                            <i className="fa fa-phone"></i>
                          </div>
                          <div className="ci-text">
                            <h5>(412) 397-8149‬</h5>
                          </div>
                        </div>
                        <div className="contact-info-block">
                          <div className="ci-icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="ci-text">
                            <h5>Freelance Available</h5>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6">
                        <div className="block-title">
                          <h3>Contact <span>Form</span></h3>
                        </div>
                        <form id="contact-form" method="post" action="contact_form/contact_form.php">

                          <div className="messages"></div>

                          <div className="controls">
                            <div className="form-group form-group-with-icon">
                              <i className="fa fa-user"></i>
                              <label>Full Name</label>
                              <input id="form_name" type="text" name="name" className="form-control" placeholder="true"
                                required="required" data-error="Name is required." />
                              <div className="form-control-border"></div>
                              <div className="help-block with-errors"></div>
                            </div>

                            <div className="form-group form-group-with-icon">
                              <i className="fa fa-envelope"></i>
                              <label>Email Address</label>
                              <input id="form_email" type="email" name="email" className="form-control" placeholder="true"
                                required="required" data-error="Valid email is required." />
                              <div className="form-control-border"></div>
                              <div className="help-block with-errors"></div>
                            </div>

                            <div className="form-group form-group-with-icon">
                              <i className="fa fa-comment"></i>
                              <label>Message</label>
                              <textarea id="form_message" name="message" className="form-control" placeholder="true" rows="4"
                                required="required" data-error="Please, leave me a message."></textarea>
                              <div className="form-control-border"></div>
                              <div className="help-block with-errors"></div>
                            </div>

                            <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>

                            <input type="submit" className="button btn-send" value="Send message" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="copyrights">© 2022 All Rights Reserved. Ethan Thomas Uong</div>
      </footer>


      <script type="text/javascript" src="%PUBLIC_URL%/js/pages-switcher.js"></script>
      <script type="text/javascript" src="%PUBLIC_URL%/js/main.js"></script>
    </div>
  );
}

export default App;
