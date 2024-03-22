import React from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import HomePage from "./pages/Home";
import PackagesPage from "./pages/Packages";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Footer from "./Footer";
import BackDrop from "./BackgroundDrop";


function Main() {
    return (
        <>
            <HashRouter>
                <>
                    <div>
                        <div className="one3media-header">
                            <Typography sx={{ color: "grey", fontWeight: 'medium', fontSize: 35, textAlign: 'center', padding: '25px', textDecoration: 'underline'}}>ONE3MEDIA | Professional Film/Photography</Typography>
                            <ul id="one3media-nav">
                            <Stack direction="row" spacing={4}>
                                <Button><li><NavLink to="/">Home</NavLink></li></Button>
                                <Button><li><NavLink to="/Packages">Wedding Packages</NavLink></li></Button>
                                <Button><li><NavLink to="/Gallery">Gallery</NavLink></li></Button>
                                <Button><li><NavLink to="/Contact">Contact</NavLink></li></Button>
                            </Stack>
                            </ul>
                            <Footer/>
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
            <BackDrop/>
            {/* <Footer/> */}
        </>
    );
}

export default Main;