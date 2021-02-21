import {Form, Button, Container, Spinner} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {createUser} from '../actions/adminActions'
import ErrorComponent from '../components/ErrorComponent';
import {Link} from 'react-router-dom';
import { ADMIN_CREATEUSER_RESET } from '../constants/adminConstants';

const AdminUserAdd = ({history}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const createNewUser = useSelector(state => state.createNewUser)
  const {loading, error, success: createSuccess} = createNewUser

  const adminLogin = useSelector(state => state.adminLogin)
	const { adminInfo}  = adminLogin;

  useEffect(() => {
    dispatch({type: ADMIN_CREATEUSER_RESET})
    if(!adminInfo) {
      history.push('/')
    }
    if(createSuccess) {
      history.push('/admindashboard_userManage')
    }
  }, [dispatch, history, adminInfo, createSuccess])

  const submitForm = (e) => {
    e.preventDefault()

    const newUser = {
      name: name,
      email: email,
      contact: contact,
      password: password
    }

    dispatch(createUser(newUser));
  }

  return (
    <>
      {error && <ErrorComponent message={error.message} />}
        <section id="page-title">
            <div className="container clearfix">
                <h1>Add User</h1>
            </div>
        </section>
        <section>
        <Link to='/admindashboard_userManage'>
          <Button style={{margin: '30px 0px 0px 50px'}} variant="light">Go Back</Button>
        </Link>
        {loading && (
								<div class="form-process">
									<div class="css3-spinner">
										<div class="css3-spinner-scaler"></div>
									</div>
								</div>
        )}
        <Container className="my-5 px-10">
                  <Form onSubmit={submitForm}>
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" 
                      value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email"
                      value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicContact">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="text" placeholder="Password"
                      value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicContact">
                      <Form.Label>Contact</Form.Label>
                      <Form.Control type="text" placeholder="Contact"
                      value={contact} onChange={(e) => setContact(e.target.value)}  />
                    </Form.Group>
                    {loading ? (
                      <Button variant="dark" disabled>
                        <Spinner animation="border" variant="light" size="sm" style={{marginRight: '5px'}} />
                        Creating...
                      </Button>
                    ) : (
                      <Button variant="secondary" type="submit">
                        Create
                      </Button>
                    )}
                  </Form>
            </Container>
        </section>
    </>
  );
};

export default AdminUserAdd;
