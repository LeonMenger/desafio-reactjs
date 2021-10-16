import { useEffect, useState } from "react";
import Card from "../../../../components/Card";
import api from "../../../../services/api";
import ServerItem from "../ServerItem";
import "./styles.css";

const ServersList = () => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        api.get("servers")
            .then(({ data }) => {
                setServers(data);
            })
            .catch((err) => {
                console.error("Erro: " + err);
            });
    }, []);

    return (
        <Card title="Tabela de servidores">
            <table className="list-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Hostname</th>
                        <th>Memória</th>
                        <th>vCPUs</th>
                        <th>Disco</th>
                        <th>IP</th>
                    </tr>
                </thead>
                <tbody>
                    {servers?.map((server) => (
                        <ServerItem key={server.id_vm} server={server} />
                    ))}
                </tbody>
            </table>
        </Card>
    );
};

export default ServersList;
