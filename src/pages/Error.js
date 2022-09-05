import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="pt-40 w-[90%] mx-auto  max-w-[1200px]">
      <h1 className="text-2xl mb-2">
        Oops! <span className="text-lime-800">404!</span>
      </h1>
      <p className="text-xl mb-3">The is not the page you are looking for...</p>
      <Link
        to="/"
        className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white"
      >
        Back Home
      </Link>
    </section>
  );
};

export default Error;
