import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { addProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...input, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

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
            onChange={(e) => setFile(e.target.files[0])}
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
            onChange={handleChange}
            name="title"
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
            onChange={handleChange}
            name="desc"
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Price
          </label>
          <input
            className="h-10 p-[10px] border border-gray-500 rounded-[5px]"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            name="price"
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
            onChange={handleCat}
          />
        </div>
        <div className="inputDiv flex flex-col w-[400px]  mt-[10px] mr-[20px]">
          <label className="mb-[10px] text-[14px] font-semibold text-[rgb(151,150,150)]">
            Stock
          </label>
          <select
            name="inStock"
            className="h-10 rounded-[5px] border-gray-500 border"
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button
          className="w-[200px] bg-[darkblue] text-white py-[7px] px-[10px] rounded-[10px] cursor-pointer mt-[30px]"
          onClick={handleClick}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
