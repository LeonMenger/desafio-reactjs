import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServersPage from "../pages/Servers";
import { PATHS } from "./paths";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={PATHS.home} component={Home} exact />
                <Route path={PATHS.servers} component={ServersPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
