import { useState } from "react";
import { useSelector } from "react-redux";
import { makeSelectAnalytics } from "../../store/selectors";
import { FaFilter } from "react-icons/fa";

const AnalyticsTable = () => {
    const analytics = useSelector(makeSelectAnalytics);

    const [filters, setFilters] = useState({
        endYear: "",
        topic: "",
        sector: "",
        region: "",
        pest: "",
        source: "",
        swot: "",
        country: "",
        city: "",
    });

    const handleFilterChange = ({ target: { name: n, value: v } }) =>
        setFilters((prevFilters) => ({
            ...prevFilters,
            [n]: v,
        }));


    const filteredData = analytics.filter(({ end_year, topic, sector, region, pestle, source, swot, country, city }) => {
        return (
            (!filters.endYear || end_year === filters.endYear) &&
            (!filters.topic || topic === filters.topic) &&
            (!filters.sector || sector === filters.sector) &&
            (!filters.region || region === filters.region) &&
            (!filters.pest || pestle === filters.pest) &&
            (!filters.source || source === filters.source) &&
            (!filters.swot || swot === filters.swot) &&
            (!filters.country || country === filters.country) &&
            (!filters.city || city === filters.city)
        );
    });

    return (
        <div className="flex flex-row p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full">
            <div className="w-full md:w-1/2 lg:w-1/5 pr-4">
                <div className="sticky top-0 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white flex items-center gap-2"><FaFilter size={14} />Filters</h2>
                    <div className="space-y-4">
                        {["endYear", "topic", "sector", "region", "pest", "source", "swot", "country", "city"].map((filterKey) => (
                            <div key={filterKey} className="flex flex-col">
                                <label className="block text-gray-600 dark:text-gray-400 text-sm font-medium">
                                    {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                                </label>
                                <input
                                    type="text"
                                    name={filterKey}
                                    value={filters[filterKey]}
                                    onChange={handleFilterChange}
                                    className="mt-1 block w-full p-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border rounded focus:ring-2 focus:ring-blue-500"
                                    placeholder={`Filter by ${filterKey}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-4/5 overflow-y-auto ml-4 max-h-[127.5vh]">
                <h2 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white">Economic Impact Analysis</h2>
                <table className="min-w-full bg-gray-50 dark:bg-gray-900 shadow-md rounded-lg">
                    <thead className="bg-gray-200 dark:bg-gray-700">
                        <tr>
                            {["End Year", "Topic", "Sector", "Region", "PEST", "Source", "Country", "City"].map((header) => (
                                <th key={header} className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(({ end_year, topic, sector, region, pestle, source, country, city }, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0
                                    ? "bg-gray-100 dark:bg-gray-800"
                                    : "bg-gray-50 dark:bg-gray-700"
                                    } border-b border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150`}
                            >
                                <td className="px-4 py-2 text-sm">{end_year}</td>
                                <td className="px-4 py-2 text-sm">{topic}</td>
                                <td className="px-4 py-2 text-sm">{sector}</td>
                                <td className="px-4 py-2 text-sm">{region}</td>
                                <td className="px-4 py-2 text-sm">{pestle}</td>
                                <td className="px-4 py-2 text-sm">{source}</td>
                                <td className="px-4 py-2 text-sm">{country}</td>
                                <td className="px-4 py-2 text-sm">{city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnalyticsTable;
