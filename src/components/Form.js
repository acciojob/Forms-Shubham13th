import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <input id="full_name" type="text" placeholder="Full Name" />
        <br />

        <input id="email" type="email" placeholder="Email" />
        <br />

        <input id="password" type="password" placeholder="Password" />
        <br />

        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
