import React from "react";

const Profile = () => {
  return (
    <div className="profile_page min-h-screen flex items-center justify-center gradient">
      <div className="my-2 py-5 px-4 sm:py-8 md:px-8 shadow-xl w-[600px] max-w-[96%] rounded-2xl bg-light1 smooth-transition">
        <h1>Account</h1>
        <div className="profile_details">
          <div className="detail display: flex align-items: start">
            <span>Photo</span>
            <div className="right_details display: block">
              <img src="" alt="" />
              <a href="#">Upload Your Image</a>
            </div>
          </div>
          <div className="detail display: flex align-items: center">
            <span className="color: #eaeaea">Name</span>
            <div className="right_details">
              <input type="text" placeHolder="hello" />
            </div>
          </div>
          <div className="detail display: flex align-items: center">
            <span>Gender</span>
            <div className="right_details">
              <div className="male"></div>
              <div className="female"></div>
            </div>
          </div>
          <div className="detail display: flex align-items: center">
            <span>Age</span>
            <div className="right_details">
              <input type="text" placeHolder="hello" />
            </div>
          </div>
          <div className="detail display: flex align-items: center">
            <span>Email</span>
            <div className="right_details">
              <input type="text" placeHolder="hello" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
