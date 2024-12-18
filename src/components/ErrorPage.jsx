import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mt-10 text-red-950 font-semibold ">Opps It's a dead end</h1>
      <p className="text-lg text-gray-700 m-6">The page you're looking for does not exist.</p>
      <Link to="/" className="text-blue-700 font-semibold text-lg ">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
