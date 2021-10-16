import { createContext } from "react";

const SummaryContext = createContext({
    selectedServers: [],
    totalMemory: 0,
    totalCPU: 0,
    totalDisk: 0,
    addServer: (item) => {},
    removeServer: (id) => {}
});

const initialSummaryState = {
    selectedServers: [],
    totalMemory: 0,
    totalCPU: 0,
    totalDisk: 0
};

const summaryReducer = (state, action) => {
    if (action.type === "ADD") {
        const server = action.payload;
        const updatedServers = state.selectedServers.concat(server);
        const updatedTotalMemory = state.totalMemory + server.configuracao.memoryProvisioned;
        const updatedTotalCPU = state.totalCPU + server.configuracao.cpuProvisioned;
        const updatedTotalDisk = state.totalDisk + server.configuracao.totalDiskGB;

        return {
            selectedServers: updatedServers,
            totalMemory: updatedTotalMemory,
            totalCPU: updatedTotalCPU,
            totalDisk: updatedTotalDisk
        };
    }
    if (action.type === "REMOVE") {
        const server = action.payload;
        const updatedServers = state.selectedServers.filter(
            (item) => item.id_vm !== action.payload
        );
        const updatedTotalMemory = state.totalMemory - server.configuracao.memoryProvisioned;
        const updatedTotalCPU = state.totalCPU - server.configuracao.cpuProvisioned;
        const updatedTotalDisk = state.totalDisk - server.configuracao.totalDiskGB;

        return {
            selectedServers: updatedServers,
            totalMemory: updatedTotalMemory,
            totalCPU: updatedTotalCPU,
            totalDisk: updatedTotalDisk
        };
    }

    return initialSummaryState;
};

const SummaryContextProvider = (props) => {
    const [summaryState, dispatchSummaryAction] = useReducer(summaryReducer, initialSummaryState);

    const addServerHandler = (server) => {
        dispatchSummaryAction({ type: "ADD", payload: server });
    };
    const removeServerHandler = (id) => {
        dispatchSummaryAction({ type: "REMOVE", payload: id });
    };

    const summaryContext = {
        selectedServers: summaryState.selectedServers,
        totalMemory: summaryState.totalMemory,
        totalCPU: summaryState.totalCPU,
        totalDisk: summaryState.totalDisk,
        addServer: addServerHandler,
        removeServer: removeServerHandler
    };

    return (
        <SummaryContext.Provider value={summaryContext}>{props.children}</SummaryContext.Provider>
    );
};

export default SummaryContextProvider;
