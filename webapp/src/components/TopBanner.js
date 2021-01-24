import React, { useCallback, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  Card from "react-bootstrap/Card";
import apikey from "../utils/LunarCrush";
const axios = require("axios");

const baseURL =
  "https://api.lunarcrush.com/v2/assets?data=assets&key=" + apikey;
const baseURL2 =
  "https://api.lunarcrush.com/v2/assets?data=meta&key=" + apikey + "&type=full";

function TopBanner({ symbol }) {
  const [coinData, setCoinData] = useState('{}');


  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <svg
          className="logoman"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M512 400v32a16 16 0 0 1-16 16H32a32 32 0 0 1-32-32V80a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v304h432a16 16 0 0 1 16 16z"
            class="fa-secondary"
          />
          <path
            fill="currentColor"
            d="M480 112v118.05c0 21.38-25.85 32.09-41 17l-32.4-32.4-96 96a32 32 0 0 1-45.25 0L192 237.25l-46.06 46.07a16 16 0 0 1-22.63 0l-22.62-22.62a16 16 0 0 1 0-22.63l68.69-68.69a32 32 0 0 1 45.25 0L288 242.75l73.37-73.38L329 137c-15.12-15.12-4.41-41 17-41h118a16 16 0 0 1 16 16z"
            class="fa-primary"
          />
        </svg>
        {"  Bitcoin Buddy"}
      </Navbar.Brand>


    </Navbar>
  );
}

export default TopBanner;
