import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from "./pages/MainPage";
import ImageUpload from "./pages/ImageUpload";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/" exact component={ImageUpload}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;