import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Router() {
    return (
        <Router>
            <Switch>
                <Route path="bookInfo" element={<Book />} />
            </Switch>
        </Router>
    );
}