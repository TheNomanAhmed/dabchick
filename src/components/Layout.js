import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 mx-auto p-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
