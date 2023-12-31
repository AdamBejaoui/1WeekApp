import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Yourbookmodule({book,close}) { 
 console.log(close);
    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/books/${id}`)
            console.log(id)
            window.location.reload()
    
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      <div
        className="fixed inset-0 z-40 backdrop-filter backdrop-blur-sm"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-full max-w-2xl">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {book.title}
              </h3>
              <button
              onClick={close} 
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="w-20 h-20">
                <img
                  src={book.cover}
                  alt="Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {book.desc}
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => handleDelete(book.id)}
              >
                Remove
              </button>
              <button
                
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                <Link to={`/update/${book.id}`}>Edite</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yourbookmodule;
