import Card from "../../../../components/Card";
import "./styles.css";

const ServersList = () => {
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
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Server 1</td>
                        <td>10 GB</td>
                        <td>4 vCPUs</td>
                        <td>200 GB</td>
                        <td>10.0.0.1</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Server 1</td>
                        <td>10 GB</td>
                        <td>4 vCPUs</td>
                        <td>200 GB</td>
                        <td>10.0.0.1</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Server 1</td>
                        <td>10 GB</td>
                        <td>4 vCPUs</td>
                        <td>200 GB</td>
                        <td>10.0.0.1</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Server 1</td>
                        <td>10 GB</td>
                        <td>4 vCPUs</td>
                        <td>200 GB</td>
                        <td>10.0.0.1</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Server 1</td>
                        <td>10 GB</td>
                        <td>4 vCPUs</td>
                        <td>200 GB</td>
                        <td>10.0.0.1</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    );
};

export default ServersList;
