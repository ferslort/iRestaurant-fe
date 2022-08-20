const FormUpdateRestaurant = () => {
  return (
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
              placeholder="Nombre de fantasía"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fantasyName}
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
              value={formik.values.category}
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
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              placeholder="Teléfono"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
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
              placeholder="Ciudad"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.city}
            />
          </div>
          {formik.touched.city && formik.errors.city ? <div className="error-input">{formik.errors.city}</div> : null}
        </div>
        <div className="col-sm-6">
          <div className="input-group">
            <input
              name="state"
              required
              type="text"
              className="form-control"
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
            disabled={!dataRestaurant?.verified}
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
  );
};
