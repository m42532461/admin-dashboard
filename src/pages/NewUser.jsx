import React from "react";

const NewUser = () => {
  return (
    <div className="flex flex-[4] flex-col">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm flex flex-wrap">
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Username
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="john"
          />
        </div>
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Full Name
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="John Smith"
          />
        </div>
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Email
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Password
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Phone
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="+1 234 5678"
          />
        </div>
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Address
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="New York | USA"
          />
        </div>
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Gender
          </label>
          <div className="newUserGender ">
            <input className="mt-[15px]" type="radio" id="male" value="male" />
            <label className="m-[10px] text-[18px] text-[#555]" for="male">
              Male
            </label>
            <input
              className="mt-[15px]"
              type="radio"
              id="female"
              value="female"
            />
            <label className="m-[10px] text-[18px] text-[#555]" for="female">
              Female
            </label>
            <input
              className="mt-[15px]"
              type="radio"
              id="other"
              value="other"
            />
            <label className="m-[10px] text-[18px] text-[#555]" for="other">
              Other
            </label>
          </div>
        </div>
        <div className="newUserItem flex flex-col mt-[10px] mr-[20px] w-[400px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Active
          </label>
          <select
            name="active"
            id="active"
            className="newUserSelect h-10 rounded-[5px] border-gray-500 border"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton w-[200px] bg-[darkblue] text-white py-[7px] px-[10px] rounded-[10px] cursor-pointer mt-[30px]">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
