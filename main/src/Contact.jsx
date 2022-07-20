const { useState, useEfffect } = React;
const { createRoot } = ReactDOM;

const ContactComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "js/contact-form.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  });

  return (
    <section className="pt-page" data-id="contact">
      <div className="section-inner custom-page-content">
        <div className="page-header color-1">
          <h2>Contact</h2>
        </div>
        <div className="page-content">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="block-title">
                <h3>
                  Get in <span>Touch</span>
                </h3>
              </div>

              <div id="googlemap" className="map"></div>

              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="ci-text">
                  <span>Fort Wayne, Indiana, USA</span>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="ci-text">
                  <span>
                    <a href="mailto:etuong@hotmail.com">etuong@hotmail.com</a>
                  </span>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="ci-text">
                  <span>(412) 397-8149</span>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-check"></i>
                </div>
                <div className="ci-text">
                  <span>Freelance Available</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="block-title">
                <h3>
                  Contact <span>Form</span>
                </h3>
              </div>
              <form
                id="contact-form"
                method="post"
                action="contact_form/contact_form.php"
              >
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group form-group-with-icon">
                    <i className="fa fa-user"></i>
                    <label>Full Name</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      data-error="Name is required."
                    />
                    <div className="form-control-border"></div>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group form-group-with-icon">
                    <i className="fa fa-envelope"></i>
                    <label>Email Address</label>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      required="required"
                      data-error="Valid email is required."
                    />
                    <div className="form-control-border"></div>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group form-group-with-icon">
                    <i className="fa fa-comment"></i>
                    <label>Message</label>
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      rows="4"
                      required="required"
                      data-error="Please, leave me a message."
                    ></textarea>
                    <div className="form-control-border"></div>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div
                    className="g-recaptcha"
                    data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                  ></div>

                  <input
                    type="submit"
                    className="button btn-send"
                    value="Send message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const container = document.getElementById("contact_container");
const root = createRoot(container);
root.render(<ContactComponent />);
