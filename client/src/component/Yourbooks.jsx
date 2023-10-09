import React, { useState, useEffect } from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import axios from "axios";
import Yourbookmodule from "./Yourbookmodule";

export default function Yourbooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <div>
            <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <img
                alt="Logo"
                className="mr-3 h-6 sm:h-9"
                src="https://static.vecteezy.com/system/resources/thumbnails/004/853/320/small/book-read-library-study-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
              />
              BookXlist
            </p>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="" rounded />}
          >
            <Dropdown.Header>
              <span>user name</span>
              <span className="block truncate text-sm font-medium">
                email@email.com
              </span>
            </Dropdown.Header>
            <p>Settings</p>
            <Dropdown.Divider />
            <p className="hover:cursor-pointer">Sign out</p>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <div>
          <Navbar.Collapse className="text-center">
            <Navbar.Link active href="/Home">
              <p>Home</p>
            </Navbar.Link>
            <Navbar.Link href="/List">List</Navbar.Link>
            <Navbar.Link href="/Add">Add</Navbar.Link>
            <Navbar.Link href="/Yourbooks">Your Books</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="cards-container ">
        {books.map((book) => (
          <div
            className="property-card"
            key={book.id}
            onClick={() => handleBookClick(book)}
          >
            <a href="#">
              <div className="property-image">
                <img src={book.cover} alt={book.title} />
              </div>
            </a>
            <div className="property-description">
              <h5>{book.title}</h5>
              <p>{book.desc}</p>
            </div>
            <a href="#">
              <div className="property-social-icons">more info</div>
            </a>

       
          </div>
        ))}
      </div>
      {selectedBook && (
              <Yourbookmodule book={selectedBook} close={()=> setSelectedBook(null)}/>
            )}
    </div>
  );
}
