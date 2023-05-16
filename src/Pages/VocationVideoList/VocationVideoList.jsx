import React from "react";
import "./VocationVideoList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { VocationVideoContext } from "../../context/vocationVideoContext/VocationVideoContext";
import {
  deleteVocationVideoCall,
  getVocationVideosCall,
} from "../../context/vocationVideoContext/VocationVideoApiCalls";

const VocationVideoList = () => {
  const { vocationVideos, dispatch } = useContext(VocationVideoContext);

  useEffect(() => {
    getVocationVideosCall(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteVocationVideoCall(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "vocationVideo",
      headerName: "Video",
      width: 500,
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
    // { field: "desc", headerName: "Description", width: 300 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/vocationvideo/" + params.row._id}>
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

  return !vocationVideos.length > 0 ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="productList">
      <div className="postTitleContainer">
        <h1 className="postTitle">Vocation Videos</h1>
        <Link to="/newvocationvideo">
          <button className="addPostButton">Create</button>
        </Link>
      </div>
      <div className="table">
        <DataGrid
          rows={vocationVideos}
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

export default VocationVideoList;
