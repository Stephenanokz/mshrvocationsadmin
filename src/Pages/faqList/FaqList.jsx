import React from "react";
import "./FaqList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FaqsContext } from "../../context/faqsContext/FaqsContext";
import {
  deleteFaqCall,
  getFaqsCall,
} from "../../context/faqsContext/FaqsApiCalls";

const FaqList = () => {
  const { faqs, dispatch } = useContext(FaqsContext);

  useEffect(() => {
    getFaqsCall(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteFaqCall(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "faq",
      headerName: "Faq",
      width: 250,
      renderCell: (params) => {
        return <div className="productListProduct">{params.row.question}</div>;
      },
    },
    { field: "answer", headerName: "Answer", width: 350 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/faq/" + params.row._id}>
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

  return !faqs.length > 0 ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="productList">
      <div className="postTitleContainer">
        <h1 className="postTitle">Frequently Asked Questions (FAQs)</h1>
        <Link to="/newfaq">
          <button className="addPostButton">Create</button>
        </Link>
      </div>
      <div className="table">
        <DataGrid
          rows={faqs}
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

export default FaqList;
