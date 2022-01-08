import React from 'react';
import './app.less'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Main from "./main/Main";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
