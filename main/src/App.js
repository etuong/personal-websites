import React from 'react'

function App() {
  return (
    <React.Fragment>

      <div class="preloader">
        <div class="preloader-animation">
          <div class="preloader-spinner">
          </div>
        </div>
      </div>


      <div id="page" class="page">

        <header id="site_header" class="header mobile-menu-hide">
          <div class="header-content">
            <div class="site-title-block mobile-hidden">
              <div class="site-title">Ethan <span>Uong</span></div>
            </div>


            <div class="site-nav">

              <ul id="nav" class="site-main-menu text-uppercase">
                <li>
                  <a class="pt-trigger" href="#home">Home</a>
                </li>
                <li>
                  <a class="pt-trigger" href="#resume">Resume</a>
                </li>
                <li>
                  <a class="pt-trigger" href="#services">Services</a>
                </li>
                <li>
                  <a class="pt-trigger" href="#portfolio">Portfolio</a>
                </li>

                <li>
                  <a class="pt-trigger" href="#travel">Travel</a>
                </li>
                <li>
                  <a class="pt-trigger" href="#timeline">Timeline</a>
                </li>
                <li>
                  <a class="pt-trigger" href="#contact">Contact</a>
                </li>
              </ul>

            </div>

          </div>
        </header>

        <div class="mobile-header mobile-visible">
          <div class="mobile-logo-container">
            <div class="mobile-site-title">Ethan Uong</div>
          </div>

          <a class="menu-toggle mobile-visible">
            <i class="fa fa-bars"></i>
          </a>
        </div>

        <div id="main" class="site-main">

          <div class="pt-wrapper">

            <div class="subpages">


              <section class="pt-page" data-id="home">
                <div class="section-inner start-page-content">
                  <div class="page-header">
                    <div class="row">
                      <div class="col-sm-4 col-md-4 col-lg-4">
                        <div class="photo">
                          <img src={require("./images/photo.jpg")} alt="" />
                        </div>
                      </div>

                      <div class="col-sm-8 col-md-8 col-lg-8">
                        <div class="title-block">
                          <h1>Ethan Uong</h1>
                          <div class="owl-carousel text-rotation">
                            <div class="item">
                              <div class="sp-subtitle">Software Engineer</div>
                            </div>
                            <div class="item">
                              <div class="sp-subtitle">Adjunct Professor</div>
                            </div>
                            <div class="item">
                              <div class="sp-subtitle">Photographer</div>
                            </div>
                          </div>
                        </div>

                        <div class="social-links">
                          <a href="https://github.com/etuong" target="_blank"><i class="fab fa-github"></i></a>
                          <a href="https://www.linkedin.com/in/ethan-uong-4066407a/" target="_blank"><i
                            class="fab fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="page-content">
                    <div class="row">

                      <div class="col-sm-6 col-md-6 col-lg-6" style="border-right:2px solid rgb(94, 196, 94);">
                        <div class="about-me">
                          <div class="block-title">
                            <h3>About <span>Me</span></h3>
                          </div>
                          <p>I love to solve problems! At a young age, I had a candid characteristic to break things apart
                            and put them back together. My curiosity in engineering and technology led me to pursue my
                            passion in computer science and software development. This website was created out of my vast
                            collection of photographs that I captured and my portfolio of various projects.</p>
                        </div>
                        <div class="download-resume">
                          <a href="Resume.pdf" target="_blank" class="btn btn-secondary">Download Resume</a>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <ul class="info-list">
                          <li><span class="title">Residence</span><span class="value">Fort Wayne, Indiana, USA</span></li>
                          <li><span class="title">E-mail</span><span class="value"><a
                            href="mailto:etuong@hotmail.com">etuong@hotmail.com</a></span></li>
                          <li><span class="title">Phone</span><span class="value">‪(412) 397-8149‬</span></li>
                          <li><span class="title">Freelance</span><span class="value available">Available</span></li>
                          <li><span class="title">Education</span><span class="value">‪B.S Structural Engineering‬</span>
                          </li>
                          <li><span class="title"></span><span class="value">‪M.S Computational Mechanics‬</span>
                          </li>
                          <li><span class="title"></span><span class="value">‪M.S Computer Science‬</span>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              <section class="pt-page" data-id="resume">
                <div class="section-inner custom-page-content">
                  <div class="page-header color-1">
                    <h2>Resume</h2>
                  </div>
                  <div class="page-content">

                    <div class="row">
                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="block">
                          <div class="block-title">
                            <h3>Education</h3>
                          </div>

                          <div class="timeline">

                            <div class="timeline-item">
                              <h4 class="item-title">The Johns Hopkins University</h4>
                              <span class="item-period">2022</span>
                              <span class="item-small">Master of Science in Computer Science</span>
                              <p class="item-description">Cloud Computing, Big Data, Computer Architecture, Machine
                                Learning, Data Science</p>
                            </div>

                            <div class="timeline-item">
                              <h4 class="item-title">Carnegie Mellon University</h4>
                              <span class="item-period">2014</span>
                              <span class="item-small">Master of Science in Computational Mechanics</span>
                              <p class="item-description">Computer Vision, Computer Aided Design, Parallel Computing,
                                Numerical Methods</p>
                            </div>

                            <div class="timeline-item">
                              <h4 class="item-title">University of California, San Diego</h4>
                              <span class="item-period">2011</span>
                              <span class="item-small">BS in Structural Engineering, Minor in
                                Mathematics</span>
                              <p class="item-description">Solid Mechanics, Structural Analysis, Finite Element, Steel
                                Design, Earthquake Engineering</p>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="block">
                          <div class="block-title">
                            <h3>Experience</h3>
                          </div>

                          <div class="timeline">

                            <div class="timeline-item">
                              <h4 class="item-title">Senior Software Engineer</h4>
                              <span class="item-period">June 2018 - Current</span>
                              <span class="item-small"></span>
                              <p class="item-description">DevOps, Enterprise Web Development, Extreme Programming, Java
                                Modular Design</p>
                            </div>

                            <div class="timeline-item">
                              <h4 class="item-title">Software Developer</h4>
                              <span class="item-period">June 2014 - April 2018</span>
                              <span class="item-small">Michael Baker International</span>
                              <p class="item-description">C++/C#, WPF, XML, XSLT, .NET</p>
                            </div>

                            <div class="timeline-item">
                              <h4 class="item-title">Adjunct Math Instructor</h4>
                              <span class="item-period">June 2015 - May 2019</span>
                              <span class="item-small">University of Pittsburgh</span>
                              <p class="item-description">Delivered lectures to undergraduate students on various subjects
                                including applied calculus, linear algebra, differential equations, and numerical
                                methods.</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="block">
                          <div class="block-title">
                            <h3>Design <span>Skills</span></h3>
                          </div>

                          <div class="skills-info">
                            <h4>Web Design (HTML/CSS/JS)</h4>
                            <div class="skill-container">
                              <div class="skill-percentage skill-1"></div>
                            </div>

                            <h4>Mobile Design (Android)</h4>
                            <div class="skill-container">
                              <div class="skill-percentage skill-3"></div>
                            </div>

                            <h4>Software Design (OOP)</h4>
                            <div class="skill-container">
                              <div class="skill-percentage skill-2"></div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="block">
                          <div class="block-title">
                            <h3>Coding <span>Skills</span></h3>
                          </div>

                          <div class="skills-info">
                            <h4>Java</h4>
                            <div class="skill-container">
                              <div class="skill-percentage skill-4"></div>
                            </div>

                            <h4>Python</h4>
                            <div class="skill-container">
                              <div class="skill-percentage skill-5"></div>
                            </div>

                            <h4>React + Angular + Vue</h4>
                            <div class="skill-container">
                              <div class="skill-percentage skill-8"></div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="block">
                          <div class="center download-resume">
                            <a href="Resume.pdf" target="_blank" class="btn btn-secondary">Download Resume</a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </section>

              <section class="pt-page" data-id="services">
                <div class="section-inner custom-page-content">
                  <div class="page-header color-1">
                    <h2>Services</h2>
                  </div>
                  <div class="page-content">

                    <div class="row">
                      <div class="col-sm-12 col-md-12">
                        <div class="block-title">
                          <h3>My <span>Services</span></h3>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-3">
                        <div class="service-block">
                          <div class="service-info">

                            <div class="service-image">
                              <img src={require("./images/service/web_design_icon.png")} alt="Web Design" class="mCS_img_loaded" />
                            </div>
                            <h4>Web Design</h4>
                            <p>I design responsive and modern websites. Check out my portfolio for more information!</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-3">
                        <div class="service-block">
                          <div class="service-info">
                            <div class="service-image">
                              <img src={require("./images/service/photography_icon.png")} alt="Photography" class="mCS_img_loaded" />
                            </div>
                            <h4>Photography</h4>
                            <p>I specialized in bright high contrast photography with proficient knowledge in Adobe suites
                              including Photoshop and Premiere</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-3">
                        <div class="service-block">
                          <div class="service-info">
                            <div class="service-image">
                              <img src={require("./images/service/creativity_icon.png")} alt="Coding" class="mCS_img_loaded" />
                            </div>
                            <h4>Coding</h4>
                            <p>I write maintainable, deliverable, and scalable software in C++, Java, and Python for
                              desktop, web, and mobile platform</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-3">
                        <div class="service-block">
                          <div class="service-info">
                            <div class="service-image">
                              <img src={require("./images/service/advetising_icon.png")} alt="Teaching" class="mCS_img_loaded" />
                            </div>
                            <h4>Teaching</h4>
                            <p>I have 5 years of teaching experiences ranging from high school calculus to college
                              differential equations</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12 col-md-12">
                        <div class="block-title">
                          <h3>Testimonials</h3>
                        </div>

                        <div class="testimonials owl-carousel block">

                          <div class="testimonial-item">

                            <div class="testimonial-credits">

                              <div class="testimonial-picture">
                                <img src={require("./images/testimonials/man.png")} alt="" />
                              </div>

                              <div class="testimonial-author-info">
                                <p class="testimonial-author">Neil Patel</p>
                                <p class="testimonial-firm">Software Engineer at Microsoft Corporation</p>
                              </div>
                            </div>

                            <div class="testimonial-content">
                              <div class="testimonial-text">
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



                          <div class="testimonial-item">

                            <div class="testimonial-credits">

                              <div class="testimonial-picture">
                                <img src={require("./images/testimonials/man.png")} alt="" />
                              </div>

                              <div class="testimonial-author-info">
                                <p class="testimonial-author">David E.</p>
                                <p class="testimonial-firm">Principal Engineering Fellow at an Aerospace company</p>
                              </div>
                            </div>

                            <div class="testimonial-content">
                              <div class="testimonial-text">
                                <p>"Ethan has the ability to dive deep into technology, derive creative solutions and then
                                  able to communicate those thoughts clearly to his team leads and peers. He organized
                                  several “tech time” events that allowed engineers to present technical and interesting
                                  topics to their peers. And Ethan always was a presenter at his own events, always excited
                                  to share relevant information! It is with good faith that I recommend Ethan to any
                                  company, I am
                                  sure he will prove to be an asset as he had in my team."</p>
                              </div>
                            </div>

                            <div class="testimonial-item">
                              <div class="testimonial-credits">
                                <div class="testimonial-picture">
                                  <img src={require("./images/testimonials/woman.png")} alt="" />
                                </div>

                                <div class="testimonial-author-info">
                                  <p class="testimonial-author">Alice Carr</p>
                                  <p class="testimonial-firm">UCSD Faculty Assistant</p>
                                </div>
                              </div>

                              <div class="testimonial-content">
                                <div class="testimonial-text">
                                  <p>"Ethan is an incredibly talented photographer. I had the pleasure of working with him on
                                    my wedding day and let me just say that it was so much fun and the pictures turned out
                                    amazing! It was such a joyful experience to have his service on my very special day. Would
                                    love to hire him again, except I'm only getting married once in this life!"</p>
                                </div>
                              </div>
                            </div>

                            <div class="testimonial-item">
                              <div class="testimonial-credits">
                                <div class="testimonial-picture">
                                  <img src={require("./images/testimonials/woman.png")} alt="" />
                                </div>
                                <div class="testimonial-author-info">
                                  <p class="testimonial-author">Caitlyn G.</p>
                                  <p class="testimonial-firm">Student at University of Pittsburgh, MATH 0125, Business
                                    Calculus</p>
                                </div>
                              </div>
                              <div class="testimonial-content">
                                <div class="testimonial-text">
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

              <section class="pt-page" data-id="portfolio">
                <div class="section-inner custom-page-content">
                  <div class="page-header color-1">
                    <h2>Portfolio</h2>
                  </div>
                  <div class="page-content">

                    <ul id="portfolio_filters" class="portfolio-filters">
                      <li class="active">
                        <a class="filter btn btn-sm btn-link active" data-group="all">All</a>
                      </li>
                      <li>
                        <a class="filter btn btn-sm btn-link" data-group="code">Code</a>
                      </li>
                      <li>
                        <a class="filter btn btn-sm btn-link" data-group="photo">Photography</a>
                      </li>
                      <li>
                        <a class="filter btn btn-sm btn-link" data-group="hdr">HDR</a>
                      </li>
                      <li>
                        <a class="filter btn btn-sm btn-link" data-group="shop">Photoshop</a>
                      </li>
                      <li>
                        <a class="filter btn btn-sm btn-link" data-group="solid">SolidWorks</a>
                      </li>
                    </ul>

                    <div id="portfolio_grid" class="portfolio-grid">
                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-8.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/askS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Ask Ethan!</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favColorL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favColorS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "solid"]'>
                        <a class="d-block h-100" data-fancybox="solid" href="images/portfolio/swPlaneL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/swPlaneS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "shop"]'>
                        <a class="d-block h-100" data-fancybox="shop" href="images/portfolio/pcUsaL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/pcUsaS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-5.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/wpfS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Windows Presentation Foundation && Model-View-ViewModel</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "hdr"]'>
                        <a class="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrWallL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/hdrWallS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "hdr"]'>
                        <a class="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrChicagoL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/hdrChicagoS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-3.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/visionS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Computer Vision</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "shop"]'>
                        <a class="d-block h-100" data-fancybox="shop" href="images/portfolio/pcWarsawL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/pcWarsawS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favCappadociaL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favCappadociaS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-7.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/algoS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Data Structures and Algorithms</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "hdr"]'>
                        <a class="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrDancingL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/hdrDancingS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "solid"]'>
                        <a class="d-block h-100" data-fancybox="solid" href="images/portfolio/swSkateL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/swSkateS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-4.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/finiteS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Finite Element</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "solid"]'>
                        <a class="d-block h-100" data-fancybox="solid" href="images/portfolio/swDriveL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/swDriveS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favElephantL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favElephantS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-1.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/lightS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Personal Website - Light Version</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "shop"]'>
                        <a class="d-block h-100" data-fancybox="shop" href="images/portfolio/pcSiemReapL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/pcSiemReapS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "shop"]'>
                        <a class="d-block h-100" data-fancybox="shop" href="images/portfolio/psFlameL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/psFlameS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-2.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/darkS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Personal Website - Dark Version</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favHeadL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favHeadS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favPenangL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favPenangS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favSantoriniL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favSantoriniS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "solid"]'>
                        <a class="d-block h-100" data-fancybox="solid" href="images/portfolio/swBulbL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/swBulbS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favTempleL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favTempleS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "code"]'>
                        <a class="ajax-page-load" href="pages/project/project-6.html">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/lorenzS.jpg")} alt="" />
                          <div>
                            <h5 class="name">Numerical Analysis</h5>
                          </div>
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "shop"]'>
                        <a class="d-block h-100" data-fancybox="shop" href="images/portfolio/psSmokeL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/psSmokeS.jpg")} alt="" />
                        </a>
                      </figure>

                      <figure class="item" data-groups='["all", "photo"]'>
                        <a class="d-block h-100" data-fancybox="photo" href="images/portfolio/favCopenhagenL.jpg">
                          <img class="img-fluid img-thumbnail" src={require("./images/portfolio/favCopenhagenS.jpg")} alt="" />
                        </a>
                      </figure>

                    </div>
                  </div>
                </div>
              </section>

              <section class="pt-page" data-id="travel">
                <div class="section-inner custom-page-content">
                  <div class="page-header color-1">
                    <h2>Travel</h2>
                  </div>
                  <div id="gmap"></div>
                </div>
              </section>


              <section class="pt-page" data-id="timeline">
                <div class="section-inner custom-page-content">
                  <div class="page-header color-1">
                    <h2>Timeline</h2>
                  </div>
                  <div class="page-content">

                    <ul class="timeline">
                      <li class="timeline-inverted">
                        <div class="timeline-badge primary"><i class="fa fa-globe-americas"></i></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">America</h4>
                          </div>
                          <div class="timeline-body">
                            <p>Grew up in central Los Angeles. First love was music, second love was sports.</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="timeline-badge danger"><i class="fa fa-university"></i></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">College</h4>
                          </div>
                          <div class="timeline-body">
                            <p>Attended University of California, San Diego and majored in Structural Engineering with a
                              minor in Mathematics.</p>
                          </div>
                        </div>
                      </li>

                      <li class="timeline-inverted">
                        <div class="timeline-badge light"><i class="fa fa-plane"></i></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">World Travel</h4>
                          </div>
                          <div class="timeline-body">
                            <p>Traveled the world including two study abroad programs in Berlin, Germany, and Rome, Italy.
                              Also did an internship on seismic retrofit at the University of Auckland, New Zealand.</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="timeline-badge warning"><i class="fa fa-graduation-cap"></i></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">Higher Education</h4>
                          </div>
                          <div class="timeline-body">
                            <p>Attended Carnegie Mellon University to pursue a Master of Science in Computational Mechanics.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li class="timeline-inverted">
                        <div class="timeline-badge success"><i class="fa fa-code"></i></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">America</h4>
                          </div>
                          <div class="timeline-body">
                            <p>Switched career to software development. Dabbled with .NET, Java technology, and web
                              services.</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="timeline-badge info"><i class="fa fa-chalkboard-teacher"></i></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">Academia</h4>
                          </div>
                          <div class="timeline-body">
                            <p>Started a teaching career at local universities, taught numerous courses from linear algebra
                              to web design.</p>
                          </div>
                        </div>
                      </li>

                      <li class="timeline-inverted">
                        <div class="timeline-badge secondary"><i class="fa fa-directions"></i></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">Future?</h4>
                          </div>
                          <div class="timeline-body">
                            <p>Capture the perfect picture in Machu Picchu and Taj Mahal, and engage in business development
                              to advance career.</p>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>

                </div>
              </section>


              <section class="pt-page" data-id="contact">
                <div class="section-inner custom-page-content">
                  <div class="page-header color-1">
                    <h2>Contact</h2>
                  </div>
                  <div class="page-content">

                    <div class="row">
                      <div class="col-sm-6 col-md-6">
                        <div class="block-title">
                          <h3>Get in <span>Touch</span></h3>
                        </div>

                        <div id="googlemap" class="map"></div>


                        <div class="contact-info-block">
                          <div class="ci-icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <div class="ci-text">
                            <h5>Fort Wayne, Indiana, USA</h5>
                          </div>
                        </div>
                        <div class="contact-info-block">
                          <div class="ci-icon">
                            <i class="fa fa-envelope"></i>
                          </div>
                          <div class="ci-text">
                            <h5>etuong@hotmail.com</h5>
                          </div>
                        </div>
                        <div class="contact-info-block">
                          <div class="ci-icon">
                            <i class="fa fa-phone"></i>
                          </div>
                          <div class="ci-text">
                            <h5>(412) 397-8149‬</h5>
                          </div>
                        </div>
                        <div class="contact-info-block">
                          <div class="ci-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="ci-text">
                            <h5>Freelance Available</h5>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-6">
                        <div class="block-title">
                          <h3>Contact <span>Form</span></h3>
                        </div>
                        <form id="contact-form" method="post" action="contact_form/contact_form.php">

                          <div class="messages"></div>

                          <div class="controls">
                            <div class="form-group form-group-with-icon">
                              <i class="fa fa-user"></i>
                              <label>Full Name</label>
                              <input id="form_name" type="text" name="name" class="form-control" placeholder
                                required="required" data-error="Name is required." />
                              <div class="form-control-border"></div>
                              <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group form-group-with-icon">
                              <i class="fa fa-envelope"></i>
                              <label>Email Address</label>
                              <input id="form_email" type="email" name="email" class="form-control" placeholder
                                required="required" data-error="Valid email is required." />
                              <div class="form-control-border"></div>
                              <div class="help-block with-errors"></div>
                            </div>

                            <div class="form-group form-group-with-icon">
                              <i class="fa fa-comment"></i>
                              <label>Message</label>
                              <textarea id="form_message" name="message" class="form-control" placeholder rows="4"
                                required="required" data-error="Please, leave me a message."></textarea>
                              <div class="form-control-border"></div>
                              <div class="help-block with-errors"></div>
                            </div>

                            <div class="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>

                            <input type="submit" class="button btn-send" value="Send message" />
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
        <div class="copyrights">© 2022 All Rights Reserved. Ethan Thomas Uong</div>
      </footer>
    </React.Fragment>
  );
}

export default App;
