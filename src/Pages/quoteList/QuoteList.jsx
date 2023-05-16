import React from "react";
import "./QuoteList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { QuoteContext } from "../../context/quoteContext/QuoteContext";
import {
  deleteQuoteCall,
  getQuotesCall,
} from "../../context/quoteContext/QuoteApiCalls";

const QuoteList = () => {
  const { quotes, dispatch } = useContext(QuoteContext);

  useEffect(() => {
    getQuotesCall(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteQuoteCall(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "quote",
      headerName: "Quote",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            {params.row.text}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/quote/" + params.row._id}>
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

  return !quotes.length > 0 ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="productList">
      <div className="postTitleContainer">
        <h1 className="postTitle">Founder's Quotes</h1>
        <Link to="/newquote">
          <button className="addPostButton">Create</button>
        </Link>
      </div>
      <div className="table">
        <DataGrid
          rows={quotes}
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

export default QuoteList;
