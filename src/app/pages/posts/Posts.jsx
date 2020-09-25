import { ApolloProvider, useQuery } from "@apollo/client";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CLIENT } from "../../../config/cliente";
import {
  guardar_modal,
  guardar_posts,
  guardar_post,
} from "../../../reducer/reducer";
import { listarPosts } from "../../../services/posts.service";
import FormPost from "./form-post/FormPost";
import Post from "./Post";

class Posts extends Component {
  cerrarModal = () => {
    this.props.guardar_modal(false);
  };

  render() {
    return (
      <ApolloProvider client={CLIENT}>
        {/* MODAL FORM EDICION */}
        {this.props.store.reducer.modal && (
          <FormPost
            data={this.props.store.reducer.post}
            isModalOpen={this.props.store.reducer.modal}
            cerrarModal={this.cerrarModal}
          />
        )}

        <div className="container">
          {/* CREAR POST */}
          <div className="right">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.guardar_post(null);
                this.props.guardar_modal(true);
              }}
            >
              <i className="fa fa-plus" aria-hidden="true"></i> Crear post
            </button>
          </div>
          <ListarPosts props={this.props.guardar_posts} />
        </div>
      </ApolloProvider>
    );
  }
}

function ListarPosts() {
  const { loading, error, data } = useQuery(listarPosts(12));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <React.Fragment>
      <div className="row">
        {data.posts.data.map((item) => (
          <div className="col-3" key={item.id}>
            <Post data={item} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  store: state,
});

export default withRouter(
  connect(mapStateToProps, { guardar_posts, guardar_post, guardar_modal })(
    Posts
  )
);
