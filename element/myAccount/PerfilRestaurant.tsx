import { notification, Upload } from 'antd';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import * as Sentry from '@sentry/browser';
import { CREATE_RESTAURANT } from '../../gql/restaurant';
import { uploadFile } from '../../utils/uploadFile';
import { typeRestaurant } from '../../enum';
import { setRestaurant } from '../../redux/slices/restaurant';
import { Restaurant } from '../../types/restaurant';

interface IPerfilRestaurant {
  onSetRestaurant?: typeof setRestaurant;
  restaurant: Restaurant;
}

const initialValues = {
  address: '',
  bussinessName: '',
  category: '',
  city: '',
  commune: '',
  country: '',
  email: '',
  fantasyName: '',
  phone: '',
  state: ''
};

const getBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const PerfilRestaurant = ({ restaurant }: IPerfilRestaurant) => {
  const [loadingChange, setLoadingChange] = useState(false);

  const [logo, setLogo] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState('');

  const [doCreateRestaurant, { loading }] = useMutation(CREATE_RESTAURANT);

  const formik = useFormik({
    initialValues: restaurant ? restaurant : initialValues,
    validationSchema: Yup.object({
      address: Yup.string().required('Dirección es requerida'),
      city: Yup.string().required('Ciudad es requerida'),
      bussinessName: Yup.string().required('Nombre de la empresa es requerido'),
      country: Yup.string().required('País es requerido'),
      commune: Yup.string().required('Comuna es requerida'),
      email: Yup.string().required('Email es requerido'),
      phone: Yup.string().required('Teléfono es requerido'),
      state: Yup.string().required('Estado es requerido'),
      fantasyName: Yup.string().required('Nombre de fantasía es requerido'),
      category: Yup.string().required('Categoría es requerida')
    }),
    onSubmit: async (values, actions) => {
      setLoadingChange(true);
      if (!logo) {
        notification.error({
          message: 'Error',
          description: 'Seleccione una imagen'
        });
        setLoadingChange(false);
        return;
      }

      try {
        const urlLogo = await uploadFile('restaurant', values.bussinessName.replace(' ', '').toLowerCase(), logo);
        await doCreateRestaurant({
          variables: {
            input: {
              ...values,
              logo: urlLogo
            }
          }
        });

        notification.success({ message: 'Restaurante creado exitosamente' });
      } catch (error) {
        notification.error({ message: 'Error al crear el restaurante' });
        Sentry.captureException(error);
      } finally {
        actions.resetForm();
        setLoadingChange(false);
      }
    }
  });

  const beforeUpload = async (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      notification.error({ message: '¡Solo puede cargar un archivo JPG/PNG!' });
      return;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      notification.error({ message: '¡La imagen debe tener un tamaño inferior a 2 MB!' });
      return;
    }

    setLogo(file);
  };

  const handlePreview = async ({ file }: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8
        }}
      >
        Actualizar
      </div>
    </div>
  );

  if (!restaurant)
    return (
      <div className="d-flex justify-content-center align-items-center h-100 flex-column">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando...</p>
      </div>
    );

  return (
    <div className="container-perfil-account">
      {restaurant.verified ? (
        <div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head style-3 mb-4">
                  <h2 className="title"> Tu negocio esta en proceso de verificación.</h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <ul className="list-check style-1 primary m-b30">
                  <li>Suspendisse ullamcorper mollis orci in facilisis.</li>
                  <li>Etiam orci magna, accumsan varius enim volutpat.</li>
                  <li>Donec fringilla velit risus, in imperdiet turpis euismod quis.</li>
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div className="video-bx style-2">
                  <img src="images/video/pic2.jpg" alt="" />
                  <div className="video-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container-perfil-account__header">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handlePreview}
            >
              {previewImage || restaurant?.logo ? (
                <img
                  alt="example"
                  style={{
                    width: '100%'
                  }}
                  src={previewImage ? previewImage : restaurant?.logo}
                />
              ) : (
                uploadButton
              )}
            </Upload>
            <div className="header-upload">
              <h4>Logotipo del Restaurant</h4>
              <p>Tipo de archivo aceptado .png. Menos de 1 MB</p>
            </div>
          </div>
          <div>
            <div className="m-b10 m-t50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
              <form className="dlab-form dzForm">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="bussinessName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bussinessName}
                        required
                        type="text"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                    {formik.touched.bussinessName && formik.errors.bussinessName ? (
                      <div className="error-input">{formik.errors.bussinessName}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="fantasyName"
                        required
                        type="text"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Nombre de fantasía"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.fantasyName}
                      />
                    </div>
                    {formik.touched.fantasyName && formik.errors.fantasyName ? (
                      <div className="error-input">{formik.errors.fantasyName}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <select
                        name="category"
                        className="form-control"
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.category}
                        disabled={restaurant?.idRestaurant ? true : false}
                      >
                        <option value="">Seleccionar</option>
                        {typeRestaurant.map((i) => (
                          <option value={i.value} key={i.value}>
                            {i.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {formik.touched.category && formik.errors.category ? (
                      <div className="error-input">{formik.errors.category}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.email}
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error-input">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="phone"
                        required
                        type="phone"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Teléfono"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.phone}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="error-input">{formik.errors.phone}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="country"
                        required
                        type="text"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="País"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.country}
                      />
                    </div>
                    {formik.touched.country && formik.errors.country ? (
                      <div className="error-input">{formik.errors.country}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="city"
                        required
                        type="text"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Ciudad"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.city}
                      />
                    </div>
                    {formik.touched.city && formik.errors.city ? (
                      <div className="error-input">{formik.errors.city}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="state"
                        required
                        type="text"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Región o Estado"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.state}
                      />
                    </div>
                    {formik.touched.state && formik.errors.state ? (
                      <div className="error-input">{formik.errors.state}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="commune"
                        required
                        type="text"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Comuna o Municipio"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.commune}
                      />
                    </div>
                    {formik.touched.commune && formik.errors.commune ? (
                      <div className="error-input">{formik.errors.commune}</div>
                    ) : null}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="address"
                        required
                        type="text"
                        className="form-control"
                        disabled={restaurant?.idRestaurant ? true : false}
                        placeholder="Dirección"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.address}
                      />
                    </div>
                    {formik.touched.address && formik.errors.address ? (
                      <div className="error-input">{formik.errors.address}</div>
                    ) : null}
                  </div>

                  <div className="col-12 m-2 align-center">
                    <button
                      name="submit"
                      disabled={restaurant?.idRestaurant ? true : false}
                      onClick={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                      }}
                      type="submit"
                      value="Submit"
                      className="btn btn-corner gradient btn-primary"
                    >
                      {loading || loadingChange ? <Spinner animation={'border'} /> : 'Crear Restaurante'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PerfilRestaurant;
