import React from "react";
import { Link } from "react-router-dom";

const Paginations = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to={currentPage-1} onClick={() => paginate(currentPage-1)} aria-label="Previous">
            Previous
          </Link>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to={number}
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </Link>
          </li>
        ))}
        
        <li className="page-item">
          <Link  to={currentPage+1} onClick={() => paginate(currentPage+1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Paginations;
