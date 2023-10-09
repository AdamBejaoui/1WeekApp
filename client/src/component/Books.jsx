import React, { useState } from "react";
import Module from "./Module.jsx";

function Books({ book }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <div className="cards-container">
        {book.map((item) => {
          let cover = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <div className="property-card" key={item.id} onClick={() => handleBookClick(item)}>
              <a href="#">
                <div className="property-image">
                  <img src={cover} alt="Book Cover" />
                </div>
              </a>
              <div className="property-description">
                <h5>{item.volumeInfo.title.slice(0, 15) + "..."}</h5>
                <p>
                  Author: {item.volumeInfo.authors}
                </p>
              </div>
              <a href="#">
                <div className="property-social-icons">more info</div>
              </a>
            </div>
          );
        })}
      </div>
      {selectedBook && (
        <Module book={selectedBook} close={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default Books;
