import React from "react";

const Book = ({ book, index, toggleStatus }) => {
  return (
    <li>
      <span>{index}</span>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <span>{book.status === "CHECKED OUT" ? book.dueDate : "N/A"}</span>
      <span>{book.status}</span>
      <button onClick={toggleStatus}>Toggle Status</button>
    </li>
  );
};

export default Book;
