const { useState } = React;
const { createRoot } = ReactDOM;

const ResumeComponent = () => {
    return (
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
                                        <h4 className="item-title">Principal Software Engineer</h4>
                                        <span className="item-period">June 2018 - Current</span>
                                        <span className="item-small"></span>
                                        <p className="item-description">DevSecOps, Enterprise Web Development, Extreme Programming, Full Stack Engineering</p>
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
    )
};


const container = document.getElementById('resume_container');
const root = createRoot(container);
root.render(<ResumeComponent />);
