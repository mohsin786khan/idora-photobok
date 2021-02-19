const Header = () => {
  return (
    <>
      <header
        id="header"
        className="full-header header-size-md"
        data-mobile-sticky="true"
      >
        <div id="header-wrap">
          <div className="container">
            <div className="header-row">
              <div id="logo">
                <a href="demo-forum.html" className="standard-logo">
                  <img src="Idora_Logo.png" alt="Idora Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-wrap-clone"></div>
      </header>
    </>
  );
};

export default Header;
