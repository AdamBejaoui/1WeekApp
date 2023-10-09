import React,{useState,useEffect} from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import {useNavigate} from "react-router-dom"
import Books from "./Books";
import axios from "axios";
export default function Home() {

const [search, setSearch] = useState("")
const [bookData, setData] = useState([])
const [auth, setAuth] = useState(false)
const [name, setName] = useState({ username: "", email: "" });

const navigate = useNavigate()


useEffect(() => {
axios.get('http://localhost:5000/data').then((res) => {
    if(res.data.Status === "success") {
      setAuth(true);
      setName(res.data.username)
      navigate('/Home');
    }else {
      setAuth(false);
    }

}).then((err) => console.log(err))
}, []);



const searchBook = (e) => {
  e.preventDefault()

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDoVBA4Ti4O_88gZouRWB4cSZo6wVK-pTE&maxResults=40`

    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        console.error(err);
      });
};

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand >
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
            label={
              <Avatar
                alt="User settings"
                img=""
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span>
              </span>
              <span className="block truncate text-sm font-medium">
              </span>
            </Dropdown.Header>
            <p>Settings</p>
            <Dropdown.Divider href="/" />
            <p className="hover:cursor-pointer">Sign out
            </p>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <div >
          <Navbar.Collapse className="text-center">
            <Navbar.Link active href="/Home">
              <p >
                Home
              </p>
            </Navbar.Link>
            <Navbar.Link href="/List">List</Navbar.Link>
            <Navbar.Link href="/Add">Add</Navbar.Link>
            <Navbar.Link href="/Yourbooks">Your Books</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
<div className="bg-search-bg-image">
      <div className="flex items-center justify-center h-3/5">
        <form className="w-1/3 p-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Find you book by choice..."
              value={search} onChange={e=>setSearch(e.target.value)}
             
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={searchBook}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      </div>

      <div className="container">
        {
         <Books book={bookData}/> 
        }

</div>
    </div>
    
  );
}
