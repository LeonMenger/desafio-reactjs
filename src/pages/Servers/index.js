import DefaultLayout from "../../components/DefaultLayout";
import ServersList from "./components/ServersList";
import ServersSummary from "./components/ServersSummary";

const ServersPage = () => {
    return (
        <DefaultLayout>
            <ServersSummary />
            <ServersList />
        </DefaultLayout>
    );
};

export default ServersPage;
