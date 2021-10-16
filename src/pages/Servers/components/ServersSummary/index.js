import { useContext } from "react";
import Card from "../../../../components/Card";
import SummaryContext from "../../../../store/summary-context";
import "./styles.css";

const ServersSummary = () => {
    const { selectedServers, totalMemory, totalCPU, totalDisk } = useContext(SummaryContext);

    return (
        <Card title="Sumário dos recursos dos servidores">
            <table className="summary-table">
                <tbody>
                    <tr>
                        <td>Servidores Selecionados</td>
                        <td>{`${selectedServers.length} servidores selecionados`}</td>
                    </tr>
                    <tr>
                        <td>Total de Memória</td>
                        <td>{`${totalMemory} GB`}</td>
                    </tr>
                    <tr>
                        <td>Total de CPUs</td>
                        <td>{`${totalCPU} vCPUs`}</td>
                    </tr>
                    <tr>
                        <td>Total de Discos</td>
                        <td>{`${totalDisk} GB`}</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    );
};

export default ServersSummary;
