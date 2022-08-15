import Link from "next/link";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";


function BlogLargeLeftSidebar() {
  return (
    <>
	<Header3/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Blog Large</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Blog Large</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<div className="content-inner">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4 m-b30">
                        <aside className="side-bar sticky-top">
                            <div className="widget style-1">
                                <div className="search-bx style-1">
                                    <form role="search" method="post">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-search"></i></span>
											</div>
											<input name="text" className="form-control" placeholder="Search" type="text"/>
                                            <span className="input-group-btn">
												<button type="submit" className="btn btn-primary gradient"><i className="la la-long-arrow-right"></i></button>
                                            </span> 
										</div>
                                    </form>
                                </div>
                            </div>
							<div className="widget widget_archive style-1">
                                <h2 className="widget-title">Category</h2>
                                <ul>
                                    <li><a href="/blog-details-3">Design<span>05</span></a></li>
                                    <li><a href="/blog-details-3">Development<span>25</span></a></li>
                                    <li><a href="/blog-details-3">SEO<span>20</span></a></li>
                                    <li><a href="/blog-details-3">App Design<span>08</span></a></li>
                                    <li><a href="/blog-details-3">Branding<span>22</span></a></li>
                                </ul>
                            </div>
                            <div className="widget recent-posts-entry style-1">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="widget-post-bx">
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic1.jpg" alt=""/>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic2.jpg" alt=""/>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
											<div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic3.jpg" alt=""/>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
									<div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic3.jpg" alt=""/>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="widget widget_archive style-1">
                                <h2 className="widget-title">Archives</h2>
                                <ul>
                                    <li><a href="/blog-details-3">January<span>05</span></a></li>
                                    <li><a href="/blog-details-3">Fabruary<span>25</span></a></li>
                                    <li><a href="/blog-details-3">March<span>20</span></a></li>
                                    <li><a href="/blog-details-3">April<span>08</span></a></li>
                                    <li><a href="/blog-details-3">May<span>22</span></a></li>
                                    <li><a href="/blog-details-3">Jun<span>11</span></a></li>
                                    <li><a href="/blog-details-3">July<span>19</span></a></li>
                                </ul>
                            </div>
							<div className="widget widget_tag_cloud style-1">
                                <h2 className="widget-title">Tags</h2>
                                <div className="tagcloud"> 
									<a href="#">Business</a>
									<a href="#">News</a>
									<a href="#">Brand</a>
									<a href="#">Website</a>
									<a href="#">Internal</a>
									<a href="#">Strategy</a>
									<a href="#">Brand</a>
									<a href="#">Mission</a>
								</div>
                            </div>
                        </aside>
                    </div>
					<div className="col-xl-8 col-lg-8 m-b30">
						<div className="dlab-blog m-b50">
							<div className="dlab-media rounded-md shadow dlab-img-effect zoom">
								<Link href="/blog-details-3"><a><img src="images/blog/default/thum1.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info p-t30">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By <a href="#">Johne Doe</a></li>
										<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="#"></a></li>
												<li><a className="fa fa-twitter" href="#"></a></li>
												<li><a className="fa fa-linkedin" href="#"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-3"><a>Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et sapien risus.</a></Link>
								</h4>
								<p className="m-b20">Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. </p>
								<Link href="/blog-details-3"><a className="btn btn-corner gradient btn-primary">Read More</a></Link>
							</div>
						</div>
						<div className="dlab-blog m-b50">
							<div className="dlab-media rounded-md shadow dlab-img-effect zoom">
								<Link href="/blog-details-3"><a><img src="images/blog/default/thum2.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info p-t30">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By <a href="#">Johne Doe</a></li>
										<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="#"></a></li>
												<li><a className="fa fa-twitter" href="#"></a></li>
												<li><a className="fa fa-linkedin" href="#"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-3"><a>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor.</a></Link>
								</h4>
								<p className="m-b20">Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. </p>
								<Link href="/blog-details-3"><a className="btn btn-corner gradient btn-primary">Read More</a></Link>
							</div>
						</div>
						<div className="dlab-blog m-b50">
							<div className="dlab-media rounded-md shadow dlab-img-effect zoom">
								<Link href="/blog-details-3"><a><img src="images/blog/default/thum3.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info p-t30">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By <a href="#">Johne Doe</a></li>
										<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="#"></a></li>
												<li><a className="fa fa-twitter" href="#"></a></li>
												<li><a className="fa fa-linkedin" href="#"></a></li>
											</ul>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title">
									<Link href="/blog-details-3"><a>Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis lectus vel euismod.</a></Link>
								</h4>
								<p className="m-b20">Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. </p>
								<Link href="/blog-details-3"><a className="btn btn-corner gradient btn-primary">Read More</a></Link>
							</div>
						</div>
						<nav aria-label="Blog Pagination">
							<ul className="pagination text-center p-t20">
								<li className="page-item"><a className="page-link prev" href="#">Prev</a></li>
								<li className="page-item"><a className="page-link active" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item"><a className="page-link next" href="#">Next</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
			
	</div>
	<Footer3/>
    </>
  )
}

export default BlogLargeLeftSidebar;