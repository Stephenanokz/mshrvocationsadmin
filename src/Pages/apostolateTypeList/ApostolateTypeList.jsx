import React from "react";
import "./ApostolateTypeList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ApostolateTypeContext } from "../../context/apostolateTypeContext/ApostolateTypeContext";
import {
  deleteApostolateTypeCall,
  getApostolateTypesCall,
} from "../../context/apostolateTypeContext/ApostolateTypeApiCalls";

const ApostolateTypeList = () => {
  const { apostolateTypes, dispatch } = useContext(ApostolateTypeContext);

  useEffect(() => {
    getApostolateTypesCall(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteApostolateTypeCall(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "apostolateType",
      headerName: "Category",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img
              src={
                params.row.img ||
                "https://payload.cargocollective.com/1/24/788943/14047332/cyan_255.png"
              }
              alt=""
              className="productListImage"
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "desc", headerName: "About", width: 380 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/apostolatetype/" + params.row._id}>
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

  return !apostolateTypes.length > 0 ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="productList">
      <div className="postTitleContainer">
        <h1 className="postTitle">Apostolate Categories</h1>
        <Link to="/newapostolatetype">
          <button className="addPostButton">Create</button>
        </Link>
      </div>
      <div className="table">
        <DataGrid
          rows={apostolateTypes}
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

export default ApostolateTypeList;
