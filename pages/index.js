export default () => {
  return (
    <div>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Poppins:300,400,500,600,700"
        type="text/css"
        media="all"
      />
      <link rel="stylesheet" href="/static/css/main.css" type="text/css" media="all" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        type="text/css"
        media="all"
      />
      <header
        id="header"
        className="header-front-page"
        style={{
          backgroundImage: 'url(/static/images/background.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPositionY: '35%',
        }}
      >
        <div className="navbar navbar-toggleable-md fixed-top top-header">
          <div className="container">
            <a href="http://mirabit.com.ua"><img src="/static/images/logo.png" /></a>

            <nav className="navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                  <a href="#blog" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#contact-us" className="nav-link">Contact Us</a>
                </li>

              </ul>
            </nav>

          </div>
        </div>

        <div className="bottom-header front-page">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-sm-12">
                <h1>
                  Let's work together!
                </h1>
              </div>

              <div className="col-sm-12">
                {/*<div className="section-description"></div>*/}
                <a href="#services" title="Learn more" className="header-button-one">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="front-page-section">
        <div className="section-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12">
                <h3>About</h3>
              </div>
              <div className="col-sm-10 col-sm-offset-1">
                <div className="section-description">
                  Mirabit is a team of professionals, which united to provide services in Software Development, Quality Assurance, and Data Analysis / Machine Learning fields.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="front-page-section">
        <div className="section-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12">
                <h3>Services</h3>
              </div>
              <div className="col-sm-10 col-sm-offset-1">
                <div className="section-description">
                  In order to help you grow your business, our experts can advise you in in the following areas:
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="container">
            <div className="row inline-columns">
              <div className="col-sm-4">
                <div className="service" style={{ color: '#f18b6d' }}>
                  <div className="service-icon"><i className="fa fa-diamond" /></div>
                  <div className="service-title">
                    <h5>Quality Assurance</h5>
                  </div>
                  <div className="service-entry">
                    Developing software is only one step towards delivering a product to the end-users. We can ensure the quality of your product using various techniques.
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="service" style={{ color: '#f1d204' }}>
                  <div className="service-icon"><i className="fa fa-code" /></div>
                  <div className="service-title">
                    <h5>Software Development</h5>
                  </div>
                  <div className="service-entry">
                    You have an idea in mind, right? Computers can do amazing job and we can help you to build complex systems, web services, or desktop applications.
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="service" style={{ color: '#6a4d8a' }}>
                  <div className="service-icon"><i className="fa fa-search" /></div>
                  <div className="service-title">
                    <h5>Data Analysis</h5>
                  </div>
                  <div className="service-entry">
                    The goal of data analysis is to discover useful information to optimize resources, increase performance, etc. We can work on getting the useful information from your data!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="front-page-section">
        <div className="section-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3>Blog</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <a
                  className="twitter-timeline"
                  data-height="600"
                  data-dnt="true"
                  href="https://twitter.com/Freol"
                >
                  Tweets by Freol
                </a>
                {' '}
                <script async src="//platform.twitter.com/widgets.js" charset="utf-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us" className="front-page-section">
        <div className="section-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="contact-us-box">
                      <div className="box-left" data-customizer="box-left-address-title">
                        Address{' '}
                      </div>

                      <div className="box-right">
                        <span className="box-right-row" data-customizer="contact-us-address-1">
                          Kharkiv, Ukraine
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-5">
                    <div className="contact-us-box">
                      <div className="box-left" data-customizer="box-left-customer-support-title">
                        Customer Support{' '}
                      </div>

                      <div className="box-right">
                        <span className="box-right-row">
                          E-mail:{' '}
                          <a href="mailto:info@mirabit.com.ua">info@mirabit.com.ua </a>
                        </span>

                        <span className="box-right-row" data-customizer="contact-us-phone">
                          Phone: +38 (000) 555-5555
                        </span>

                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="contact-us-social">
                      <a href="https://twitter.com/mirabit-ua" title="Twitter" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>

                      <a
                        href="https://www.facebook.com/mirabit-ua"
                        title="Facebook"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>

                      <a
                        href="https://www.linkedin.com/company-beta/21572688"
                        title="LinkedIn"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" />
                      </a>

                      <a href="https://github.com/mirabit-ua" title="GitHub" target="_blank">
                        <i className="fa fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
