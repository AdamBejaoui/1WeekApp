import React from 'react'
import { Dropdown, Navbar, Avatar } from "flowbite-react";

function List() {
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
            <Navbar.Link href="/List">List</Navbar.Link>
            <Navbar.Link href="/Add">Add</Navbar.Link>
            <Navbar.Link href="/Yourbooks">Your Books</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default List