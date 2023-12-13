// Home.js
import {Link} from 'react-router-dom'
import React from "react";
import img1 from "../images/img1.jpg";

const Blogs = () => {
  return (
    <div className="bg-black">
      <h1 className="text-1xl font-bold mb-4 text-yellow-200">Welcome to the Blogs Page</h1>
      <img
        src={img1}
        alt="Home Page Image"
        className="mb-4 w-full h-auto rounded-lg"
      />
      
      <p>Your content goes here...</p>
      <footer className="mt-20 border-t pt-4 text-center">
        <p>&copy; 2023 Your Website Name</p>
      </footer>
    </div>
  );
};

export default Blogs;
