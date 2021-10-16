import DefaultLayout from "../../components/DefaultLayout";
import SummaryContextProvider from "../../store/SummaryProvider";
import ServersList from "./components/ServersList";
import ServersSummary from "./components/ServersSummary";

const ServersPage = () => {
    return (
        <DefaultLayout>
            <SummaryContextProvider>
                <ServersSummary />
                <ServersList />
            </SummaryContextProvider>
        </DefaultLayout>
    );
};

export default ServersPage;
