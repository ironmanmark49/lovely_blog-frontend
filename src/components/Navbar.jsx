import React, { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/Images/logo.svg";
import download from "../assets/Images/download.svg";

const selectOption = [
  {
    content: "ENG",
  },
  {
    content: "GUJ",
  },
];

const Navbar = () => {
  const [selectValue, setSelectValue] = useState("ENG");

  const handleSelection = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <section className="container" id="navBar">
        <div className="Navbar">
          <a href="/">
            <div className="Navbar-Left">
              <img src={logo} alt="error-logo" />
              <p>
                lovely<span>wallet</span>
              </p>
            </div>
          </a>

          <div className="Navbar-Right">
            <div className="Language">
              <select
                onChange={handleSelection}
                value={selectValue}
                className="select-lag"
              >
                {selectOption.map((options, key) => (
                  <option
                    value={options.content}
                    key={key}
                    className="bg-card-bg "
                  >
                    {options.content}
                  </option>
                ))}
              </select>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.lovely_wallet_2&pcampaignid=web_share" target="_blank" rel="noreferrer noopener">
              <button className="download-flex-btn btn">
                <img src={download} alt="" />
                <span>DOWNLOAD</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
