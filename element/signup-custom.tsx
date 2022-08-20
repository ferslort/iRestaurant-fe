import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';
import { REGISTER_USER } from '../gql/auth';

function SignupCustom() {
  const [doSaveUser, { loading, error }] = useMutation(REGISTER_USER);
  const [message, setMessage] = useState({
    type: '',
    text: ''
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      address: '',
      city: '',
      country: '',
      gender: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre es requerido'),
      lastName: Yup.string().required('Apellido es requerido'),
      email: Yup.string().required('Email es requerido'),
      password: Yup.string().required('Contraseña es requerida'),
      confirmPassword: Yup.string()
        .required('Confirmar contraseña es requerida')
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
      phoneNumber: Yup.string().required('Teléfono es requerido'),
      address: Yup.string().required('Dirección es requerida'),
      city: Yup.string().required('Ciudad es requerida'),
      country: Yup.string().required('País es requerido'),
      gender: Yup.string().required('Género es requerido')
    }),
    onSubmit: async (values) => {
      const { name, lastName, email, phoneNumber, city, country, address, password, gender } = values;

      try {
        await doSaveUser({
          variables: {
            input: {
              name,
              lastName,
              email,
              phoneNumber,
              city,
              country,
              address,
              gender,
              password
            }
          }
        });
        setMessage({
          type: 'success',
          text: 'Usuario creado correctamente'
        });
      } catch (error) {
        console.log(error);
        setMessage({
          type: 'error',
          text: 'Error al crear usuario'
        });
      } finally {
        formik.resetForm();
        setTimeout(() => {
          setMessage({
            type: '',
            text: ''
          });
        }, 3000);
      }
    }
  });

  return (
    <>
      <div className="content-inner custom-form-signup">
        <p className="text-danger">{message.text}</p>
        <div className="container">
          <div className="row">
            <div className="m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
              <form className="dlab-form dzForm">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        required
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="lastName"
                        required
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="phoneNumber"
                        required
                        type="phone"
                        className="form-control"
                        placeholder="Número de teléfono"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="country"
                        required
                        type="text"
                        className="form-control"
                        placeholder="País"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="city"
                        required
                        type="text"
                        className="form-control"
                        placeholder="Ciudad"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <select
                        name="gender]"
                        className="form-control"
                        required
                        defaultValue={'null'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                      >
                        <option value={'null'}>Sin definir</option>
                        <option value="male">Hombre</option>
                        <option value="female">Mujer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="address"
                        required
                        type="text"
                        className="form-control"
                        placeholder="Dirección"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="password"
                        type="password"
                        required
                        className="form-control"
                        placeholder="Contraseña"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="confirmPassword"
                        type="password"
                        required
                        className="form-control"
                        placeholder="Confirmar contraseña"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                      />
                    </div>
                  </div>
                  <div className="col-12 m-2 align-center">
                    <button
                      name="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                      }}
                      type="submit"
                      value="Submit"
                      className="btn btn-corner gradient btn-primary"
                    >
                      Registrarme
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <p>
            ¿Ya tienes cuenta? Inicia sesión
            <Link href="/login">
              <a> AQUÍ</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupCustom;
