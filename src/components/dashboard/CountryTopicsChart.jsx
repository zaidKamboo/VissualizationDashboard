import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { makeSelectAnalytics, makeSelectDarkmode } from "../../store/selectors";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CountryChart = () => {
    const analytics = useSelector(makeSelectAnalytics)?.slice(500, 625); // Adjust slice as needed
    const darkmode = useSelector(makeSelectDarkmode);

    const countries = Array.from(new Set(analytics.map((item) => item?.country || "Unknown")));

    // Calculate a value for each country (for example, total relevance or average)
    const countryValues = countries.map((country) => {
        const countryData = analytics.filter(item => item?.country === country);
        const totalValue = countryData.reduce((sum, item) => sum + (item?.relevance || 0), 0); // Replace 'relevance' with the metric you want
        return totalValue / (countryData.length || 1); // Calculate average, or use totalValue directly if preferred
    });

    const data = {
        labels: countries,
        datasets: [
            {
                label: "Average Relevance by Country", // Change label as appropriate
                data: countryValues,
                backgroundColor: darkmode ? "#3b82f6" : "#60a5fa",
                hoverBackgroundColor: darkmode ? "#1e40af" : "#3b82f6",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: darkmode ? "#e5e7eb" : "#1f2937",
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                backgroundColor: darkmode ? "#1e293b" : "#f1f5f9",
                titleColor: darkmode ? "#e5e7eb" : "#1f2937",
                bodyColor: darkmode ? "#e5e7eb" : "#1f2937",
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
                padding: 10,
            },
        },
        scales: {
            x: {
                stacked: false,
                ticks: {
                    color: darkmode ? "#e5e7eb" : "#1f2937",
                    font: { size: 12 },
                },
                grid: {
                    color: darkmode ? "#334155" : "#cbd5e1",
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: darkmode ? "#e5e7eb" : "#1f2937",
                    font: { size: 12 },
                },
                grid: {
                    color: darkmode ? "#334155" : "#cbd5e1",
                },
            },
        },
        animation: {
            duration: 800,
            easing: "easeInOutCubic",
        },
    };

    return (
        <div className="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4 dark:text-white">Average Relevance by Country</h2>
            <div className="relative h-80 md:h-96 lg:h-[30rem]">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default CountryChart;
