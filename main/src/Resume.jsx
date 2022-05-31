const { useState } = React;
const { createRoot } = ReactDOM;

const ResumeComponent = () => {
    const categories = [
        {
            name: "Education",
            items: [
                {
                    title: "The Johns Hopkins University",
                    period: "2022",
                    caption: "Master of Science in Computer Science",
                    description: "Cloud Computing, Big Data, Computer Architecture, Machine Learning, Data Science"
                },
                {
                    title: "Carnegie Mellon University",
                    period: "2014",
                    caption: "Master of Science in Computational Mechanics",
                    description: "Computer Vision, Computer Aided Design, Parallel Computing, Numerical Methods"
                },
                {
                    title: "University of California, San Diego",
                    period: "2011",
                    caption: "BS in Structural Engineering, Minor in Mathematics",
                    description: "Solid Mechanics, Structural Analysis, Finite Element, Steel Design, Earthquake Engineering"
                },
            ]
        },
        {
            name: "Experience",
            items: [
                {
                    title: "Principal Software Engineer",
                    period: "June 2018 - Current",
                    caption: "",
                    description: "DevSecOps, Enterprise Web Development, Extreme Programming, Full Stack Engineering"
                },
                {
                    title: "Software Developer",
                    period: "June 2014 - April 2018",
                    caption: "Michael Baker International",
                    description: "C++/C#, WPF, XML, XSLT, .NET"
                },
                {
                    title: "Adjunct Math Instructor",
                    period: "June 2015 - May 2019",
                    caption: "University of Pittsburgh",
                    description: "Delivered lectures to undergraduate students on various subjects including applied calculus, linear algebra, differential equations, and numerical methods."
                },
            ]
        }
    ]
    return (
        <section className="pt-page" data-id="resume">
            <div className="section-inner custom-page-content">
                <div className="page-header color-1">
                    <h2>Resume</h2>
                </div>
                <div className="page-content">

                    <div className="row">
                        {
                            categories.map((category, index) => {
                                return <div key={index} className="col-sm-6 col-md-6 col-lg-6">
                                    <div className="block">
                                        <div className="block-title">
                                            <h3>{category.name}</h3>
                                        </div>
                                        {
                                            category.items.map((item, index) => {
                                                return <div key={index} className="timeline">
                                                    <div className="timeline-item">
                                                        <h4 className="item-title">{item.title}</h4>
                                                        <span className="item-period">{item.period}</span>
                                                        <span className="item-small">{item.caption}</span>
                                                        <p className="item-description">{item.description}</p>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                </div>
                            })
                        }
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
