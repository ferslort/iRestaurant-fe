import AllServices3 from '../element/all-services-3';
import Footer3 from '../layout/footer-3';
import Header3 from '../layout/header-3';
import Link from 'next/link';


function ServicesDetails3() {
  return (
    <>
    <Header3/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Services Details 3</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Services Details 3</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 m-b30">
						<aside className="side-bar sticky-top">
                            <div className="widget_nav_menu m-b40">
								<ul>
									<li><a href="/services-3">ALL SERVICES</a> </li>
									<li><a href="/services-3">Strategy & Research</a></li>
									<li className="active"><a href="/services-3">Web Development</a>  </li>
									<li><a href="/services-3">Web Solution</a>  </li>
									<li><a href="/services-3">Company Branding</a> </li>
									<li><a href="/services-3">SEO & Marketing</a> </li>
									<li><a href="/services-3">24X7 Support</a> </li>
								</ul>
							</div>
							<div className="widget widget_bunch_brochures">      		
								<div className="download-file">
									<h4 className="title">Get your brochures</h4>
									<ul>
										<li>
											<a href="services-details-3" >
												<div className="text">Company Brochures</div>
												<i className="fa fa-download"></i>
											</a>
										</li>
										<li>
											<a href="services-details-3" >
												<div className="text">Company Info</div>
												<i className="fa fa-download"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
                        </aside>
					</div>
					<div className="col-xl-9 col-lg-8">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/blog/default/thum1.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Web Development</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<h3>How You Start Web Development ?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
									<ul className="list-check style-1 primary">
										<li>Lorem Ipsum is simply dummy text of the printing.</li>
										<li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
										<li>when an unknown printer took a galley of type and scrambled.</li>
										<li>It has survived not only five centuries, but also the leap.</li>
										<li>Recently with desktop publishing software like Aldus PageMaker.</li>
										<li>Lorem Ipsum is simply dummy text of the printing industry.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Services --> */}
		<AllServices3/>
		
	</div>
     <Footer3/>
    </>
  )
}

export default ServicesDetails3;