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
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IntensityChart = () => {
    const analytics = useSelector(makeSelectAnalytics).slice(0, 125);
    const darkmode = useSelector(makeSelectDarkmode);
    const countries = analytics.map((item) => item?.country || "Unknown");
    const intensities = analytics.map((item) => item?.intensity || 0);

    const data = {
        labels: countries,
        datasets: [
            {
                label: "Intensity",
                data: intensities,
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
                },
            },
            tooltip: {
                backgroundColor: darkmode ? "#1e293b" : "#f1f5f9",
                titleColor: darkmode ? "#e5e7eb" : "#1f2937",
                bodyColor: darkmode ? "#e5e7eb" : "#1f2937",
                titleFont: { size: 14 },
                bodyFont: { size: 12 },
                padding: 10,
            },
        },
        scales: {
            x: {
                ticks: { color: darkmode ? "#e5e7eb" : "#1f2937", font: { size: 12 } },
            },
            y: {
                ticks: { color: darkmode ? "#e5e7eb" : "#1f2937", font: { size: 12 } },
                grid: {
                    color: darkmode ? "#334155" : "#cbd5e1",
                },
            },
        },
        animation: {
            duration: 800,
            easing: "easeInOutCubic",
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
    };

    return (
        <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4 dark:text-white">Intensity Distribution</h2>
            <div className="relative h-64 md:h-80 lg:h-96">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default IntensityChart;
