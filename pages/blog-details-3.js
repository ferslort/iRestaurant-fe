
import Header3 from './../layout/header-3';
import Footer3 from './../layout/footer-3';
import Link from 'next/link';
function BlogDetails3() {
  return (
    <>
	<Header3/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Blog Single</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Blog</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<section className="content-inner">
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
                                    <li><a href="/services-3">Design<span>05</span></a></li>
                                    <li><a href="/services-3">Development<span>25</span></a></li>
                                    <li><a href="/services-3">SEO<span>20</span></a></li>
                                    <li><a href="/services-3">App Design<span>08</span></a></li>
                                    <li><a href="/services-3">Branding<span>22</span></a></li>
                                </ul>
                            </div>
                            <div className="widget recent-posts-entry style-1">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="widget-post-bx">
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="/blog-details-3"><a><img src="images/blog/recent-blog/pic1.jpg" alt=""/></a></Link>
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
											<Link href="/blog-details-3"><a><img src="images/blog/recent-blog/pic2.jpg" alt=""/></a></Link>
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
											<Link href="/blog-details-3"><a><img src="images/blog/recent-blog/pic3.jpg" alt=""/></a></Link>
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
											<Link href="/blog-details-3"><a><img src="images/blog/recent-blog/pic3.jpg" alt=""/></a></Link>
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
                                    <li><a href="/services-3">January<span>05</span></a></li>
                                    <li><a href="/services-3">Fabruary<span>25</span></a></li>
                                    <li><a href="/services-3">March<span>20</span></a></li>
                                    <li><a href="/services-3">April<span>08</span></a></li>
                                    <li><a href="/services-3">May<span>22</span></a></li>
                                    <li><a href="/services-3">Jun<span>11</span></a></li>
                                    <li><a href="/services-3">July<span>19</span></a></li>
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
					<div className="col-xl-8 col-lg-8 m-b50">
						{/* <!-- blog start --> */}
                        <div className="dlab-blog blog-single style-3">
                            <div className="dlab-media rounded-md shadow">
								<img src="images/blog/default/thum1.jpg" alt=""/>
							</div>
                            <div className="dlab-meta m-t30">
								<ul>
									<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
									<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
								</ul>
							</div>
							<h4 className="dlab-title">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                            <div className="dlab-post-text">
                                <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
                                <p>Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est.</p>
                                <blockquote className="blockquote style-3">
									<h4 className="blockquote-content">Integer accumsan lacinia nulla ac maximus. In dapibus est vel risus tincidunt, nec dignissim eros suscipit. Vestibulum fermentum aliquet ligula vitae laoreet.</h4>
								</blockquote>
                                <p>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. </p>
                                <h4 className="m-b30">Donec sit amet semper massa ellentesque habitant morbi</h4>
                                <img className="alignleft rounded-md shadow" width="300" src="images/blog/blog-grid/pic1.jpg" alt=""/>
                                <p>Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis.</p>
								<p>Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent taciti sociosqu ad litora</p>
								<p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum.</p>
                            </div>
							<div className="dlab-meta meta-bottom border-top">
								<div className="post-tags">
									Tags:
									<a href="#">#Child </a> ,
									<a href="#">#Eduction </a> ,
									<a href="#">#Money </a> ,
									<a href="#">#Resturent </a>
								</div>
								<div className="dlab-social-icon primary-light">
									<ul>
										<li><a className="fa fa-facebook" href="#"></a></li>
										<li><a className="fa fa-instagram" href="#"></a></li>
										<li><a className="fa fa-twitter" href="#"></a></li>
									</ul>
								</div>
							</div>
                        </div>
						<div className="row extra-blog style-2">
							<div className="col-lg-12 m-b30">
								<h2 className="blog-title">Related Blogs</h2>
								<div className="dlab-separator style-1"></div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="dlab-blog m-b30">
									<div className="dlab-media rounded-md shadow">
										<img src="images/blog/blog-grid/pic1.jpg" alt=""/>
									</div>
									<div className="dlab-info p-t30">
										<h5 className="dlab-title">
											<a href="/blog-details-3">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor.</a>
										</h5>
										<div className="dlab-meta">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
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
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="dlab-blog m-b30">
									<div className="dlab-media rounded-md shadow">
										<Link href="/blog-details-3"><a><img src="images/blog/blog-grid/pic2.jpg" alt=""/></a></Link>
									</div>
									<div className="dlab-info p-t30">
										<h5 className="dlab-title">
											<Link href="blog-details-3"><a>Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec.</a></Link>
										</h5>
										<div className="dlab-meta">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
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
									</div>
								</div>
							</div>
						</div>
                        <div className="clear" id="comment-list">
                            <div className="comments-area style-3" id="comments">
                                <h2 className="comments-title">8 Comments</h2>
                                <div className="dlab-separator style-2 bg-primary"></div>
								<div className="clearfix m-t30">
                                    {/* <!-- comment list END --> */}
                                    <ol className="comment-list">
										<li className="comment">
											<div className="comment-body">
												<div className="comment-author vcard"> 
													<img  className="avatar photo" src="images/testimonials/pic1.jpg" alt=""/> 
													<cite className="fn">Celesto Anderson</cite>
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<div className="reply"> 
													<a href="#" className="comment-reply-link">
													<i className="fa fa-reply"></i>Reply</a> 
												</div>
											</div>
											<ol className="children">
												<li className="comment odd parent">
													<div className="comment-body">
														<div className="comment-author vcard"> 
															<img  className="avatar photo" src="images/testimonials/pic2.jpg" alt=""/> 
															<cite className="fn">Jake Johnson</cite>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
														<div className="reply"> 
															<a href="#" className="comment-reply-link">
															<i className="fa fa-reply"></i>Reply</a> 
														</div>
													</div>
													{/* <!-- list END --> */}
												</li>
											</ol>
											{/* <!-- list END --> */}
										</li>
										<li className="comment">
											<div className="comment-body">
												<div className="comment-author vcard"> 
													<img  className="avatar photo" src="images/testimonials/pic1.jpg" alt=""/> 
													<cite className="fn">John Doe</cite> 
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<div className="reply"> 
													<a href="#" className="comment-reply-link">
													<i className="fa fa-reply"></i>Reply</a> 
												</div>
											</div>
										</li>
									</ol>
                                    {/* <!-- comment list END --> */}
                                    {/* <!-- Form --> */}
                                    <div className="comment-respond style-3" id="respond">
                                        <h2 className="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{"display":"none"}} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h2>
										<div className="dlab-separator style-2 bg-primary"></div>
                                        <form className="comment-form m-t30" id="commentform" method="post">
                                            <p className="comment-form-author">
                                                <label htmlFor="author">Name <span className="required">*</span></label>
                                                <input type="text" name="Author"  placeholder="Author" id="author"/>
                                            </p>
                                            <p className="comment-form-email">
                                                <label htmlFor="email">Email <span className="required">*</span></label>
                                                <input type="text" placeholder="Email" name="email" id="email"/>
                                            </p>
                                            <p className="comment-form-url">
                                                <label htmlFor="url">Website</label>
                                                <input type="text" placeholder="Website"  name="url" id="url"/>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label htmlFor="comment">Comment</label>
                                                <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                            </p>
                                            <p className="form-submit">
												<input type="submit" value="Submit Now" className="submit btn btn-corner gradient btn-primary" id="submit" name="submit"/>
                                            </p>
                                        </form>
                                    </div>
                                    {/* <!-- Form --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- blog END --> */}
					</div>
				</div>
			</div>
		</section>
				
	</div>
	<Footer3/>
    </>
  )
}

export default BlogDetails3;