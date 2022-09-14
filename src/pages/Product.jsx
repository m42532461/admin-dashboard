import { Publish } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../data";
const Product = () => {
  return (
    <div className="product flex flex-col flex-[4] m-5 ">
      <div className="productTitleContainer flex  items-center justify-between">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton w-[80px] p-[5px] bg-teal-600 text-white text-[16px] rounded-[5px]">
            Create
          </button>
        </Link>
      </div>
      <div className="productTop flex">
        <div className="productTopLeft flex-1">
          <Chart title="Sales Performance" data={productData} dataKey="Sales" />
        </div>
        <div className="productTopRight flex flex-col flex-1 p-5 m-5 shadow-lg">
          <div className="productInfoTop flex items-center">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="img"
              className="productInfoImg h-10 w-10 rounded-full object-cover "
            />
            <span className="productName font-semibold">Apple Airpods</span>
          </div>
          <div className="productInfoBottom mt-[10px]">
            <div className="productInfoItem flex justify-between w-[150px]">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue font-light">123</span>
            </div>
            <div className="productInfoItem flex justify-between w-[150px]">
              <span className="productInfoKey">sales</span>
              <span className="productInfoValue font-light">5123</span>
            </div>
            <div className="productInfoItem flex justify-between w-[150px]">
              <span className="productInfoKey">active</span>
              <span className="productInfoValue font-light">yes</span>
            </div>
            <div className="productInfoItem flex justify-between w-[150px]">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue font-light">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom  flex-1 p-5 m-5 shadow-lg">
        <form className="productForm flex justify-between">
          <div className="productFormLeft flex flex-col ">
            <label className="mb-[10px] text-[gray]">Product Name</label>
            <input
              className="mb-[10px] p-[5px] border-gray-400 border-b"
              type="text"
              placeholder="Apple AirPod"
            />
            <label className="mb-[10px] text-[gray]">In Stock</label>
            <select className="mb-[10px] border" name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-[10px] text-[gray]">Active</label>
            <select className="mb-[10px] border" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight flex flex-col justify-around">
            <div className="productUpload flex items-center">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg w-[100px] h-[100px]"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" className="hidden" />
            </div>
            <button className="productButton p-[5px] rounded-[5px] bg-[darkblue] font-semibold text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
