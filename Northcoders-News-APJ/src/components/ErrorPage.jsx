import React from "react";
import { Link } from "@reach/router";

const ErrorPage = () => {
  return (
    <div>
      Oops! This isn't a valid path
      <br />
      <Link to={`/`}>Northcoders News Home</Link>
    </div>
  );
};

export default ErrorPage;
