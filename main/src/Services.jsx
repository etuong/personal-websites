const { useState } = React;
const { createRoot } = ReactDOM;

const ServicesComponent = (props) => {
  return (
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
                    <img src="./images/service/web_design_icon.png" alt="Web Design" className="mCS_img_loaded" />
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
                    <img src="./images/service/photography_icon.png" alt="Photography" className="mCS_img_loaded" />
                  </div>
                  <h4>Photography</h4>
                  <p>I specialize in bright high contrast photography with proficient knowledge in Adobe suites
                    including Photoshop and Premiere</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="service-block">
                <div className="service-info">
                  <div className="service-image">
                    <img src="./images/service/creativity_icon.png" alt="Coding" className="mCS_img_loaded" />
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
                    <img src="./images/service/advetising_icon.png" alt="Teaching" className="mCS_img_loaded" />
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
                      <img src="./images/testimonials/man.png" alt="" />
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
                      <img src="./images/testimonials/man.png" alt="" />
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
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-credits">
                    <div className="testimonial-picture">
                      <img src="./images/testimonials/woman.png" alt="" />
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
                      <img src="./images/testimonials/woman.png" alt="" />
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

    </section>
  )
};


const container = document.getElementById('services_container');
const root = createRoot(container);
root.render(<ServicesComponent />);
