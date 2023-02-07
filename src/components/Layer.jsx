import React from "react";

const Layer = ({ children, styles }) => {
  return (
    <div
      className={`group flex h-screen snap-start items-center justify-center ${styles}`}
    >
      <div>{children}</div>
    </div>
  );
};

export default Layer;
