import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import axios from "axios";

export default function Add() {
  const [book, setbook] = useState({
    title: "",
    desc: "",
    cover: "",
  });
  console.log(book)

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setbook((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", book);
      navigate("/Yourbooks");
    } catch (err) {
      console.log(err);
    }
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file); // Create a URL for the uploaded image
    setbook((prev) => ({ ...prev, cover: imageUrl }));
  };

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
            <Navbar.Link href="#">List</Navbar.Link>
            <Navbar.Link href="/Add">Add</Navbar.Link>
            <Navbar.Link href="/Yourbooks">Your Books</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0"></div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Book Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Your Books name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="desc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="desc"
                        name="desc"
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Your Books description"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your book.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="True"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleFileUpload}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleClick}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
