import React, { useEffect } from "react";
import "./Loader.css";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 sec loader time
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2 className="loader-text">Loading Portfolio...</h2>
    </div>
  );
};

export default Loader;
