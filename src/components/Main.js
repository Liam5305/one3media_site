import React from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom'


import HomePage from "./pages/Home";


function Main() {
    return (
        <>
            <HashRouter>
                <>
                    <div>
                        <div className="one3media-header">
                            <h1>ONE3MEDIA</h1>
                            <h3>Professional Film/Photo</h3>
                            <ul className="nav">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/">Packages</NavLink></li>
                                <li><NavLink to="/">Gallery</NavLink></li>
                                <li><NavLink to="/">Contact</NavLink></li>
                                {/* Add more navs here */}
                            </ul>
                        </div>
                        <div className="content">
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                                {/* <Route exact path="/packages" element={<HomePage />} />
                                <Route exact path="/gallery" element={<HomePage />} />
                                <Route exact path="/contact" element={<HomePage />} />
                                 Links to more navs here  */}
                            </Routes>
                        </div>
                    </div>
                </>
            </HashRouter>
        </>
    );
}

export default Main;