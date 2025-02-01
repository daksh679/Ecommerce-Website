import React from "react";

const Profile = () => {
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
          <div className="bg-[#f5f5f5] rounded-md">
            {/* Profile Image */}
            <div className="flex justify-center items-center">
              <img
                className="h-[500px] w-[500px] rounded-full "
                src="http://localhost:3000/images/admin.jpg"
                alt=""
              />
            </div>

            <div className="m-3 bg-gray-400 rounded-md p-2">
              <h2>
                <span className="font-bold">Name : </span>
                Daksh Ahuja
              </h2>
              <h2>
                <span className="font-bold">Email : </span>
                adaksh679@gmail.com
              </h2>
              <h2>
                <span className="font-bold">Role : </span>
                Seller{" "}
              </h2>
              <h2>
                <span className="font-bold">Status : </span>
                Active
              </h2>
              <h2>
                <span className="font-bold">Payment Account : </span>
                Pending{" "}
              </h2>
            </div>

            <div className="m-3">
              <div>
                <label htmlFor="shopName">Shop Name</label>
                <input
                  name="shopName"
                  type="text"
                  placeholder="Enter the shop name here..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="">Division Name</label>
                <input
                  name="divisionName"
                  type="text"
                  placeholder="Enter the division name here..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="">District Name</label>
                <input
                  name="districtName"
                  type="text"
                  placeholder="Enter the district name here..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="">Sub District </label>
                <input
                  name="subDistrict"
                  type="text"
                  placeholder="Enter the sub district name here..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-md p-4 h-[350px]">
            <h2 className="font-bold text-xl py-2">Change Password</h2>

            <div className="py-1">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="py-1">
              <label htmlFor="">Old Password</label>
              <input
                name="oldPassword"
                type="text"
                placeholder="Old Password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="py-1">
              <label htmlFor="">New Password</label>
              <input
                name="newPassword"
                type="text"
                placeholder="New Password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button className="w-1/4 bg-red-600 text-white p-2 rounded-md mt-2">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
