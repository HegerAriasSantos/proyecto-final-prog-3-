import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import play from "../../assets/icons/play.svg";

function index(props) {
  const { titulo, id, portada } = props;

  return (
    <div className="videoWrapper">
      <Link to={`/trailer/${id}`}>
      <img className="videoWrapper__video" src={portada} title={titulo} />
      <div className="videoWrapper__wrapper">
      <img src={play} />
      <h2>{titulo}</h2>
      </div>
      </Link>
    </div>
  );
}

export default index;
