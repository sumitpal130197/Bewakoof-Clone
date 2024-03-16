import React, { useState } from "react";

function Dropdown() {
  const [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => toggleFunc()}
        >
          Category
        </button>
        <div
          class={toggle ? "dropdown-menu show" : "dropdown-menu"}
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
