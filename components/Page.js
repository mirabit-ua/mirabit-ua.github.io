export default props => {
  const { children, bottomHeader, headerStyle } = props
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
      <header id="header" className="header-front-page" style={headerStyle}>
        <div className="navbar navbar-toggleable-md fixed-top top-header">
          <div className="container">
            <a href="http://mirabit.com.ua"><img src="/static/images/logo.png" alt="Mirabit" /></a>

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

        {bottomHeader}
      </header>

      {children}
    </div>
  )
}
