const { useState } = React;
const { createRoot } = ReactDOM;

const TimelineComponent = (props) => {
    return (
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
    )
};


const container = document.getElementById('timeline_container');
const root = createRoot(container);
root.render(<TimelineComponent />);
