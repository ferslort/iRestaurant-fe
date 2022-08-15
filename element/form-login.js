import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { AUT_USER } from '../gql/auth';
import { setTokenUser } from '../redux/slices/auth';
import { useAuthUser } from '../hooks/useAuthUser';
import { useRouter } from 'next/router';

const FormLogin = ({ onSetToken }) => {
  const [doAuthUser, { loading, error }] = useMutation(AUT_USER);

  const { setTokenUser } = useAuthUser();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      try {
        const {
          data: { authUser }
        } = await doAuthUser({
          variables: {
            input: {
              email: values.email,
              password: values.password
            }
          }
        });
        await setTokenUser(authUser);
        onSetToken(authUser);
        router.push('dashboard');
      } catch (error) {
        console.log('🚀 ~ file: form-login.js ~ line 22 ~ onSubmit: ~ error', error);
      }
    }
  });

  return (
    <div className="content-inner">
      <div className="col-xl-12">
        <form>
          <div className="custom-form-login">
            <div>
              <div className="input-group">
                <input
                  name="email"
                  onChange={formik.handleChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div className="input-group">
                <input
                  name="password"
                  onChange={formik.handleChange}
                  required
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <div className="col-sm-12 m-2">
              <button
                type="button"
                typeof="submit"
                onClick={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
                className="btn btn-corner gradient btn-primary"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToDispatch = {
  onSetToken: setTokenUser
};

export default connect(null, mapStateToDispatch)(FormLogin);
