import { Publish } from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Chart from "../components/Chart";
import { userRequest } from "../requestMethods";
import { updateProduct } from "../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  console.log(product);

  const [title, setTitle] = useState(product.title);
  const [desc, setDesc] = useState(product.desc);
  const [price, setPrice] = useState(product.price);
  const [inStock, setInStock] = useState(product.inStock);

  const [file, setFile] = useState(null);
  const categories = product.categories.reduce((a, b) => a + "," + b);
  const [cat, setCat] = useState(product.categories);

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  console.log(inStock);
  const handleUpdate = async (e) => {
    e.preventDefault();
    let updatedProduct = {
      ...product,
      title,
      desc,
      price,
      inStock,
      categories: cat,
    };

    if (!file) {
      updateProduct(productId, updatedProduct, dispatch);
    } else {
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
            updatedProduct = { ...updatedProduct, img: downloadURL };

            console.log(updatedProduct);
            updateProduct(productId, updatedProduct, dispatch);
          });
        }
      );
    }
    navigate("/products");
  };
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  // onChange -> setState
  // onClick -> update product

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
          <Chart title="Sales Performance" data={pStats} dataKey="Sales" />
        </div>
        <div className="productTopRight flex flex-col flex-1 p-5 m-5 shadow-lg">
          <div className="productInfoTop flex items-center">
            <img
              src={product.img}
              alt="img"
              className="productInfoImg h-10 w-10 rounded-full object-cover "
            />
            <span className="productName font-semibold">{product?.title}</span>
          </div>
          <div className="productInfoBottom mt-[10px]">
            <div className="productInfoItem flex justify-between w-[150px]">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue font-light">{product._id}</span>
            </div>
            <div className="productInfoItem flex justify-between w-[150px]">
              <span className="productInfoKey">sales</span>
              <span className="productInfoValue font-light">5123</span>
            </div>

            <div className="productInfoItem flex justify-between w-[150px]">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue font-light">
                {product.inStock}
              </span>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
            />
            <label className="mb-[10px] text-[gray]">Product Description</label>
            <input
              className="mb-[10px] p-[5px] border-gray-400 border-b"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              name="desc"
            />
            <label className="mb-[10px] text-[gray]">Product Price</label>
            <input
              className="mb-[10px] p-[5px] border-gray-400 border-b"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
            />
            <label className="mb-[10px] text-[gray]">Categories</label>
            <input
              className="mb-[10px] p-[5px] border-gray-400 border-b"
              type="text"
              value={cat}
              onChange={handleCat}
            />
            <label className="mb-[10px] text-[gray]">In Stock</label>
            <select
              className="mb-[10px] border"
              name="inStock"
              id="inStock"
              value={inStock}
              onChange={(e) => setInStock(e.target.value)}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight flex flex-col justify-around">
            <div className="productUpload flex items-center">
              <img
                src={product.img}
                alt=""
                className="productUploadImg w-[100px] h-[100px]"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button
              className="productButton p-[5px] rounded-[5px] bg-[darkblue] font-semibold text-white"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
