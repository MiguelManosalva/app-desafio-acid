import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { guardar_modal, guardar_post } from "../../../reducer/reducer";
import { capitalize } from "../../../utils/Functions";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.data
    };
  }

  editarPost = () => {
    this.props.guardar_modal(true);
    this.props.guardar_post(this.props.data);
  };

  eliminarPost = () => {
    // Eliminar
  };

  cerrarModal = () => {
    guardar_modal(false);
  };

  render() {
    return (
      <React.Fragment>
        {/* CARD POST */}
        <div className="card">
          <div className="card-body">
            <h4 className="title"> {capitalize(this.state.post.title)} </h4>
            <p className="body-title"> {capitalize(this.state.post.body)} </p>
            <span className="sub-author">
              {" "}
              Autor: {this.state.post.user.name}{" "}
            </span>
            <span className="sub-comment">
              Comentarios ({this.state.post.comments.data.length}){" "}
            </span>

            <div className="right">
              <div
                className="btn btn-primary-option"
                onClick={() => this.editarPost()}
              >
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </div>
              <div
                className="btn btn-secondary-option"
                onClick={() => this.eliminarPost()}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  store: state,
});

export default withRouter(connect(mapStateToProps, { guardar_post, guardar_modal })(Post));
