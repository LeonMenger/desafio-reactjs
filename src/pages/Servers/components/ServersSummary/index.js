import Card from "../../../../components/Card";
import "./styles.css";

const ServersSummary = () => {
    return (
        <Card title="Sumário dos recursos dos servidores">
            <table className="summary-table">
                <tbody>
                    <tr>
                        <td>Servidores Selecionados</td>
                        <td>4 servidores selecionados</td>
                    </tr>
                    <tr>
                        <td>Total de Memória</td>
                        <td>354 GB</td>
                    </tr>
                    <tr>
                        <td>Total de CPUs</td>
                        <td>75 vCPUs</td>
                    </tr>
                    <tr>
                        <td>Total de Discos</td>
                        <td>3096 GB</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    );
};

export default ServersSummary;
