import React,{useState, useEffect} from 'react'
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import axios from 'axios'

export default function Yourbooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks  = async () => {
         try {
     const res = await axios.get("http://localhost:5000/books")
     setBooks(res.data)
         }catch(err) {
             console.log(err)    }
        }
        fetchAllBooks()
     },[])

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
      <span>user name</span>
      <span className="block truncate text-sm font-medium">
        email@email.com
      </span>
    </Dropdown.Header>
    <p>Settings</p>
    <Dropdown.Divider />
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
    <Navbar.Link href="#">List</Navbar.Link>
    <Navbar.Link href="/Add">Add</Navbar.Link>
    <Navbar.Link href="/Yourbooks">Your Books</Navbar.Link>
  </Navbar.Collapse>
</div>
</Navbar>
      <div>
        <div className="cards-container">
        {books.map(books => (

              <div className="property-card" key={books.id}>
                <a href="#">
                  <div className="property-image">
                    <img src={books.cover} />
                  </div>
                </a>
                <div className="property-description">
                  <h5>{books.title}</h5>
                  <p>
                   {books.desc}
                  </p>
                </div>
                <a href="#">
                  <div className="property-social-icons">more info</div>
                </a>
              </div>

        ))}
          </div>
      </div>
      </div>
    );
}
