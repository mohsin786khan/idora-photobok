import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createProduct} from '../actions/adminActions'
import {ADMIN_ADDPRODUCT_RESET} from '../constants/adminConstants'
import {Link} from 'react-router-dom';
import {Button, Spinner} from 'react-bootstrap';
import ErrorComponent from '../components/ErrorComponent'

const AdminProductAdd = ({history}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    // const [image, setImage] = useState('');

    const dispatch = useDispatch();

    const productCreate = useSelector(state => state.productCreate)
    const {loading, error, success: createSuccess} = productCreate

    const adminLogin = useSelector(state => state.adminLogin)
	const { adminInfo}  = adminLogin;

    useEffect(() => {
        dispatch({type: ADMIN_ADDPRODUCT_RESET})
        if(!adminInfo) {
            history.push('/')
        }
        if(createSuccess) {
            history.push('/admindashboard_productManage')
        }
    }, [dispatch, adminInfo, createSuccess, history])

    const submitForm = (e) => {
        e.preventDefault()

        const newProduct = {
            name: name,
            description: description,
            category: category,
            price: price,
            quantity: quantity,
        }

        dispatch(createProduct(newProduct))
    }

    return (
        <>
        {error && <ErrorComponent message={error.message} />}
		<section id="page-title">
			<div class="container clearfix">
				<h1>Add Product</h1>
			</div>
		</section>
		<section id="content">
        <Link to='/admindashboard_productManage'>
                <Button style={{margin: '30px 0px 0px 50px'}} variant="light">Go Back</Button>
        </Link>
			<div class="content-wrap">
				<div class="container clearfix">
					<div class="form-widget">
						<div class="bottommargin-sm">
							<div class="form-row">
								<form class="row" onSubmit={submitForm}>
									<div class="form-process">
										<div class="css3-spinner">
											<div class="css3-spinner-scaler"></div>
										</div>
									</div>
									<div class="form-group col-md-6">
										<label>Name:</label>
										<input 
                                        type="text" 
                                        name="jobs-application-name" 
                                        id="jobs-application-name" 
                                        class="form-control required" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Name" />
									</div>
									<div class="form-group col-md-6">
										<label>Description:</label>
										<input 
                                        type="text" 
                                        name="jobs-application-description" 
                                        id="jobs-application-description" 
                                        class="form-control required" 
                                        value={description} 
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Enter Description" />
									</div>
									<div class="col-12 form-group">
										<div class="row">
											<div class="col-md-6 form-group">
												<label>Category:</label>
												<input 
                                                type="text" 
                                                name="jobs-application-category" 
                                                id="jobs-application-category" 
                                                class="form-control required" 
                                                value={category} 
                                                onChange={(e) => setCategory(e.target.value)}
                                                placeholder="Enter Category" />
											</div>
											<div class="col-md-6 form-group">
												<label>Price:</label>
												<input 
                                                type="text" 
                                                class="form-control" 
                                                name="jobs-application-price" 
                                                id="jobs-application-price" 
                                                value={price} 
                                                onChange={(e) => setPrice(e.target.value)}
                                                placeholder="Enter Price" />
											</div>
                                            <div class="col-md-6 form-group">
												<label>Quantity:</label>
												<input 
                                                type="text" 
                                                class="form-control" 
                                                name="jobs-application-quantity" 
                                                id="jobs-application-quantity" 
                                                value={quantity} 
                                                onChange={(e) => setQuantity(e.target.value)}
                                                placeholder="Enter Quantity" />
											</div>
                                            <div class="w-100"></div>
                                            {/* <div class="col-md-10 form-group">
												<label>Images:</label>
												<input type="text" class="form-control" name="jobs-application-image" id="jobs-application-image" value="" placeholder="Add Image" />
											</div> */}
										</div>
								    </div>
                                    {loading ? (
                                    <Button variant="dark" disabled>
                                        <Spinner animation="border" variant="light" size="sm" style={{marginRight: '5px'}} />
                                        Creating...
                                    </Button>
                                    ) : (
                                    <div class="col-12">
										<Button variant="secondary" type="submit" onClick={submitForm}>
                                            Create
                                        </Button>
									</div>
                                    )}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default AdminProductAdd;
