import Link from "next/link";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";

function Team3() {
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
              <h1>Our Team</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-2 m-b10">
                  <div className="dlab-media">
                      <img src="images/team/small/pic1.jpg" alt="" />
                    
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        John Doe
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-team style-2 m-b10">
                    <div className="dlab-media">
                        <img src="images/team/small/pic2.jpg" alt="" />
                    </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                            Emily Smith
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-2 m-b10">
                  <div className="dlab-media">
                      <img src="images/team/small/pic3.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Blake Run
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-team style-2 m-b10">
                  <div className="dlab-media">
                      <img src="images/team/small/pic4.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Jenna Smith
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <div className="dlab-team style-2 m-b10">
                  <div className="dlab-media">
                      <img src="images/team/small/pic5.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        John Kenny
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="dlab-team style-2 m-b10">
                  <div className="dlab-media">
                      <img src="images/team/small/pic6.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Silvia Perry
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.7s"
              >
                <div className="dlab-team style-2 m-b10">
                  <div className="dlab-media">
                      <img src="images/team/small/pic7.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Sakura Chen
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="dlab-team style-2 m-b10">
                  <div className="dlab-media">
                      <img src="images/team/small/pic8.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                       Neo Jackson
                      </h3>
                      <span className="dlab-position">Senior Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer3 />
    </>
  );
}

export default Team3;
