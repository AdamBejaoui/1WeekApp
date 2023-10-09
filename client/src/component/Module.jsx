import React from "react";

function Module({ book, close }) {
  if (!book) {
    return null;
  }

  let cover =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div>
      <div
        className="fixed inset-0 z-40 backdrop-filter backdrop-blur-sm"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ></div>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        key={book.id}
      >
        <div className="relative w-full max-w-2xl">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {book.volumeInfo.title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={close}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="w-20 h-20">
                <img
                  src={cover}
                  alt="Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <h className="text-xl font-semibold text-gray-900 dark:text-white">
                {book.volumeInfo.authors}
              </h>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                {book.volumeInfo.publisher}
                <span>{book.volumeInfo.publishedDate}</span>
              </h4>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {book.volumeInfo.description.slice(0, 700) + "..."}
              </p>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Add to List
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module;
