import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link id="form-link" to="/">Form Layout</Link> |{" "}
        <Link id="form-ref-link" to="/form-ref">useRef Form</Link> |{" "}
        <Link id="form-state-link" to="/form-state">useState Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
