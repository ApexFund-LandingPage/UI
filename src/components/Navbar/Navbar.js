import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useWallet } from "use-wallet";

import styled from "styled-components";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "./logo.svg";
import Heading from "../Heading/Heading";
import { getHandsomeWalletAddress } from "../../utils";

const Link2 = styled(Link)`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const Navbar = () => {
  const wallet = useWallet();

  useEffect(() => {
    wallet.connect();
  }, []);

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const navItem = {
    buy: true,
    claim: false,
    referal: false,
    lending: false,
    staking: false,
    // default : true,
  };
  const [navbar, setNavbar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };



  useEffect(() => {
    const path = window.location.pathname.replace("/", "").toLowerCase()
    if (path ==="claim") {
      setActiveIndex(1)
    }else  if (path ==="referral") {
      setActiveIndex(2)
    }else  if (path ==="lending") {
      setActiveIndex(3)
    }else  if (path ==="stake") {
      setActiveIndex(4)
    }else  {
      setActiveIndex(0)
    }
  },[])
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navActiveLight" : "nav"}>
      <div>
        <Link
          to="/"
          spy={true}
          smooth={true}
          onClick={() => setActiveIndex(0)}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src={logo} alt="Logo" className="Logo"  />
          {/* <Heading
            faktumFont
            Text="HOLOBET"
            m="0 0 0 1rem"
            size="38px"
            ls="0.1rem"
          /> */}
        </Link>
      </div>
      <div className="RightContainer">
        <div className="PC">
          <ul className="list">
            <Link2
              to="/"
              onClick={() => setActiveIndex(0)}
              style={{
                background: activeIndex == 0 ? "#1C1C1C" : null,
                height: "6rem",
                padding: "0 2rem",
                color: activeIndex == 0 ? "#5E8CC9" : null,
              }}
            >
              BUY $HBT
            </Link2>

            <Link2
              to="/claim"
              onClick={() => setActiveIndex(1)}
              style={{
                background:  activeIndex == 1 ? "#1C1C1C" : null,
                height: "6rem",
                padding: "0 2rem",
                color:  activeIndex == 1? "#5E8CC9" : null,
              }}
            >
              CLAIM $HBT
            </Link2>

            <Link2
              to="/referral"
              onClick={() => setActiveIndex(2)}

              style={{
                background: activeIndex == 2 ? "#1C1C1C" : null,
                height: "6rem",
                padding: "0 2rem",
                color:  activeIndex == 2 ? "#5E8CC9" : null,
              }}
            >
              REFERRAL
            </Link2>

            <Link2
              to="/lending"
              onClick={() => setActiveIndex(3)}

              style={{
                background: activeIndex == 3 ? "#1C1C1C" : null,
                height: "6rem",
                padding: "0 2rem",
                color: activeIndex == 3? "#5E8CC9" : null,
              }}
            >
              LENDING
            </Link2>

            <Link2
              to="/stake"
              onClick={() => setActiveIndex(4)}

              style={{
                background: activeIndex == 4 ? "#1C1C1C" : null,
                height: "6rem",
                padding: "0 2rem",
                color:  activeIndex == 4? "#5E8CC9" : null,
              }}
            >
              STAKING
            </Link2>
          </ul>
        </div>

        <div className="PC">
          <Button
            nav
            height="2.75rem"
            Text={
              wallet.account
                ? getHandsomeWalletAddress(wallet.account)
                : "CONNECT WALLET"
            }
            Inheight="2.5rem"
            onClick={() => {
              console.log("clicked");
              wallet.connect();
            }}
          />
        </div>

        <div className="Mobile" ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
