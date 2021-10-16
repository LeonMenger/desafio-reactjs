const ServerItem = ({ server }) => {
    return (
        <tr>
            <td>
                <input type="checkbox" />
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
