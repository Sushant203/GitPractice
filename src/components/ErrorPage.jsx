import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Opps It's a dead end</h1>
      <Link to="/" style={{ color: "blue" }}>
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
