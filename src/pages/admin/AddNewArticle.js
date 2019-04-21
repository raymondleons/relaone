import React, { Component } from 'react'

export default class AddNewArticle extends Component {
  render() {
    return (
        <div className="content-page">
	
		{/* <!-- Start content --> */}
        <div className="content">
            
			<div className="container-fluid">

					
			<div className="row">
					<div class="col-xl-12">
							<div className="breadcrumb-holder">
                                    <h1 className="main-title float-left">WYSIWYG text editor</h1>
                                    <ol className="breadcrumb float-right">
										<li className="breadcrumb-item">Home</li>
										<li className="breadcrumb-item active">WYSIWYG text editor</li>
                                    </ol>
                                    <div className="clearfix"></div>
                            </div>
					</div>
			</div>
            {/* <!-- end row --> */}

			
			<div className="row">
			
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">						
						<div className="card mb-3">
							<div className="card-header">
								<h3><i className="fa fa-file-o"></i> Add New Article</h3>
								Add your article here to.
							</div>
								
							<div className="card-body">
																
										<textarea rows="3" className="form-control editor" name="content"></textarea>
										
							</div>														
						</div>					
                    </div>
					
			</div>




            </div>
			{/* <!-- END container-fluid --> */}

		</div>
		{/* <!-- END content --> */}

    </div>
    )
  }
}
