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
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Container customClass="minHeight">
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/company" element={<Company />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
