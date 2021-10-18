import { useEffect } from "react";
import Card from "../../../../components/Card";
import useAxios from "../../../../hooks/useAxios";
import useSortableData from "../../../../hooks/useSortableData";
import ServerItem from "../ServerItem";
import { PATHS } from "../../../../routes/paths";
import "./styles.css";
import Loading from "../../../../components/Loading";

const ServersList = () => {
    const { response, loading, error } = useAxios(PATHS.servers);
    const { sortedData, setSortedData, sortBy } = useSortableData();

    useEffect(() => {
        if (response !== null) {
            setSortedData(response);
        }
    }, [response]);

    const tableContent = (
        <table className="list-table">
            <thead>
                <tr>
                    <th>Select</th>
                    <th
                        onClick={() => {
                            sortBy("hostname");
                        }}
                    >
                        Hostname
                    </th>
                    <th
                        onClick={() => {
                            sortBy("configuracao.memoryProvisioned");
                        }}
                    >
                        Memória
                    </th>
                    <th
                        onClick={() => {
                            sortBy("configuracao.cpuProvisioned");
                        }}
                    >
                        vCPUs
                    </th>
                    <th
                        onClick={() => {
                            sortBy("configuracao.totalDiskGB");
                        }}
                    >
                        Disco
                    </th>
                    <th
                        onClick={() => {
                            sortBy("ip");
                        }}
                    >
                        IP
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedData?.map((server) => (
                    <ServerItem key={server.id_vm} server={server} />
                ))}
            </tbody>
        </table>
    );

    const errorContent = <p className="error">Ops! Ocorreu um erro.</p>;

    return (
        <Card title="Tabela de servidores">
            {loading ? <Loading /> : error ? errorContent : tableContent}
        </Card>
    );
};

export default ServersList;
