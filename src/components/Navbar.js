import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-teal-500 p-6">
      <ul className="flex ">
        <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          <Link to="/">Home</Link>
        </li>
        <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          <Link to="/products">Products</Link>
        </li>
        <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          <Link to="/examples">Examples</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
