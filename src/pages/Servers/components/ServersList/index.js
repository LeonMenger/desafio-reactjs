import { useEffect, useState } from "react";
import Card from "../../../../components/Card";
import useSortableData from "../../../../hooks/useSortableData";
import api from "../../../../services/api";
import ServerItem from "../ServerItem";
import "./styles.css";

const ServersList = () => {
    const { sortedData, setSortedData, sortBy } = useSortableData();

    useEffect(() => {
        api.get("servers")
            .then(({ data }) => {
                setSortedData(data);
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
        </Card>
    );
};

export default ServersList;
