import { useReducer } from "react";
import SummaryContext from "./summary-context";

const initialSummaryState = {
    selectedServers: [],
    totalMemory: 0,
    totalCPU: 0,
    totalDisk: 0
};

const summaryReducer = (state, action) => {
    let updatedSummary = { ...initialSummaryState };

    if (action.type === "ADD") {
        const server = action.payload;
        updatedSummary.selectedServers = state.selectedServers.concat(server);
        updatedSummary.totalMemory = state.totalMemory + server.configuracao.memoryProvisioned;
        updatedSummary.totalCPU = state.totalCPU + server.configuracao.cpuProvisioned;
        updatedSummary.totalDisk = state.totalDisk + server.configuracao.totalDiskGB;
    }
    if (action.type === "REMOVE") {
        const server = action.payload;
        updatedSummary.selectedServers = state.selectedServers.filter(
            (item) => item.id_vm !== server.id_vm
        );
        updatedSummary.totalMemory = state.totalMemory - server.configuracao.memoryProvisioned;
        updatedSummary.totalCPU = state.totalCPU - server.configuracao.cpuProvisioned;
        updatedSummary.totalDisk = state.totalDisk - server.configuracao.totalDiskGB;
    }

    return updatedSummary;
};

const SummaryContextProvider = (props) => {
    const [summaryState, dispatchSummaryAction] = useReducer(summaryReducer, initialSummaryState);

    const addServerHandler = (server) => {
        dispatchSummaryAction({ type: "ADD", payload: server });
    };
    const removeServerHandler = (server) => {
        dispatchSummaryAction({ type: "REMOVE", payload: server });
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
