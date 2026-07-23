import React, { useState } from "react";
import Model from "../components/Model";
import InputForm from "../components/InputForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("Navbar Render:", isOpen);

  return (
    <>
      <header>
        <h2>Food Blog</h2>

        <ul>
          <li>Home</li>
          <li>My Recipe</li>
          <li>Favourite</li>

          <li
            onClick={() => {
              console.log("LOGIN CLICKED");
              setIsOpen(true);
            }}
          >
            Login
          </li>
        </ul>
      </header>

      {isOpen && (
        <Model onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={setIsOpen} />
        </Model>
      )}
    </>
  );
};

export default Navbar;