import React, { useState } from "react";
import Data from "../data.json";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [employee, setEmployee] = useState(3);
  const [searchString, setSearchString] = useState("");

  return (
    <div>
      <div>
        <input
          className="landing-search-input"
          type="text"
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
        ></input>
      </div>
      <div className="search-list-box">
        <div className="container-fluid h-100">
          {Data.filter((item) => {
            return Object.keys(item).some((k) =>
              item[k]
                .toString()
                .toLowerCase()
                .includes(searchString.toString().toLowerCase())
            );
          })
            .slice(0, employee)
            .map((item) => {
              return (
                <div key={item.id}>
                  <div className="row">
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
                </div>
              );
            })}

          <div>
            {" "}
            <Link to="/result">
              <button className="show-more-btn">Show More..</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
