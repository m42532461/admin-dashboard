import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../data";
import { Link } from "react-router-dom";
const userList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser flex items-center">
            <img
              src={params.row.avatar}
              alt=""
              className="userListImg w-8 h-8 rounded-full object-cover mr-[10px]"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit rounded-[10px] py-[5px] px-[10px] bg-[#3bb077] cursor-pointer mr-5 text-white">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="userListDelete text-red-600 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="flex flex-[4]">
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

export default userList;
