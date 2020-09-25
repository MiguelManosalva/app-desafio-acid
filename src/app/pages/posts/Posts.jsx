import { ApolloProvider, useQuery } from "@apollo/client";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CLIENT } from "../../../config/cliente";
import { listarPosts } from "../../../services/posts.service";
import Post from "./Post";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {data.posts.data.map((item) => (
            <div className="col-3" key={item.id}>
              <Post data={item} />
            </div>
          ))}
        </div>
      </div>

    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  store: state,
});

export default withRouter(connect(mapStateToProps, {})(Posts));
