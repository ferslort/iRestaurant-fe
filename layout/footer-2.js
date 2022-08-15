import Link from 'next/link';

function Footer2() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-2" id="footer" style={{"backgroundImage":"url(images/background/bg4.png)"}}>
		<div className="container">
			<div className="dlab-subscribe style-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<h2 className="title">Subscribe To Our Newsletter For Latest Update</h2>
					</div>
					<div className="col-lg-5">
						<form className="dzSubscribe" action="script/mailchamp.php" method="post">
							<div className="dzSubscribeMsg"></div>
							<div className="form-group">
								<div className="input-group">
									<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address"/>
									<div className="input-group-addon">
										<button name="submit" value="Submit" type="submit" className="btn btn-primary gradient fa fa-paper-plane-o"></button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
							<div className="widget widget_getintuch">
								<ul>
									<li>
										<i className="fa fa-phone gradient"></i>
										<span>+91 123-456-7890<br/>+91 987-654-3210</span> 
									</li>
									<li>
										<i className="fa fa-envelope gradient"></i> 
										<span>info@example.com <br/>info@example.com</span>
									</li>
									<li>
										<i className="fa fa-map-marker gradient"></i>
										<span>Marmora Road Chi Minh City, Vietnam</span>
									</li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><Link href="#"><a>Home</a></Link></li>
								<li><Link href="#"><a>About Us</a></Link></li>
								<li><Link href="#"><a>Services</a></Link></li>
								<li><Link href="#"><a>Team</a></Link></li>
								<li><Link href="#"><a>Blog</a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><Link href="#"><a>Strategy & Research</a></Link></li>
								<li><Link href="#"><a>Web Development</a></Link></li>
								<li><Link href="#"><a>Web Solution</a></Link></li>
								<li><Link href="#"><a>Digital Marketing</a></Link></li>
								<li><Link href="#"><a>App Design </a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
							<ul>
								<li><Link href="#"><a>FAQ</a></Link></li>
								<li><Link href="#"><a>Portfolio</a></Link></li>
								<li><Link href="#"><a>Privacy Policy</a></Link></li>
								<li><Link href="#"><a>Terms & Conditions</a></Link></li>
								<li><Link href="#"><a>Support </a></Link></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 text-left"> 
						<span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
					</div>
					<div className="col-lg-6 col-md-5 text-right"> 
						<div className="dlab-social-icon">
							<ul>
								<li><Link href="#"><a className="fa fa-facebook" ></a></Link></li>
								<li><Link href="#"><a className="fa fa-instagram" ></a></Link></li>
								<li><Link href="#"><a className="fa fa-twitter" ></a></Link></li>
							</ul>
						</div>
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --></footer> */}
    </>
  )
}

export default Footer2;