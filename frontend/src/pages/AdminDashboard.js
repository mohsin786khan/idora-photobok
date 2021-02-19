
const AdminDashboard = () => {
    return (
        <>
            <div id="wrapper" className="clearfix">
                <header id="header" class="full-header">
			        <div id="header-wrap">
				        <div class="container">
					        <div class="header-row">
						        <div id="logo">
							        <a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png">
                                        <img 
                                        src="images/logo.png" 
                                        alt="Canvas Logo"
                                        />
                                    </a>
							        <a href="index.html" class="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo%402x.png" alt="Canvas Logo" /></a>
						        </div>
						<div id="primary-menu-trigger">
							<svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>
						<nav class="primary-menu">
							<ul class="menu-container">
								<li class="menu-item">
									<a class="menu-link" href="index.html"><div>Home</div></a>
								</li>
							</ul>
						</nav>

						<form class="top-search-form" action="http://themes.semicolonweb.com/html/canvas/search.html" method="get">
							<input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter.." autocomplete="off" />
						</form>

					    </div>
				        </div>
			            </div>
			        <div class="header-wrap-clone"></div>
		        </header>
				<section id="page-title">

					<div class="container clearfix">
						<h1>User Listing</h1>
					</div>

				</section>
				<section id="content">
				<div class="content-wrap">
				<div class="container clearfix">

					<div class="table-responsive">
						<table id="datatable1" class="table table-striped table-bordered" cellspacing="0" width="100%">
							<thead>
								<tr>
									<th>Name</th>
									<th>Email ID</th>
									<th>Created on</th>
									<th>Action</th>
									<th>Status</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Name</th>
									<th>Email ID</th>
									<th>Created on</th>
									<th>Action</th>
									<th>Status</th>
								</tr>
							</tfoot>
							<tbody>
							<tr>
									<td>Tiger Nixon</td>
									<td>System Architect</td>
									<td>2011/04/25</td>
									<td>
										<ul class="list-inline m-0">
                                                <li class="list-inline-item">
                                                    <button class="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add"><i class="icon-line-edit"></i></button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="icon-eye"></i></button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="icon-trash"></i></button>
                                                </li>
                                    </ul>
                                    </td>
									<td>
									<div class="switch">
										<input id="switch-toggle-1" class="switch-toggle switch-toggle-round" type="checkbox" />
										<label for="switch-toggle-1"></label>
									</div>
									</td>
								</tr>
							</tbody>
							</table>
						</div>
						</div>
					</div>
				</section>
            </div>
        </>
    )
}

export default AdminDashboard

