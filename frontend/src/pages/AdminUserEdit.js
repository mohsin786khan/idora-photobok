import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {showUser, updateUser} from '../actions/adminActions';
import {Form, Button, Container, Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loader from '../components/Loader'
import { ADMIN_UPDATEUSER_RESET } from '../constants/adminConstants';
import ErrorComponent from '../components/ErrorComponent';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const AdminUserEdit = ({match, history}) => {

    const userEditId = localStorage.getItem('editId')

    const userId = userEditId

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');


    const dispatch = useDispatch();

    const adminUser = useSelector(state => state.adminUser)
    const {loading, error, user} = adminUser

    const updateAdminUser = useSelector(state => state.updateAdminUser)
    const {loading: updateLoading, error: errorUpdate, success: successUpdate} = updateAdminUser

    useEffect(() => {
      if(successUpdate) {
        dispatch({type: ADMIN_UPDATEUSER_RESET})
        history.push('/admindashboard_userManage')
      } else {
        if(user) {
          if(!user.name || user._id !== userId) {
              dispatch(showUser(userId))
          } else {
              setName(user.name)
              setEmail(user.email)
              setContact(user.contact)
              setPassword(user.contact)
              setStatus(user.status)
          }
        }
      }
    }, [user, dispatch, userId, successUpdate, history])

    const submitHandler = (e) => {
      e.preventDefault()

      const updatedUser = {
        _id: userId,
        name: name,
        email: email,
        contact: contact,
        status: status,
      }

      dispatch(updateUser(updatedUser))
    }

    return (
        <>
        {errorUpdate && <ErrorComponent message={errorUpdate.message} />}
        <section id="page-title">
            <div className="container clearfix">
                <h1>Edit User</h1>
            </div>
        </section>
        <section>
        {loading ? <Loader /> : (
        <Container className="my-5">
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" 
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicContact">
                      <Form.Label>Contact</Form.Label>
                      <Form.Control type="taxt" placeholder="Contact" 
                        value={contact} onChange={(e) => setContact(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCreated">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" 
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                      <FormControlLabel
                    control={
                    <Switch
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                    name="checked"
                    color="primary"
                    />
                    }
                    label="Status"
                    />
                    </Form.Group>
                    {updateLoading ? (
                      <Button variant="success" disabled>
                      <Spinner animation="border" variant="success" size="sm" />
                      </Button>
                    ) : (
                      <Button variant="success" type="submit">
                      Update
                      </Button>
                    )}
                    <Link to='/admindashboard_userManage'>
                    <Button variant="danger" type="submit" className="mx-2">
                      Cancel
                    </Button>
                    </Link>
                  </Form>
            </Container>
        )}
        </section>
    </>
    )
}

export default AdminUserEdit
