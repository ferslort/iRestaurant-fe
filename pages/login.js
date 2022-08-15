import FormLogin from '../element/form-login';
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
              <h1>Incia Sesión</h1>
            </div>
          </div>
        </div>
        <FormLogin />
      </div>
    </>
  );
};

export default ContactUs1;
