import { useEffect, useState } from "react";
import Card from "../../../../components/Card";
import api from "../../../../services/api";
import "./styles.css";

const ServersList = () => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        api.get("servers")
            .then(({ data }) => {
                console.log(data);
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
                        <tr key={server.id_vm}>
                            <td>
                                <input type="checkbox" onChange={(server) => console.log(server)} />
                            </td>
                            <td>{server.hostname}</td>
                            <td>{`${server.configuracao.memoryProvisioned} GB`}</td>
                            <td>{`${server.configuracao.cpuProvisioned} vCPUs`}</td>
                            <td>{`${server.configuracao.totalDiskGB} GB`}</td>
                            <td>{server.ip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};

export default ServersList;
