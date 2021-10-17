import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PATHS } from "./paths";

const Home = lazy(() => import("../pages/Home"));
const ServersPage = lazy(() => import("../pages/Servers"));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="Loading...">
                <Switch>
                    <Route path={PATHS.home} component={Home} exact />
                    <Route path={PATHS.servers} component={ServersPage} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
