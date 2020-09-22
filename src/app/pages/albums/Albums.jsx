import { ApolloProvider, useQuery } from "@apollo/client";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CLIENT } from "../../../config/cliente";
import { listarAlbums } from "../../../services/almbums.service";

class Albums extends Component {
  render() {
    return (
      <ApolloProvider client={CLIENT}>
          <ListarAlbums />
      </ApolloProvider>
    );
  }
}

function ListarAlbums() {
    const { loading, error, data } = useQuery(listarAlbums());

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <React.Fragment>
        {data.albums.data.map( (item) => 
            <h5 key={item.id}> - {item.title} </h5>
        )}
      </React.Fragment>
    );
  }


const mapStateToProps = (state) => ({
  store: state,
});

export default withRouter(
  connect(mapStateToProps, {})(Albums)
);
