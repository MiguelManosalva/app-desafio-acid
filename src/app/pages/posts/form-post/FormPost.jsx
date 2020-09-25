import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Formik, Field, Form } from "formik";

import Modal from "react-modal";
import { STYLE_MODAL } from "../../../../utils/Constants";
import { INITIAL_VALUES, SCHEMA_VALIDATIONS } from "./ValidationsFormPost";
import { capitalize } from "../../../../utils/Functions";

class FormPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.data,
      modalIsOpen: props.isModalOpen,
      cerrarModal: props.cerrarModal,
      initialValues: props.data ? props.data : INITIAL_VALUES,
    };
    Modal.setAppElement("body");
  }

  enviarForm = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.state.cerrarModal}
        style={STYLE_MODAL}
      >
        <h1> {this.state.post ? "Editar" : "Crear"} </h1>
        <Formik
          initialValues={this.state.initialValues}
          validationSchema={SCHEMA_VALIDATIONS}
          onSubmit={(values) => {
            console.log("values::: ", values);
          }}
        >
          {({ values, errors, touched }) => (
            <Form name="loginForm" className="login-form">
              <Field
                className="input-field"
                type="text"
                id="title"
                placeholder="Escriba título"
                name="title"
                value={capitalize(values.title)}
              />
              {errors.title && touched.title ? (
                <div className="alert-title">{errors.title}</div>
              ) : null}

              <Field
                component="textarea"
                className="textarea-field"
                type="text"
                id="body"
                placeholder="Escriba descripción"
                name="body"
                value={capitalize(values.body)}
              />
              {errors.body && touched.body ? (
                <div className="alert-body">{errors.body}</div>
              ) : null}

              <div className="right">
                <div
                  className="btn btn-secondary"
                  onClick={() => this.state.cerrarModal()}
                >
                  <i className="fa fa-close" aria-hidden="true"></i> Cerrar
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  // onClick={() => this.enviarForm(values)}
                >
                  <i className="fa fa-save" aria-hidden="true"></i> Guardar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => ({
  store: state,
});

export default withRouter(connect(mapStateToProps, {})(FormPost));
