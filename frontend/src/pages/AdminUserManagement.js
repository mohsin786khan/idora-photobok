import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {showUserList, deleteUser} from '../actions/adminActions';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader'
import ErrorComponent from '../components/ErrorComponent'

const AdminDashboard = ({history}) => {
	const dispatch = useDispatch()

	const adminUserList = useSelector(state => state.adminUserList)
	const {loading, error, userList} = adminUserList;

	const adminLogin = useSelector(state => state.adminLogin)
	const { adminInfo}  = adminLogin;

	const adminUserDelete = useSelector(state => state.adminUserDelete)
	const {success: successDelete} = adminUserDelete;


	useEffect(() => {
		if(adminInfo) {
			dispatch(showUserList())
		} else {
			history.push('/')
		}
	}, [history, adminInfo, dispatch, successDelete])

	const deleteHandler = (id) => {
		if(window.confirm("Are you sure?")) {
			dispatch(deleteUser(id))
			dispatch(showUserList())
		}
	}

	const handleClick = (id) => {
		localStorage.setItem('editId', id);
	}

    return (
        <>
            <div id="wrapper" className="clearfix">
				<section id="page-title">
					<div className="container clearfix">
						<h1>User Listing</h1>
					</div>
				</section>
				{loading ? <Loader /> : error ? <ErrorComponent message={error.message} /> : (
				<section id="content">
				<div className="content-wrap">
				<div className="container clearfix">
				<Link to={`/admindashboard_adduser`}>
					<Button variant="outline-dark" size="lg" style={{marginBottom: '30px'}}><i className="fas fa-plus"></i> ADD USER</Button>
				</Link>
					<div className="table-responsive">
						<table id="datatable1" className="table table-striped table-bordered" cellSpacing="0" width="100%">
							<thead>
								<tr>
									<th>S No.</th>
									<th>Name</th>
									<th>Email ID</th>
									<th>Contact</th>
									<th>Created on</th>
									<th>Action</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
							{userList && userList.map((user, index) => (
								<tr key={user._id}>
									<td>{index+1}.</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.contact}</td>
									<td>{user.createdAt.substring(0, 10)}</td>
									<td>
										<ul className="list-inline m-0">
                                                {/* <li className="list-inline-item">
                                                    <button className="btn btn-primary btn-sm rounded-0" 
													type="button" 
													data-toggle="tooltip" 
													data-placement="top" 
													title="Add"><i className="icon-line-edit"></i></button>
                                                </li> */}
                                                <Link to={'/admindashboard_edituser'} className="list-inline-item"  onClick={() => handleClick(user._id)}>
                                                    <button className="btn btn-success btn-sm rounded-0" 
													type="button" 
													data-toggle="tooltip" 
													data-placement="top" 
													title="Edit"><i className="icon-line-edit"></i></button>
                                                </Link>
                                                <li className="list-inline-item">
                                                    <button className="btn btn-danger btn-sm rounded-0" 
													type="button" 
													data-toggle="tooltip" 
													data-placement="top" 
													title="Delete" 
													onClick={() => deleteHandler(user._id)}><i className="icon-trash"></i></button>
                                                </li>
                                    </ul>
                                    </td>
									<td>
									<div className="switch">
										<input 
										id={index} 
										className="switch-toggle switch-toggle-round" 
										type="checkbox" 
										defaultChecked={user.status}
										/>
										<label htmlFor={index}></label>
									</div>
									</td>
								</tr>
							))}
							</tbody>
							</table>
						</div>
						</div>
					</div>
					</section>
				)}
            </div>
        </>
    )
}

export default AdminDashboard

