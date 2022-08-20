import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { setTokenUser } from '../redux/slices/auth';
import { useAuthUser } from '../hooks/useAuthUser';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import * as Sentry from '@sentry/browser';

interface IFormLogin {
  onSetToken: typeof setTokenUser;
}

const FormLogin = ({ onSetToken }: IFormLogin) => {
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
        const user = await signInWithEmailAndPassword(auth, values.email, values.password);
        const token = await user.user.getIdToken();
        await setTokenUser(token);
        onSetToken(token);
        router.push('dashboard');
      } catch (error) {
        Sentry.captureException(error);
      }
    }
  });

  return (
    <div className="content-inner custom-form-login">
      <div className="col-xl-12">
        <form>
          <div>
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
      <div className="mt-5">
        <p>
          ¿Aun no tienes cuenta? Crea una
          <Link href="/signup">
            <a> AQUÍ</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToDispatch = {
  onSetToken: setTokenUser
};

export default connect(null, mapStateToDispatch)(FormLogin);
