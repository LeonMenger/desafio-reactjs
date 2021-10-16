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
                        <td>Select</td>
                        <td>Hostname</td>
                        <td>Memória</td>
                        <td>vCPUs</td>
                        <td>Disco</td>
                        <td>IP</td>
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
