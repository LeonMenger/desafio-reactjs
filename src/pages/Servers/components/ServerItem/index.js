import { useContext } from "react";
import SummaryContext from "../../../../store/summary-context";

const ServerItem = ({ server }) => {
    const { addServer, removeServer } = useContext(SummaryContext);

    const onChangeHandler = (e) => {
        if (e.target.checked) {
            addServer(server);
        } else {
            removeServer(server);
        }
    };

    return (
        <tr>
            <td>
                <input type="checkbox" onChange={onChangeHandler} />
            </td>
            <td>{server.hostname}</td>
            <td>{`${server.configuracao.memoryProvisioned} GB`}</td>
            <td>{`${server.configuracao.cpuProvisioned} vCPUs`}</td>
            <td>{`${server.configuracao.totalDiskGB} GB`}</td>
            <td>{server.ip}</td>
        </tr>
    );
};

export default ServerItem;
