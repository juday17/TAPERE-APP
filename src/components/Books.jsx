import React, { useState, useEffect } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";

//  THIS IS A FUNCTION TO GENERATE A RANDOM DATE WITHIN THE NEXT 30 DAYS TO EACH BOOKS THAT IS CHECKED OUT
const generateRandomDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 30) + 1; // THIS WILL ENSURES AT LEAST 1 DAY FROM NOW
  const dueDate = new Date(today);
  dueDate.setDate(today.getDate() + randomDays);
  return dueDate.toISOString().split("T")[0];
};

// SAMPLE BOOK DATA
const booksData = [
  {
    title: "Start with Why: How Great Leaders Inspire Everyone to Take Action",
    author: "JOHN",
    dueDate: generateRandomDate(),
    status: "CHECKED OUT",
  },
  {
    title: "The Four Agreements",
    author: "JARIE",
    dueDate: "",
    status: "AVAILABLE",
  },
  {
    title: "Good to Great ",
    author: "MIKE",
    dueDate: generateRandomDate(),
    status: "CHECKED OUT",
  },
  {
    title: "Mindset: The New Psychology of Success",
    author: "LISA",
    dueDate: generateRandomDate(),
    status: "CHECKED OUT",
  },
  {
    title: "Think and Grow Rich",
    author: "LISA",
    dueDate: generateRandomDate(),
    status: "CHECKED OUT",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "JARIE",
    dueDate: "",
    status: "AVAILABLE",
  },
  {
    title: "The Power is Within You",
    author: "MIKE",
    dueDate: generateRandomDate(),
    status: "CHECKED OUT",
  },
  { title: "I Can Dream ", author: "JARIE", dueDate: "", status: "AVAILABLE" },
  {
    title: "The Secret ",
    author: "JOHN",
    dueDate: generateRandomDate(),
    status: "CHECKED OUT",
  },
  {
    title: "Big Magic: Creative Living Beyond Fear",
    author: "MIKE",
    dueDate: "",
    status: "AVAILABLE",
  },
];

const Books = () => {
  const [books, setBooks] = useState(booksData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  useEffect(() => {
    if (searchQuery) {
      setFilteredBooks(
        books.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredBooks(books);
    }
  }, [searchQuery, books]);

  const toggleStatus = (index) => {
    const newBooks = [...books];
    newBooks[index].status =
      newBooks[index].status === "CHECKED OUT" ? "AVAILABLE" : "CHECKED OUT";
    newBooks[index].dueDate =
      newBooks[index].status === "CHECKED OUT" ? generateRandomDate() : ""; // THIS IS TO CLEAR THE DUE DATE OR N/A IF THE STATUS IS CHANGED TO AVAILABLE
    setBooks(newBooks);
  };

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <header>
        <span>NO.</span>
        <span>TITLE</span>
        <span>AUTHOR</span>
        <span>DUE DATE</span>
        <span>STATUS</span>
        <span>ACTION</span>
      </header>
      <ul>
        {filteredBooks.map((book, index) => (
          <Book
            key={index}
            book={book}
            index={index + 1}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Books;
