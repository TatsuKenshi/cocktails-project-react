import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h1>Error...</h1>
      <p>the page doesn't exist</p>
      <Link to="/">Go Back Home</Link>
    </section>
  );
};

export default Error;
