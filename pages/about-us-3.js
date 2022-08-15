import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../element/clients-3";
import TeamSlider3 from "../component/teamSlider-3";
import Testimonial3 from "../element/testimonial-3";
import AboutUs3 from "./../element/aboutUs-3";
import Footer3 from "./../layout/footer-3";
import Header3 from "./../layout/header-3";

function AboutUs_3() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About Us 3</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
        <AboutUs3 />

        {/* <!-- Video --> */}
        <section className="video-wraper-1">
          <div className="content-inner bg-gray">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="section-head style-3 mb-4">
                    <h2 className="title">Watch Us How Our Team Work Togather</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <p>
                    Praesent fermentum nisl at ipsum facilisis viverra. Ut
                    elementum accumsan finibus. Cras placerat lacinia mi, ac
                    dictum ante. Donec libero enim, tincidunt sit amet venenatis
                    id, maximus eu quam.{" "}
                  </p>
                  <ul className="list-check style-1 primary m-b30">
                    <li>Suspendisse ullamcorper mollis orci in facilisis.</li>
                    <li>Etiam orci magna, accumsan varius enim volutpat.</li>
                    <li>
                      Donec fringilla velit risus, in imperdiet turpis euismod
                      quis.
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="video-bx style-2">
                    <img src="images/video/pic2.jpg" alt="" />
                    <div className="video-btn"></div>
                    <a
                      href="#"
                      className="popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="FzcfZyEhOoI"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Services --> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-3 text-center mb-4">
              <h2 className="title">Our Speciallization</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="icon-bx-wraper style-5 box-hover text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-office"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Strategy & Research</h4>
                    <p className="m-b20">
                      Mauris ut felis malesuada eros varius tristique a at orci.
                      Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                      venenatis ipsum, et porttitor.
                    </p>
                    <Link href="/services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="icon-bx-wraper style-5 box-hover active text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-coding"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Web Development</h4>
                    <p className="m-b20">
                      Mauris ut felis malesuada eros varius tristique a at orci.
                      Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                      venenatis ipsum, et porttitor.
                    </p>
                    <Link href="/services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="icon-bx-wraper style-5 box-hover text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-laptop"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Web Solution</h4>
                    <p className="m-b20">
                      Mauris ut felis malesuada eros varius tristique a at orci.
                      Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                      venenatis ipsum, et porttitor.
                    </p>
                    <Link href="/services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Team --> */}
        <section className="content-inner-1 bg-gray">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h2 className="title">Our Expertise</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <TeamSlider3 />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Newsletter --> */}
        <section
          className="content-inner-3 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
          style={{
            backgroundImage:
              "url(images/background/bg12.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center subscribe-wraper-1">
              <div className="col-lg-7 col-md-6">
                <h2 className="text-white title m-b30">
                  Subscribe To Our Newsletter For Latest Update Of New Products
                </h2>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="dlab-subscribe style-3 max-w500">
                  <form
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group m-b30">
                      <div className="input-group mb-0">
                        <input
                          name="dzEmail"
                          required="required"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="btn btn-corner gradient shadow btn-primary"
                          >
                            Subscribe Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <Testimonial3 />

        {/* <!-- Blog --> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h2 className="title">Our Blog & News</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-blog blog-half m-b30">
                    <div className="dlab-media">
                        <img src="images/blog/default/thum1.jpg" alt="" />
                    </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="/blog-details-3">
                        <a>
                          Vestibulum massa arcu, consectetu pellentesque
                          scelerisque.
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="#"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
						<img src="images/blog/default/thum2.jpg" alt="" />
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="/blog-details-3">
                        <a>
                          Quisque sem tortor, convallis in arcu eu, accumsan
                          finibus massa.
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="#"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="dlab-blog blog-half m-b30">
					<div className="dlab-media">
						<img src="images/blog/default/thum3.jpg" alt="" />
					</div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="/blog-details-3">
                        <a>
                          Praesent ut lobortis purus hasellus libero orci,
                          accumsan
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="#"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
                  
                        <img src="images/blog/default/thum4.jpg" alt="" />
                      
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="/blog-details-3">
                        <a>
                          Fusce sem ligula, imperdiet sed nisi sit amet, euismod
                          posuere.
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="#"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="#"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Clients Logo --> */}
        <div className="p-tb50 bg-gray">
          <div className="container">
            <div className="clients-carousel owl-none owl-carousel">
              <ClientSlider />
            </div>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-media">
                  <img src="images/about/img8.png" className="move-4" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <form
                  className="dlab-form style-1 dzForm"
                  method="POST"
                  action="script/contact.php"
                >
                  <div className="section-head style-3">
                    <h2 className="title">Get In Touch With Us</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <div className="dzFormMsg"></div>
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <input
                    type="hidden"
                    className="form-control"
                    name="reCaptchaEnable"
                    value="0"
                  />
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="dzOther[phone]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[project_title]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Project Title"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <select
                          name="dzOther[choose_service]"
                          className="form-control"
                          required
                        >
                          <option>Choose Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">Web Design</option>
                          <option value="3">Strategy & Research</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          required
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        type="submit"
                        className="btn btn-corner gradient btn-block btn-primary"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer3 />
    </>
  );
}

export default AboutUs_3;
