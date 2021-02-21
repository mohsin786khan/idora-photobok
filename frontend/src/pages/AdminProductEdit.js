import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const AdminProductEdit = () => {
    return (
        <>
		<section id="page-title">

			<div class="container clearfix">
				<h1>Edit Product</h1>
			</div>

		</section>
		<section id="content">
			<div class="content-wrap">
				<div class="container clearfix">
					<div class="form-widget">
						<div class="bottommargin-sm">
							<div class="form-row">
								<form class="row">
									<div class="form-process">
										<div class="css3-spinner">
											<div class="css3-spinner-scaler"></div>
										</div>
									</div>
									<div class="form-group col-md-6">
										<label>Name:</label>
										<input type="text" name="jobs-application-name" id="jobs-application-name" class="form-control required" value="" placeholder="Enter  Name" />
									</div>
									<div class="form-group col-md-6">
										<label>Description:</label>
										<input type="text" name="jobs-application-description" id="jobs-application-description" class="form-control required" value="" placeholder="Enter Description" />
									</div>
									<div class="col-12 form-group">
										<div class="row">
											<div class="col-md-6 form-group">
												<label>Category:</label>
												<input type="text" name="jobs-application-category" id="jobs-application-category" class="form-control required" value="" placeholder="Enter Category" />
											</div>
											<div class="col-md-6 form-group">
												<label>Price:</label>
												<input type="text" class="form-control" name="jobs-application-price" id="jobs-application-price" value="" placeholder="Enter Price" />
											</div>
                                            <div class="col-md-6 form-group">
												<label>Quantity:</label>
												<input type="text" class="form-control" name="jobs-application-quantity" id="jobs-application-quantity" value="" placeholder="Enter Quantity" />
											</div>
                                            <div class="w-100"></div>
                                            <div class="col-md-10 form-group">
												<label>Images:</label>
												<input type="text" class="form-control" name="jobs-application-image" id="jobs-application-image" value="" placeholder="Add Image" />
											</div>
										</div>
								    </div>
                                    <div class="col-12">
										<button type="submit" name="jobs-application-submit" className="btn btn-success ">Update</button>
                                        <button type="submit" name="jobs-application-submit" className="btn btn-danger mx-2">Cancel</button>
									</div>
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

export default AdminProductEdit;
