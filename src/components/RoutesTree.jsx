import React from "react";
import { Route, Routes } from "react-router-dom";

// Component Imports
import { Login } from "./login/login";
import { Homepage } from "./homepage/homepage";


const RoutesTree = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Homepage />}></Route>
            </Routes>
        </div>
    );
};

export default RoutesTree;