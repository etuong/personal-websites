const { useState } = React;
const { createRoot } = ReactDOM;

const TimelineComponent = () => {
  const timelines = [
    {
      title: "America",
      badge: "primary",
      icon: "globe-americas",
      text: "Grew up in central Los Angeles. First love was music, second love was sports.",
    },
    {
      title: "College",
      badge: "danger",
      icon: "university",
      text: "Attended University of California, San Diego and majored in Structural Engineering with a minor in Mathematics.",
    },
    {
      title: "World Travel",
      badge: "light",
      icon: "plane",
      text: "Traveled the world including two study abroad programs in Berlin, Germany, and Rome, Italy. Also did an internship on seismic retrofit at the University of Auckland, New Zealand.",
    },
    {
      title: "Higher Education",
      badge: "warning",
      icon: "graduation-cap",
      text: "Attended Carnegie Mellon University to pursue a Master of Science in Computational Mechanics.",
    },
    {
      title: "Career",
      badge: "success",
      icon: "code",
      text: "Switched career to software development. Dabbled with .NET, Java technology, and web services.",
    },
    {
      title: "Academia",
      badge: "info",
      icon: "chalkboard-teacher",
      text: "Started a teaching career at local universities, taught numerous courses from linear algebra to web design.",
    },
    {
      title: "Future?",
      badge: "secondary",
      icon: "directions",
      text: "Capture the perfect picture in Machu Picchu and Taj Mahal, and engage in business development to advance career.",
    },
  ];

  return (
    <section className="pt-page" data-id="timeline">
      <div className="section-inner custom-page-content">
        <div className="page-header color-1">
          <h2>Timeline</h2>
        </div>
        <div className="page-content">
          <ul className="timeline">
            {timelines.map((timeline, index) => {
              return (
                <li
                  key={index}
                  className={index % 2 == 0 ? "timeline-inverted" : ""}
                >
                  <div className={`timeline-badge ${timeline.badge}`}>
                    <i className={`fa fa-${timeline.icon}`}></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">{timeline.title}</h4>
                    </div>
                    <div className="timeline-body">
                      <p>{timeline.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

const container = document.getElementById("timeline_container");
const root = createRoot(container);
root.render(<TimelineComponent />);
