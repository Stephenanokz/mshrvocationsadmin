import React from "react";
import "./ApostolateList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ApostolateContext } from "../../context/apostolateContext/ApostolateContext";
import {
  deleteApostolateCall,
  getApostolatesCall,
} from "../../context/apostolateContext/ApostolateApiCalls";

const ApostolateList = () => {
  const { apostolates, dispatch } = useContext(ApostolateContext);

  useEffect(() => {
    getApostolatesCall(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteApostolateCall(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "apostolate",
      headerName: "Apostolate",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "type", headerName: "Category", width: 150 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/apostolate/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => deleteHandler(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return !apostolates.length > 0 ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="productList">
      <div className="postTitleContainer">
        <h1 className="postTitle">Our Apostolates</h1>
        <Link to="/newapostolate">
          <button className="addPostButton">Create</button>
        </Link>
      </div>
      <div className="table">
        <DataGrid
          rows={apostolates}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(r) => r._id}
        />
      </div>
    </div>
  );
};

export default ApostolateList;
