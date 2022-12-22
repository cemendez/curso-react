import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>Home page</h3>
      <p>Home content</p>
    </>
  );
};

const About = () => {
  return (
    <>
      <h3>About us</h3>
      <p>About content</p>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h3>Contact us</h3>
      <p>Contact content</p>
    </>
  );
};

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>ConceptosBasicos</h2>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
