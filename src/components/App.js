import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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

      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
