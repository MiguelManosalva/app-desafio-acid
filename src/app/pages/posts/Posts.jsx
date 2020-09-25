import { ApolloProvider, useQuery } from "@apollo/client";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CLIENT } from "../../../config/cliente";
import { listarAlbums, listarPosts } from "../../../services/posts.service";

import Modal from "react-modal";
import { STYLE_MODAL } from "../../../utils/Constants";
import { capitalize } from "../../../utils/Functions";

class Posts extends Component {
  render() {
    return (
      <ApolloProvider client={CLIENT}>
        <ListarPosts />
      </ApolloProvider>
    );
  }
}

function ListarPosts() {
  const { loading, error, data } = useQuery(listarPosts(12));
  const [modalIsOpen, setIsOpen] = React.useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const eliminarPost = (idPost) => {
    console.log("idPost: ", idPost);
  };

  const editarPost = (idPost) => {
    setIsOpen(true);
    console.log("idPost: ", idPost);
  };

  //

  var subtitle;

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  //

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {data.posts.data.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h4 className="title"> {capitalize(item.title)} </h4>
                  <p className="body-title"> {capitalize(item.body)} </p>
                  <span className="sub-author"> Autor: {item.user.name} </span>
                  <span className="sub-comment"> Comentarios ({item.comments.data.length}) </span>


                  <div className="centered">
                    <div
                      className="btn btn-default"
                      onClick={() => editarPost(item.id)}
                    >
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <div
                      className="btn btn-default"
                      onClick={() => eliminarPost(item.id)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={STYLE_MODAL}
        contentLabel="Example Modal"
      >
        <h1> Editar </h1>
        <form name="loginForm" className="login-form">
          <input
            className="d-block"
            type="text"
            id="username"
            placeholder="Username"
            name="username"
          />

          <input
            className="d-block"
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
        </form>
      </Modal>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  store: state,
});

export default withRouter(connect(mapStateToProps, {})(Posts));
