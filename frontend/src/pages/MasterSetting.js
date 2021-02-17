

const MasterSetting = () => {
    return (
        <>
		<section id="page-title">

			<div class="container clearfix">
				<h1>Contact Form</h1>
				<span>Forms Widget</span>
			</div>

		</section>

		<section id="content">
			<div class="content-wrap">
				<div class="container clearfix">

					<div class="form-widget">

						<div class="form-result"></div>

						<div class="bottommargin-sm">
							<div class="form-row">
								<form class="row" action="include/form.php" method="post" enctype="multipart/form-data">
									<div class="form-process">
										<div class="css3-spinner">
											<div class="css3-spinner-scaler"></div>
										</div>
									</div>
									<div class="form-group col-md-6">
										<label>Name:</label>
										<input type="text" name="jobs-application-name" id="jobs-application-name" class="form-control required" value="" placeholder="Enter your Full Name" />
									</div>
									<div class="form-group col-md-6">
										<label>Email:</label>
										<input type="email" name="jobs-application-email" id="jobs-application-email" class="form-control required" value="" placeholder="Enter your Email" />
									</div>
									<div class="col-12 form-group">
										<div class="row">
											<div class="col-md-6 form-group">
												<label>Phone:</label>
												<input type="text" name="jobs-application-phone" id="jobs-application-phone" class="form-control required" value="" placeholder="Enter your Phone" />
											</div>
											<div class="col-md-6 form-group">
												<label>Location:</label>
												<input type="text" name="jobs-application-location" id="jobs-application-location" class="form-control" value="" placeholder="Enter your City as Location" />
											</div>
											<div class="w-100"></div>
											<div class="col-md-6 form-group">
												<label>Date Of Birth:</label>
												<input type="text" class="form-control dobpicker required" name="jobs-application-date-of-birth" id="jobs-application-date-of-birth" value="" placeholder="MM/DD/YYYY" data-date-end-date="-18y" />
											</div>
											<div class="col-md-6 form-group">
												<label>Gender:</label>
												<div class="btn-group btn-group-toggle d-flex" data-toggle="buttons">
													<label class="btn btn-outline-secondary ls0 nott">
														<input type="radio" name="jobs-application-gender" id="jobs-application-gender-male" autocomplete="off" value="Male" /> Male
													</label>
													<label class="btn btn-outline-secondary ls0 nott">
														<input type="radio" name="jobs-application-gender" id="jobs-application-gender-female" autocomplete="off" value="Female" /> Female
													</label>
												</div>
												<select class="form-control" name="jobs-application-gender" id="jobs-application-gender">
													<option value="">-- Select One --</option>
													<option value="Male">Male</option>
													<option value="Female">Female</option>
												</select>
											</div>
											<div class="w-100"></div>
											<div class="col-md-6 form-group">
												<label>Type:</label>
												<select class="form-control required" name="jobs-application-type" id="jobs-application-type">
													<option value="">-- Select One --</option>
													<option value="Part-Time">Part-Time</option>
													<option value="Full-Time">Full-Time</option>
													<option value="Internship">Internship</option>
													<option value="Freelance">Freelance</option>
												</select>
											</div>
											<div class="col-md-6 form-group">
												<label>Experience:</label>
												<select class="form-control required" name="jobs-application-experience" id="jobs-application-experience">
													<option value="">-- Select One --</option>
													<option value="Less than 1 Year">Less than 1 Year</option>
													<option value="1-4 Years">1-4 Years</option>
													<option value="4-7 Years">4-7 Years</option>
													<option value="7+ Years">7+ Years</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="w-100"></div>
												<div class="col-md-6 form-group">
													<label for="">Date Range</label>
													<div class="input-daterange component-datepicker input-group">
														<input type="text" value="" class="form-control text-left" placeholder="MM/DD/YYYY" />
														<div class="input-group-prepend"><div class="input-group-text">to</div></div>
														<input type="text" value="" class="form-control text-left" placeholder="MM/DD/YYYY" />
													</div>
												</div>
												<div class="col-md-6 form-group">
													<div class="white-section">
													<label class="inline-block">Experienced in:</label>
														<select class="selectpicker" data-width="70%" multiple data-actions-box="true">
														<option>Android Development</option>
														<option>iOS Development</option>
														<option>WEB Development</option>
														<option>JAVA</option>
														<option>ReactJS</option>
														<option>C/C++ Programming</option>
														</select>
													</div>
												</div>
										</div>
								<div class="row">
									<div class="col-md-6">
										<h4>Prefered Locations</h4>
										<form>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
											<label class="form-check-label" for="defaultCheck1">New Delhi</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
											<label class="form-check-label" for="defaultCheck2">Bangalore</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
											<label class="form-check-label" for="defaultCheck3">Mumbai</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="defaultCheck4" disabled />
											<label class="form-check-label" for="defaultCheck4">Kolkata (unavailable)</label>
										</div>
										</form>
									</div>
									<div class="col-md-6">
										<h4>Expected Stipend</h4>
										<form>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
											<label class="form-check-label" for="exampleRadios1">3LPA+</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
											<label class="form-check-label" for="exampleRadios2">4LPA+</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
											<label class="form-check-label" for="exampleRadios3">5LPA+</label>
										</div>
										<div class="form-check disabled">
											<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option4" disabled />
											<label class="form-check-label" for="exampleRadios4">More offer cooming</label>
										</div>
										</form>
									</div>

										<div class="col-md-6 form-group">
											<label>Upload CV:</label>
											<input type="file" id="jobs-application-resume" name="jobs-application-resume" class="file-loading required" data-show-preview="false" />
										</div>
									<div class="col-md-6 form-group">
									<div class="white-section">
										<div class="row">
											<div class="col-lg-12">
												<label class="inline-block">Highest Qualification:</label>
												<select class="selectpicker" data-width="60%">
													<option>12th Pass</option>
													<option>Graduate</option>
													<option>Master Degree</option>
													<option>Ph.D</option>
												</select>
											</div>
										</div>
									</div></div>
									</div>

										<div class="form-group">
											<label>Describe Yourself:</label>
											<textarea name="jobs-application-message" id="jobs-application-message" class="form-control required" cols="30" rows="10"></textarea>
										</div>

							<h4>Terms & Conditions to follow</h4>

							<div class="toggle toggle-bg">
								<div class="toggle-header">
									<div class="toggle-icon">
										<i class="toggle-closed icon-ok-circle"></i>
										<i class="toggle-open icon-remove-circle"></i>
									</div>
									<div class="toggle-title">First Condition</div>
								</div>
								<div class="toggle-content">This is the first condition of the company to be maintained by all the employees, interns.</div>
							</div>

							<div class="toggle toggle-bg">
								<div class="toggle-header">
									<div class="toggle-icon">
										<i class="toggle-closed icon-ok-circle"></i>
										<i class="toggle-open icon-remove-circle"></i>
									</div>
									<div class="toggle-title">Second Condition</div>
								</div>
								<div class="toggle-content">This is the first condition of the company to be maintained by all the employees, interns.</div>
							</div>

							<div class="toggle toggle-bg">
								<div class="toggle-header">
									<div class="toggle-icon">
										<i class="toggle-closed icon-ok-circle"></i>
										<i class="toggle-open icon-remove-circle"></i>
									</div>
									<div class="toggle-title">Third Condition</div>
								</div>
								<div class="toggle-content">This is the first condition of the company to be maintained by all the employees, interns.</div>
							</div>

									</div>
									<div class="col-12 d-none">
										<input type="text" id="jobs-application-botcheck" name="jobs-application-botcheck" value="" />
									</div>
									<div class="col-12">
										<button type="submit" name="jobs-application-submit" class="btn btn-secondary">Send Message</button>
									</div>

									<input type="hidden" name="prefix" value="jobs-application-" />
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

export default MasterSetting
