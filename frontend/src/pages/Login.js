import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/adminActions';
import Spinner from 'react-bootstrap/Spinner';
import ErrorComponent from '../components/ErrorComponent';


const Login = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showpassword, setShowpassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


  const validate = () => {
    let emailError = "";
    let passwordError = "";

    if(!email) {
      emailError = "a valid email is required"
    }

    if(!password) {
      passwordError = "a valid Password is required"
    }

    if(emailError && passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return false;
    }
    return true;
  }

  const dispatch = useDispatch();

  const adminLogin = useSelector(state => state.adminLogin)
  const {loading, error, adminInfo}  = adminLogin;

  useEffect(() => {
    if(adminInfo) {
      history.push('/admindashboard_userManage')
    }
  }, [history, adminInfo])

  const handleClick = (e) => {
    e.preventDefault();
    const isValid = validate();
    if(isValid) {
      setEmail("");
      setShowpassword(false);
    }
    dispatch(login(email, password))
  }


    return (
    <>
    {error && <ErrorComponent message={error.message} />}
      <div id="wrapper" className="clearfix">
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
                      >
                      <div className="col-12 form-group">
                        <label
                          className="nott ls0 font-weight-normal mb-1"
                          htmlFor="login-form-username"
                        >
                          Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="login-form-username"
                            className="form-control font-weight-semibold"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                          <p className="form-req">{emailError}</p>
                        </div>
                        
                      <div className="clear"></div>
                      <div className="col-12 form-group">
                        <label
                          className="nott ls0 font-weight-normal mb-1"
                          htmlFor="login-form-password"
                        >
                          Password:
                        </label>
                        <div className="input-group">
                          <input
                                id="login-form-password"
                                type={!showpassword?"password":"text"}
                                className="form-control font-weight-semibold border-right-0"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                          <div className="input-group-append">
                              <button 
                                onClick={()=>setShowpassword(!showpassword)}
                              className="btn"
                          
                              type="button"
                            >
                                <i className={!showpassword?"icon-line-eye text-smaller":"far fa-eye-slash text-smaller"}
                                ></i>
                            </button>
                            </div>
                          </div>
                          <p className="form-req">{passwordError}</p>
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
                            htmlFor="inlineCheckbox2"
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
                          disabled={loading}
                          type="submit">
                          {loading ? <Spinner animation="border" variant="light" /> : <p style={{margin: '0px'}}>Sign in</p>}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="gotoTop" className="icon-angle-up"></div>
    </>
  );
};

export default Login;
