import React, { useEffect } from 'react'
import IntensityChart from '../components/dashboard/IntensityChart';
import { useDispatch } from 'react-redux';
import { getAnalytics, resetAnalyitcs } from '../store/slices/analyticsSlice';
import LikelihoodChart from '../components/dashboard/LikelihoodChart';
import RelevanceChart from '../components/dashboard/RelevanceChart';
import CountryTopicsChart from '../components/dashboard/CountryTopicsChart';
import AnalyticsTable from '../components/dashboard/AnalyticsTable';

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAnalytics());
        return () => dispatch(resetAnalyitcs)
    }, []);
    return (
        <div className="min-h-screen dark:bg-slate-900 bg-white ">
            <div className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <IntensityChart />
                <LikelihoodChart />
                <RelevanceChart />
                <CountryTopicsChart />
            </div>
            <div className="container mx-auto p-6">

                <AnalyticsTable />
            </div>
        </div>
    )
}

export default Dashboard;
