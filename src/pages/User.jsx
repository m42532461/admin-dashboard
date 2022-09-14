import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";

const User = () => {
  return (
    <div className="user flex-col flex-[4] p-5 ">
      <div className="userTitleContainer flex items-center justify-between">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton w-20 p-[10px] bg-teal-600 cursor-pointer text-white text-[16px] rounded-[10px]">
          Create
        </button>
      </div>
      <div className="userContainer flex mt-5">
        <div className="userShow flex flex-col flex-1 p-5 shadow-lg">
          <div className="userShowTop flex items-center ">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg w-10 h-10 rounded-full object-cover"
            />
            <div className="userShowTopTitle flex flex-col ml-5">
              <span className="userShowUsername font-semibold">
                Anna Becker
              </span>
              <span className="userShowUserTitle font-light">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="userShowButtom mt-5">
            <span className="userShowTitle  text-[14px] font-semibold text-[rgb(175,170,170)]">
              Account Details
            </span>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <PermIdentity className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">annabeck99</span>
            </div>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <CalendarToday className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">10.12.1999</span>
            </div>
            <span className="userShowTitle  text-[14px] font-semibold text-[rgb(175,170,170)]">
              Contact Details
            </span>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <PhoneAndroid className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">+1 234 5678</span>
            </div>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <MailOutline className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">
                annabeck99@gmail.com
              </span>
            </div>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <LocationSearching className="userShowIcon text-[16px]" />
              <span className="userShowInfoTitle ml-[10px]">
                New York | USA
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate flex flex-col flex-[4] p-5 shadow-lg ml-5">
          <span className="userUpdateTitle text-[24px]  font-semibold">
            Edit
          </span>
          <form action="" className="userUpdateForm flex justify-between mt-5">
            <div className="userUpdateLeft">
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-[10px]">
                <label className="mb-[5px] text-[14px]">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput w-[250px] border-b h-[30px]"
                />
              </div>
            </div>
            <div className="userUpdateRight flex flex-col justify-between ">
              <div className="userUpdateUpload flex items-center">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userUpdateImg w-[100px] h-[100px] rounded-[10px] object-cover mr-5"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon cursor-pointer" />
                </label>
                <input type="file" id="file" className=" hidden" />
              </div>
              <button className="userUpdateButton  rounded-[5px] p-[5px] bg-[darkblue] text-white font-semibold cursor-pointer">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
