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

function Main() {
    return (
        <>
            <HashRouter>
                <>
                    <div>
                        <div className="one3media-header">
                            <title>ONE3MEDIA</title>
                            <h3>Professional Film/Photo</h3>
                            <ul id="one3media-nav">
                            <Stack direction="row" spacing={2}>
                                <Button><li><NavLink to="/">Home</NavLink></li></Button>
                                <Button><Button> <li><NavLink to="/Packages">Packages</NavLink></li></Button>
                                <Button><li><NavLink to="/Gallery">Gallery</NavLink></li></Button>
                                <Button></Button><li><NavLink to="/Contact">Contact</NavLink></li></Button>
                            </Stack>
                            </ul>
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
        </>
    );
}

export default Main;