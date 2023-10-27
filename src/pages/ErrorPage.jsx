import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="errorSection">
        <div className="errorContainer">
          <h2>Page not found</h2>

          <button className="userButtons" onClick={() => navigate(-1)}>
            Back to previous Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="errorSection">
      <div className="errorContainer">
        <h1>Something went wrong</h1>
        <button className="userButtons" onClick={() => navigate(-1)}>
          Back to previous Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
