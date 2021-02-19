import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {productList} from '../actions/adminActions';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';
import ErrorComponent from '../components/ErrorComponent';

const AdminProductManagement = ({history}) => {
	const dispatch = useDispatch()

    const productlist = useSelector(state => state.productList)
    const {loading, error, listproducts} = productlist

	const adminLogin = useSelector(state => state.adminLogin)
	const { adminInfo}  = adminLogin;


	useEffect(() => {
		if(adminInfo) {
			dispatch(productList())
		} else {
			history.push('/')
		}
	}, [history, adminInfo, dispatch])

	// const deleteHandler = (id) => {
	// 	if(window.confirm("Are you sure?")) {
	// 		dispatch(deleteUser(id))
	// 	}
	// }

	const handleClick = (id) => {
		console.log(id);
		localStorage.setItem('editId', id);
	}

    return (
        <>
            <div id="wrapper" className="clearfix">
				<section id="page-title">
					<div className="container clearfix">
						<h1>Product Listing</h1>
					</div>
				</section>
				{loading ? <Loader /> : error ? <ErrorComponent message={error.message} /> : (
				<section id="content">
				<div className="content-wrap">
				<div className="container clearfix">
				<Link to={`/admindashboard_addproduct`}>
					<Button variant="outline-dark" size="lg" style={{marginBottom: '30px'}}><i className="fas fa-plus-circle"></i> ADD PRODUCT </Button>
				</Link>
					<div className="table-responsive">
						<table id="datatable1" className="table table-striped table-bordered" cellSpacing="0" width="100%">
							<thead>
								<tr>
									<th>S No.</th>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
									<th>Created on</th>
									<th>Action</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
							{listproducts && listproducts.map((product, index) => (
								<tr key={product._id}>
									<td>{index+1}.</td>
									<td>{product.name}</td>
									<td>{product.description}</td>
									<td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.quantity}</td>
									<td>{product.createdAt.substring(0, 10)}</td>
									<td>
										<ul className="list-inline m-0">
                                                <li className="list-inline-item">
                                                    <button className="btn btn-primary btn-sm rounded-0" 
													type="button" 
													data-toggle="tooltip" 
													data-placement="top" 
													title="View"><i className="icon-eye"></i></button>
                                                </li>
                                                <Link to={'/admindashboard_edituser'} className="list-inline-item"  onClick={() => handleClick(product._id)}>
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
													><i className="icon-trash"></i></button>
                                                </li>
                                    </ul>
                                    </td>
									<td>
									<div className="switch">
										<input 
										id={index} 
										className="switch-toggle switch-toggle-round" 
										type="checkbox" 
										defaultChecked={product.status}
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

export default AdminProductManagement
