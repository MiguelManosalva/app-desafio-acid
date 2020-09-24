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
  const { loading, error, data } = useQuery(listarAlbums(12));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const eliminarAlbum = (idAlbum) => {
    console.log("idAlbum: ", idAlbum);
  }

  const editarAlbum = (idAlbum) => {
    console.log("idAlbum: ", idAlbum);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {data.albums.data.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="card">
                <img alt="Imagen album" src={item.photos.data[0].thumbnailUrl} />
                <div className="card-body">
                  <h4 className="title"> {item.title} </h4>
                  <span className="sub-title"> Autor: {item.user.name} </span>
                  <div className="centered">
                    <div className="btn btn-default" onClick={() => editarAlbum(item.id)}>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <div className="btn btn-default" onClick={() => eliminarAlbum(item.id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
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

export default withRouter(connect(mapStateToProps, {})(Albums));
