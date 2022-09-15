import React, { useState } from "react";

const NewProduct = () => {
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

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
            Title
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="Apple Airpods"
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Description
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Price
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="Price"
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Categories
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="text"
            placeholder="jeans,skirts"
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Stock
          </label>
          <select className="h-10 rounded-[5px] border-gray-500 border">
            <option value="true">Yes</option>
            <option value="false">No</option>
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
