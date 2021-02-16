 import {useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';
//import { validateSchema } from '../validation/Admin';
import {useHistory } from 'react-router-dom';

const Login = () => {
     const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   // const[touchFields, setTouchedFields]=useState({})
     
  const [showpassword, setShowpassword] = useState(false);
  

  // const setFieldTouched = (e) => {
  //   setTouchedFields((touchFields) => ({
  //     ...touchFields,
  //      [Event.target.name]: true }))
  //  }


  // const createAdmin = async (e) => {
  //   e.preventDefault();
  //   let formData = {
  //     email: e.target[0].value,
  //     password:e.target[1].value
  //   }
  //   const isValid = await validateSchema.isValid(formData);
  //   console.log('hi', isValid);
  //   }

  const  handleClick = async (e) => {
            e.preventDefault();
      console.log('this.state', email, password);
      
     const result = await axios({
          method: 'post',
          url: 'http://localhost:8000/api/v1/admin/signin',
          data: { email, password }
     })
         .then(data => {
           console.log(data);
           setTimeout(() => {
             history.push('/admindashbord');
           },2000)
         })
         .catch(err => {
            console.log(err)
         })          
      
      if (result) {
          console.log(result);
      }
    };
      


    return (
    <>
      <div id="wrapper" className="clearfix">
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
                    <img
                      src="demos/forum/images/canvasforum.png"
                      alt="Canvas Logo"
                    />
                  </a>
                  <a href="demo-forum.html" className="retina-logo">
                    <img
                      src="demos/forum/images/canvasforum%402x.png"
                      alt="Canvas Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-wrap-clone"></div>
        </header>
        <section id="content">
          <div className="content-wrap py-0">
            <div className="section m-0 py-6">
              <div className="curve-bg"></div>
              <div className="container d-flex justify-content-center align-items-center">
                <div className="cs-signin-form">
                  <div className="cs-signin-form-inner">
                    <div className="text-center">
                      <h3 className="h1 font-weight-bolder mb-3">Sign In</h3>
                      <p
                        className="text-smaller text-muted mb-4"
                        style={{ lineHeight: "1.5" }}
                      >
                        Sign-in to Idora Photobook
                      </p>
                    </div>

                    <form
                      id="login-form"
                      name="login-form"
                      className="mb-0 row"
                      onSubmit={handleClick}
                      // onSubmit={createAdmin}              
                      >
                      <div className="col-12 form-group">
                        <label
                          className="nott ls0 font-weight-normal mb-1"
                          for="login-form-username"
                        >
                           email:
                        </label>
                        <input
                            type="email"
                            name="emai"
                            id="login-form-username"
                            className="form-control font-weight-semibold"
                            placeholder="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}

                          />
                          <p className="form-req">a valid email is required</p>
                        </div>
                        
                      <div className="clear"></div>
                      <div className="col-12 form-group">
                        <label
                          className="nott ls0 font-weight-normal mb-1"
                          for="login-form-password"
                        >
                          Password:
                        </label>
                        <div className="input-group">
                          <input
                                id="login-form-password"
                                type={!showpassword?"password":"text"}
                                className="form-control font-weight-semibold border-right-0"
                                placeholder="Password"
                                required=""
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          <div className="input-group-append">
                              <button 
                                onClick={()=>setShowpassword(!showpassword)}
                              className="btn"
                           
                              type="button"
                            >
                                <i className={!showpassword?"icon-line-eye text-smaller":"fa fa-eye-slash text-smaller"}
                                
                                ></i>
                            </button>
                            </div>
                          </div>
                          <p className="form-req">a valid password is required</p>
                      </div>

                      <div className="col-12 d-flex justify-content-between">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label nott ls0 mb-0 font-weight-semibold"
                            for="inlineCheckbox2"
                          >
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="text-smaller font-weight-medium">
                          <u>Forgot Password?</u>
                        </a>
                      </div>



                        










                      <div className="col-12 mt-4">
                        <button
                          className="button button-large btn-block bg-alt py-2 rounded-sm font-weight-medium nott ls0 m-0"
                          id="login-form-submit"
                          name="login-form-submit"
                          value="login"
                        type="submit">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="dark">
          <div id="copyrights">
            <div className="container">
              <div className="row col-mb-30">
                <div className="col-md-6 text-center text-md-left">
                  Copyrights &copy; 2021 All Rights Reserved by VAYUZ
                  Technologies
                  <br />
                  <div className="copyright-links">
                    <a href="#">Terms of Use</a> /{" "}
                    <a href="#">Privacy Policy</a>
                  </div>
                </div>

                <div className="col-md-6 text-center text-md-right">
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-facebook"
                    >
                      <i className="icon-facebook"></i>
                      <i className="icon-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-twitter"
                    >
                      <i className="icon-twitter"></i>
                      <i className="icon-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-gplus"
                    >
                      <i className="icon-gplus"></i>
                      <i className="icon-gplus"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-pinterest"
                    >
                      <i className="icon-pinterest"></i>
                      <i className="icon-pinterest"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-vimeo"
                    >
                      <i className="icon-vimeo"></i>
                      <i className="icon-vimeo"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-github"
                    >
                      <i className="icon-github"></i>
                      <i className="icon-github"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-yahoo"
                    >
                      <i className="icon-yahoo"></i>
                      <i className="icon-yahoo"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-small si-borderless si-linkedin"
                    >
                      <i className="icon-linkedin"></i>
                      <i className="icon-linkedin"></i>
                    </a>
                  </div>
                  <div className="clear"></div>
                  <i className="icon-envelope2"></i> hello@vayuz.com{" "}
                  <span className="middot">&middot;</span>{" "}
                  <i className="icon-headphones"></i> +1-11-5555-5555{" "}
                  <span className="middot">&middot;</span>{" "}
                  <i className="icon-skype2"></i> VayuzOnSkype
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div id="gotoTop" className="icon-angle-up"></div>
    </>
  );
};

export default Login;
