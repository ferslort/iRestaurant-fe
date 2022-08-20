import { notification, Upload } from 'antd';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { GET_USER, UPDATE_USER } from '../../gql/user';
import { Spinner } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { auth, storage } from '../../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { User } from '../../types/user';

interface IPerfilAccount {
  user: User;
}

const PerfilAccount = ({ user }: IPerfilAccount) => {
  const [loadingImg, setLoadingImg] = useState(false);

  const [doUpdateUser, { loading }] = useMutation(UPDATE_USER, {
    update(cache, { data: { updateUser } }) {
      const { findByOneUser }: any = cache.readQuery({ query: GET_USER });
      cache.writeQuery({
        query: GET_USER,
        data: {
          findByOneUser: { ...findByOneUser, ...updateUser }
        }
      });
    }
  });

  const validationSchema = Yup.object({
    name: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellido es requerido'),
    address: Yup.string().required('Dirección es requerida'),
    city: Yup.string().required('Ciudad es requerida'),
    country: Yup.string().required('País es requerido'),
    gender: Yup.string().required('Género es requerido')
  });

  const beforeUpload = async (file: any, user: string) => {
    setLoadingImg(true);
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    const storageRef = ref(storage, `avatar/${user}.${file.type.split('/')[1]}`);

    if (!isJpgOrPng) {
      notification.error({ message: '¡Solo puede cargar un archivo JPG/PNG!' });
      setLoadingImg(true);
      return;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      notification.error({ message: '¡La imagen debe tener un tamaño inferior a 2 MB!' });
      setLoadingImg(true);
      return;
    }
    try {
      const img = await uploadBytes(storageRef, file);
      const imgUrl = await getDownloadURL(img.ref);
      await updateProfile(auth.currentUser!, { photoURL: imgUrl });
      await doUpdateUser({
        variables: {
          input: {
            photoUrl: imgUrl
          }
        }
      });
      notification.success({ message: 'Imagen actualizada correctamente' });
    } catch (error) {
      notification.error({ message: 'Error al actualizar la imagen' });
    } finally {
      setLoadingImg(false);
    }
  };

  const uploadButton = (
    <div>
      {loading || loadingImg ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8
        }}
      >
        Actualizar
      </div>
    </div>
  );

  if (!user)
    return (
      <div className="d-flex justify-content-center align-items-center h-100 flex-column">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando...</p>
      </div>
    );

  return (
    <div className="container-perfil-account">
      <div className="container-perfil-account__header">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={(e) => beforeUpload(e, user?.uid!)}
        >
          {user?.photoUrl ? (
            <img
              src={user?.photoUrl}
              alt="avatar"
              style={{
                width: '100%'
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
        <div className="header-upload">
          <h4>Foto de perfil</h4>
          <p>Tipo de archivo aceptado .png. Menos de 1 MB</p>
        </div>
      </div>
      <div>
        <div className="m-b10 m-t50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
          <Formik
            initialValues={user}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              const { name, lastName, city, country, address, gender } = values;

              try {
                await doUpdateUser({
                  variables: {
                    input: {
                      name,
                      lastName,
                      city,
                      country,
                      address,
                      gender
                    }
                  }
                });
                notification.success({ message: 'Perfil actualizado' });
              } catch (error) {
                notification.error({ message: 'Error al actualizar el perfil' });
              }
            }}
          >
            {(props) => (
              <form className="dlab-form dzForm">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        name="name"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values?.name}
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
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values?.lastName}
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
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values?.country}
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
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values?.city}
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
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values?.gender}
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
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values?.address}
                      />
                    </div>
                  </div>

                  <div className="col-12 m-2 align-center">
                    <button
                      name="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        props.handleSubmit();
                      }}
                      type="submit"
                      value="Submit"
                      className="btn btn-corner gradient btn-primary"
                    >
                      {loading || loadingImg ? <Spinner animation={'border'} /> : 'Actualizar'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PerfilAccount;
