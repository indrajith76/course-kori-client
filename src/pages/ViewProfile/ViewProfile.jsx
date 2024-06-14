import React from "react";
import useAuth from "../../hooks/useAuth";

const ViewProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl m-5">Profile</h2>
      <div className="w-96 mx-auto">
        <img
          className="rounded-full w-3/5 mx-auto"
          src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
          alt=""
        />
        <h2 className="text-xl my-5 text-center">Name: {user?.displayName}</h2>
        <h2 className="text-xl my-5 text-center">Email: {user?.email}</h2>
      </div>
    </div>
  );
};

export default ViewProfile;
