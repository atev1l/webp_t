import './index.less';
import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./reducers";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/main/Main";


render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("root"),
)
