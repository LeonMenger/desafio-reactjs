import { useState, useMemo } from "react";

const resolvePath = (object, path, defaultValue) =>
    path.split(".").reduce((o, p) => (o ? o[p] : defaultValue), object);

const useSortableData = () => {
    const [data, setData] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);

    const sortedData = useMemo(() => {
        let sortableData = [...data];

        if (data.length && sortConfig !== null) {
            sortableData.sort((a, b) => {
                const dataA = resolvePath(a, sortConfig.key, null);
                const dataB = resolvePath(b, sortConfig.key, null);

                if (dataA < dataB) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (dataA > dataB) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }

        return sortableData;
    }, [data, sortConfig]);

    const sortBy = (key) => {
        let direction = "ascending";

        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    return { sortedData, setSortedData: setData, sortBy };
};

export default useSortableData;
