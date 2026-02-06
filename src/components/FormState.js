import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("useState Form Data:", formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          id="full_name"
          type="text"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
        />
        <br />

        <input
          id="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <input
          id="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
