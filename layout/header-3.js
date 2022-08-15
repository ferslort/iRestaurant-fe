
import Link from 'next/link';
import {useEffect, useState } from 'react';
function Header3() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
	
	
  /* for class fixed  */
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
	
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent mo-left">
            {/* <!-- Main Header --> */}
            <div  className={`sticky-header main-bar-wraper navbar-expand-lg ${scroll ? "is-fixed" : ""}`}>
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/">
								<a>
									<img className="custom-logo-white" src="images/logo-white.png" alt="" />
									<img className="custom-logo" src="images/logo-3.png" alt="" />
								</a>
							</Link>
							
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="/contact-us-1"><a className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Get A Quote</a></Link>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo-3.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
								<li><Link href="/"><a>Home</a></Link></li>
                                <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        
                                       
                                        
										<li><Link href="/about-us-3"><a>About Us</a></Link></li>
                                        <li><Link href="/faq-3"><a>Faq</a></Link></li>
										<li><Link href="/pricing-table-3"><a>Pricing Table</a></Link></li>
										<li><Link href="/team-3"><a>Team</a></Link></li>
                                        <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                        <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                        <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                    </ul>
                                </li>
                                <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
										<li><Link href="/services-3"><a>Services</a></Link></li>
										<li><Link href="/services-details-3"><a>Services Details</a></Link></li>
                                    </ul>
                                </li>
                                <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/blog-large-left-sidebar"><a>Large Left Sidebar</a></Link></li>
                                        <li><Link href="/blog-details-3"><a>Blog Details</a></Link></li>
                                    </ul>
                                </li>
                                
                                <li><Link href="/contact-us-3"><a>Contact Us</a></Link></li>
                                
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    <Link href="/#"><a className="fa fa-facebook"></a></Link>
                                    <Link href="/#"><a className="fa fa-twitter"></a></Link>
                                    <Link href="/#"><a className="fa fa-linkedin"></a></Link>
                                    <Link href="/#"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header3;

  