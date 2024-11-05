import { Radar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { makeSelectAnalytics, makeSelectDarkmode } from "../../store/selectors";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const RelevanceChart = () => {
    const analytics = useSelector(makeSelectAnalytics)?.slice(250, 375); // Adjust slice as needed
    const darkmode = useSelector(makeSelectDarkmode);

    const categories = analytics.map((item) => item?.category || "Unknown"); // Assuming categories or labels in the data
    const relevanceScores = analytics.map((item) => item?.relevance || 0);

    const data = {
        labels: categories,
        datasets: [
            {
                label: "Relevance",
                data: relevanceScores,
                backgroundColor: darkmode ? "rgba(59, 130, 246, 0.5)" : "rgba(96, 165, 250, 0.5)", // Semi-transparent for better visibility
                borderColor: darkmode ? "#3b82f6" : "#60a5fa",
                borderWidth: 2,
                pointBackgroundColor: darkmode ? "#3b82f6" : "#60a5fa",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: darkmode ? "#3b82f6" : "#60a5fa",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
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
        animation: {
            duration: 800,
            easing: "easeInOutCubic",
        },
    };

    return (
        <div className="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4 dark:text-white">Relevance by Category</h2>
            <div className="relative h-80 md:h-96 lg:h-[30rem]">
                <Radar data={data} options={options} />
            </div>
        </div>
    );
};

export default RelevanceChart;
