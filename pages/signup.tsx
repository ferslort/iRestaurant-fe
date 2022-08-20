import FormLogin from '../element/form-login';
import Quote3 from '../element/quote-3';
import SignupCustom from '../element/signup-custom';
import Header3 from '../layout/header-3';

const ContactUs1 = () => {
  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: 'url(images/banner/bnr2.png), var(--gradient-sec)',
            backgroundSize: 'cover, 100%',
            height: '380px'
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Registrate</h1>
            </div>
          </div>
        </div>
        <SignupCustom />
      </div>
    </>
  );
};

export default ContactUs1;
