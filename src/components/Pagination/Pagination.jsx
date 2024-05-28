import React from "react";

import "./Pagination.css";

export const Pagination = ({ page, totalPages, onPageChange }) => {
  const pages = [];
  const startPage = Math.max(page - 2, 1);
  const endPage = Math.min(page + 2, totalPages);

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push("...");
    }
    pages.push(totalPages);
  }

  return (
    <div className="pagination">
      {page > 1 && <span onClick={() => onPageChange(page - 1)}>&lsaquo;</span>}
      {pages.map((pageNumber, index) => (
        <span
          key={index}
          className={pageNumber === page ? "active" : ""}
          onClick={() =>
            typeof pageNumber === "number" && onPageChange(pageNumber)
          }
        >
          {pageNumber}
        </span>
      ))}
      {page < totalPages && (
        <span onClick={() => onPageChange(page + 1)}>&rsaquo;</span>
      )}
    </div>
  );
};
