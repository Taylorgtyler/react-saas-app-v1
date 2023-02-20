import React from "react";
import { Route, Routes } from "react-router-dom";

// Component Imports
import { Login } from "./login/login";
import { HomePage } from "./homepage/HomePage";

const RoutesTree = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
            </Routes>
        </div>
    );
};

export default RoutesTree;