import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { PATHS } from "./paths";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={PATHS.home} component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
