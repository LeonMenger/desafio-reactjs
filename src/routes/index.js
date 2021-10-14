import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
