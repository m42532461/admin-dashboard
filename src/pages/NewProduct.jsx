import React from "react";

const NewProduct = () => {
  return (
    <div className="flex flex-[4] flex-col">
      <form className="flex flex-wrap">
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Image
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="file"
            placeholder=""
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Name
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="Apple Airpods"
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Stock
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="123"
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Active
          </label>
          <select
            name="active"
            id="active"
            className="h-10 rounded-[5px] border-gray-500 border"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="w-[200px] bg-[darkblue] text-white py-[7px] px-[10px] rounded-[10px] cursor-pointer mt-[30px]">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
