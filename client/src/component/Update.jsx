import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import axios from "axios";

export default function Update() {
const [book, setbook] = useState({
    title: "",
    desc: "",
    cover: "",
  });
  console.log(book)

  const navigate = useNavigate();
  const location = useLocation()


  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setbook((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/books/"+bookId,book);
      navigate("/Yourbooks");
    } catch (err) {
      console.log(err);
    }
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
            <Navbar.Link href="/List">List</Navbar.Link>
            <Navbar.Link href="/Add">Add</Navbar.Link>
            <Navbar.Link href="/Yourbooks">Your Books</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#F2F2F2' }}>
        <div style={{ backgroundColor: '#F2F2F2' }}>
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
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="col-span-3 sm:col-span-2">
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="cover"
                          id="cover"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Your cover url"
                          onChange={handleChange}
                        />
                      </div>
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
                    Update
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