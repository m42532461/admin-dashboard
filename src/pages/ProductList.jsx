import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../data";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        console.log(params.row);
        return (
          <div className="productListUser flex items-center">
            <img
              src={params.row.img}
              alt=""
              className="productListImg w-8 h-8 rounded-full object-cover mr-[10px]"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit rounded-[10px] py-[5px] px-[10px] bg-[#3bb077] cursor-pointer mr-5 text-white">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="productListDelete text-red-600 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="flex flex-[4] ">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
