import TwitterFeedWidget from '../components/TwitterFeedWidget'
import Page from '../components/Page'

export default () => {
  return (
    <Page
      headerStyle={{
        backgroundImage: 'url(/static/images/background.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPositionY: '35%',
      }}
      bottomHeader={
        <div className="bottom-header front-page">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-sm-12">
                <h1>
                  Let's shit together!
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
      }
    >
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
                <TwitterFeedWidget height="600" href="https://twitter.com/mirabit-ua" />
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
    </Page>
  )
}
