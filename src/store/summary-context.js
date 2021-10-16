import { createContext } from "react";

const SummaryContext = createContext({
    selectedServers: [],
    totalMemory: 0,
    totalCPU: 0,
    totalDisk: 0,
    addServer: (server) => {},
    removeServer: (server) => {}
});

export default SummaryContext;
