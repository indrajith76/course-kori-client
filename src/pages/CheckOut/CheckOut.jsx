import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsCheck2, BsX, BsFillStarFill } from "react-icons/bs";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const CheckOut = () => {
  const { user } = useAuth();
  const course = useLoaderData();
  const { id, title, author, rating, basicPrice, thumbnail } = course;
  const [enroll, setEnroll] = useState(false);
  const [enrollPremium, setEnrollPremium] = useState(false);

  const handlePremiumPrice = () => {
    Swal.fire({
      title: "You Successfully enrolled",
      text: "Course Name : " + title,
      imageUrl: thumbnail,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    setEnroll(true);
    setEnrollPremium(true);
  };

  return (
    <div className="">
      <div className="container mx-auto">
        <h1
          className={`text-center font-bold text-slate-800 text-xl md:text-4xl pt-3`}
        >
          Welcome <span className="text-sky-700">{user?.displayName}</span>, to
          the checkout page.
        </h1>
        <div className="md:w-3/4 lg:w-2/4 mx-auto mt-5 px-5 md:p-0">
          <img className="w-full" src={thumbnail} alt="" />
          <h3 className={`text-lg md:text-2xl mb-2 text-slate-800`}>
            Course Name : {title}
          </h3>
          <div className="">
            <p className="text-slate-800">Author : {author}</p>
            <p className={`flex items-center gap-1 mt-1 text-slate-800`}>
              <span className="text-yellow-500">
                <BsFillStarFill />
              </span>
              {rating}
            </p>
          </div>
        </div>
        <div
          className="md:w-3/4 lg:w-2/4 mx-auto py-10 px-5 md:px-0 "
          style={{ pointerEvents: enroll ? "none" : "" }}
        >
          <div className={`border rounded-lg hover:shadow-lg`}>
            <h3 className="bg-sky-500 text-center text-3xl text-slate-200 py-1 rounded-t-lg">
              Premium ${basicPrice}
            </h3>
            <ul className={`p-3 text-slate-800`}>
              <li className="text-base flex items-center gap-1 mb-2">
                <BsCheck2 className="text-xl" />
                Watch videos.
              </li>
              <li className="text-base flex items-center gap-1 mb-2">
                <BsCheck2 className="text-xl" />
                Get certification.
              </li>
              <li className="text-base flex items-center gap-1 mb-2">
                <BsCheck2 className="text-xl" />
                Join Support session.
              </li>
              <li className="text-base flex items-center gap-1 mb-2">
                <BsCheck2 className="text-xl" />
                Learn with projects.
              </li>
              <li className="text-base flex items-center gap-1 mb-2">
                <BsCheck2 className="text-xl" />
                Join jobs programs.
              </li>
            </ul>
            <div className="flex justify-center mb-5 mt-5">
              <button
                onClick={handlePremiumPrice}
                disabled={enrollPremium}
                className={`hover:bg-sky-600 disabled:bg-sky-600 text-slate-700 px-8 py-1 border-2 duration-500 rounded-lg font-medium hover:text-white disabled:text-white`}
              >
                {enrollPremium ? "Enrolled" : "Enroll Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
