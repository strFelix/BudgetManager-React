import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
//styles
import "./App.css";
//components
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";

function App() {
  return (
    <>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newproject">Novo projeto</Link>
        </div>
        <Container customClass="min-height">
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/company" element={<Company />} />
              <Route exact path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
