import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmRef.current.value,
    };

    console.log("useRef Form Data:", data);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" ref={nameRef} type="text" placeholder="Full Name" />
        <br />

        <input id="email" ref={emailRef} type="email" placeholder="Email" />
        <br />

        <input id="password" ref={passwordRef} type="password" placeholder="Password" />
        <br />

        <input
          id="password_confirmation"
          ref={confirmRef}
          type="password"
          placeholder="Confirm Password"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
