import "./Overview.scss";
import React, { ReactElement, useEffect, useState } from "react";

function Overview(): ReactElement {

  return (
    <div className="overview-wrapper">
      <div className="overview-container">
        <div
          className="overview-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div>Overview</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
