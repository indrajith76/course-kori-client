import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaUserCircle, FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, title, author, rating, basicPrice, videoLink } = course;

  return (
    <div className="">
      <div className="container mx-auto pb-10">
        <div className="w-3/4 py-5 mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <h1 className={`text-2xl md:text-4xl text-slate-800 font-semibold`}>
            Details of this course
          </h1>
        </div>
        <iframe 
          className="md:w-3/4 md:h-[70vh] mx-auto"
          src={`${videoLink}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="w-3/4 mx-auto">
          <h3 className={`text-xl md:text-4xl font-bold my-3 text-slate-800`}>
            {title}
          </h3>
          <h4
            className={`md:text-2xl md:mt-8 font-medium text-slate-800 flex items-center gap-1`}
          >
            <span className="text-gray-600">
              <FaUserCircle />
            </span>
            Author : {author}
          </h4>
          <div className="md:mt-8 flex justify-between">
            <h4 className={`text-lg md:text-3xl font-bold text-slate-800`}>
              Price : ${basicPrice}
            </h4>
            <p
              className={`md:text-2xl font-bold text-slate-800 flex items-center gap-2`}
            >
              <span className="text-yellow-500">
                <FaStar />
              </span>{" "}
              {rating}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link to={`/checkout/${id}`}>
            <button className="bg-red-500 w-full px-2 py-1 md:py-4 md:px-10 font-medium text-white rounded-lg text-xl">
              Get Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
