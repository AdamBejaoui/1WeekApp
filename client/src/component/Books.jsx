import React from "react";

function  Books({ book }) {
  console.log(book);
  return (
    <div>
      <div className="cards-container">
      {book.map((item) => {

let cover = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
        return (
            <div className="property-card" key={item.id}>
              <a href="#">
                <div className="property-image">
                  <img src={cover} />
                </div>
              </a>
              <div className="property-description">
                <h5>{item.volumeInfo.title}</h5>
                <p>
                  Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo.
                  More Bingo. Lorem Ipum doth be hard.
                </p>
              </div>
              <a href="#">
                <div className="property-social-icons">more info</div>
              </a>
            </div>
        
        );
      })}
        </div>
    </div>
  );
}

export default Books;
