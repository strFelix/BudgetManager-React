import React from "react";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";

const Projects = () => {
  
  const location = useLocation();
  let message = location.state ? location.state.message : "";
  let type = location.state ? location.state.type : "";

  return (
    <div>
      <h1>Meus projetos</h1>
      <Message type={type} msg={message}/>
    </div>
  );
};

export default Projects;
