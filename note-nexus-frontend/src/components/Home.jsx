import React from "react";
import Nav from "../components/Nav"

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Nav />
      </div>
      <div className="bg1">
        <div className="container" style={{ opacity: 0.9 }}>
          <p className="text-4xl font-semibold text-[#e8779a] flex justify-center items-center">
            Welcome to <span className="homep">SyncNote</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
