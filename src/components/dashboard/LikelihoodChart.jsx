import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { makeSelectAnalytics, makeSelectDarkmode } from "../../store/selectors";
import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const LikelihoodChart = () => {
    const analytics = useSelector(makeSelectAnalytics)?.slice(126, 250);
    const darkmode = useSelector(makeSelectDarkmode);

    const regions = analytics.map((item) => item?.region || "Unknown");
    const likelihoods = analytics.map((item) => item?.likelihood || 0);

    const data = {
        labels: regions,
        datasets: [
            {
                label: "Likelihood",
                data: likelihoods,
                backgroundColor: [
                    darkmode ? "#3b82f6" : "#60a5fa",
                    darkmode ? "#1e3a8a" : "#2563eb",
                    darkmode ? "#9333ea" : "#a855f7",
                    darkmode ? "#f59e0b" : "#fcd34d",
                    darkmode ? "#ef4444" : "#f87171",
                ],
                hoverBackgroundColor: [
                    darkmode ? "#1e40af" : "#3b82f6",
                    darkmode ? "#1e3a8a" : "#2563eb",
                    darkmode ? "#7e22ce" : "#a855f7",
                    darkmode ? "#d97706" : "#fcd34d",
                    darkmode ? "#dc2626" : "#f87171",
                ],
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
        elements: {
            arc: {
                borderWidth: 2,
            },
        },
        layout: {
            padding: 20,
        },
        animation: {
            duration: 800,
            easing: "easeInOutCubic",
        },
    };

    return (
        <div className="p-4 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4 dark:text-white">Likelihood by Region</h2>
            {/* Increase the height of the doughnut chart container */}
            <div className="relative h-80 md:h-96 lg:h-[30rem]">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default LikelihoodChart;
