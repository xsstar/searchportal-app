import React, { useState, useEffect, Fragment } from "react";
import Data from "../data.json";

import OrderImg from "../../assets/images/orderby.png";
import Paginations from "../../components/Result/Paginations";

const ResultList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [sortType, setSortType] = useState("asc");
  const [searchString, setSearchString] = useState("");

  // Get current posts
  const indexOfLastData = currentPage * postsPerPage;
  const indexOfFirstData = indexOfLastData - postsPerPage;
  const currentDatas = Data.slice(indexOfFirstData, indexOfLastData);

  console.log(currentDatas);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sorted = currentDatas.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.name_surname.localeCompare(b.name_surname);
  });

  const onSort = () => {
    setSortType("desc");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(Data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <input
        className="result-search-input"
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        value={searchString}
      ></input>

      <img className="orderby-img" src={OrderImg} alt="order" />
      <p className="orderby-p ">Order By</p>
      <div className="order-list-box text-center">
        <div className="btn-group-vertical">
          <button
            className="order-btn-txt order-btn"
            onClick={() => onSort("asc")}
          >
            Name ascending
          </button>
          <button
            className="order-btn-txt order-btn"
            onClick={() => onSort("desc")}
          >
            Name descending
          </button>
          <button className="order-btn-txt order-btn" onClick={() => onSort()}>
            Year ascending
          </button>
          <button className="order-btn-txt order-btn" onClick={() => onSort()}>
            Year descending
          </button>
        </div>
      </div>
      <div className="result-list-box">
        <div className="container-fluid">
          {currentDatas
            .filter((item) => {
              return Object.keys(item).some((k) =>
                item[k]
                  .toString()
                  .toLowerCase()
                  .includes(searchString.toString().toLowerCase())
              );
            })
            .map((item) => {
              return (
                <Fragment key={item.id}>
                  <div className="row rslt-list">
                    <div className="col order-first country-txt">
                      {item.country} - {item.city}
                      <div className="row">
                        <div className="col order-first name-date-txt">
                          {item.name_surname} - {item.date.slice(6, 10)}
                        </div>
                      </div>
                    </div>
                    <div className="col order-last email-txt">
                      Email: {item.email}
                    </div>
                  </div>
                  <hr className="list-hr"></hr>
                </Fragment>
              );
            })}
        </div>
        <Paginations
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}

        />
      </div>
    </div>
  );
};

export default ResultList;
