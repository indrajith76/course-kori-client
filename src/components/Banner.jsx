import React from "react";

const Banner = () => {
  
  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?t=st=1718304652~exp=1718308252~hmac=e0af2ed11414c02aaa1a0cb5b7b8366d5a9a6f1b2519f6cf7baa64ef76599f45&w=740)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Empower Your Learning Journey</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
