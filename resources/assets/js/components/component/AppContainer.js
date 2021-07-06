import React from "react";

function AppContainer({ title, children }) {
  return (
    <div className="container">
      <div className="card">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default AppContainer;
