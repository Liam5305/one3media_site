import React from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import PackagesPage from "./pages/Packages";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import MediaBtns from "./SocialMediaBtns";
import BtmFooter from "./Footer";
import ButtonSX from "./ButtonStyles";

function Main() {
  return (
    <>
      <HashRouter>
        <>
          <div>
            <div className="one3media-header">
              <div className="header-title">
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 40,
                    textAlign: "center",
                    padding: "25px",
                    textDecoration: "underline"
                  }}
                >
                  ONE3MEDIA 
                </Typography>
              </div>
              <ul id="one3media-nav">
                <Stack direction="row" 
                marginLeft={5} marginRight={5} padding={2} spacing={4}
                >
                  <Button disableRipple sx={ButtonSX}>
                    <li>
                      <NavLink to="/">Home</NavLink> 
                    </li>
                  </Button>
                  <Button disableRipple sx={ButtonSX}>
                    <li>
                      <NavLink to="/Packages">Wedding Packages</NavLink>
                    </li>
                  </Button>
                  <Button disableRipple sx={ButtonSX}>
                    <li>
                      <NavLink to="/Gallery">Gallery</NavLink>
                    </li>
                  </Button>
                  <Button disableRipple sx={ButtonSX}>
                    <li>
                      <NavLink to="/Contact">Contact</NavLink>
                    </li>
                  </Button>
                </Stack>
              </ul>
              <MediaBtns />
            </div>
            <div className="content">
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/Packages" element={<PackagesPage />} />
                <Route exact path="/Gallery" element={<GalleryPage />} />
                <Route exact path="/Contact" element={<ContactPage />} />
              </Routes>
            </div>
          </div>
        </>
      </HashRouter>
      <BtmFooter />
    </>
  );
}

export default Main;
