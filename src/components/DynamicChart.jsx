import React, { useState } from 'react';
import {
    BarChart,
    LineChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { LayoutGrid, LineChart as LineIcon } from 'lucide-react';

const data = [
    { name: 'PitchBook', value: 50 },
    { name: 'CoreSignal', value: 18 },
    { name: 'People Data Labs', value: 12 },
    { name: 'Crunchbase Enterprise', value: 50 },
];

const DynamicChart = () => {
    const [chartType, setChartType] = useState('bar');

    return (
        <div className="w-full h-[400px] bg-white p-6 rounded-xl shadow-sm border border-slate-100 mt-6 relative">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Dynamic Trend Analysis</h3>

                <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button
                        onClick={() => setChartType('bar')}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${chartType === 'bar'
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        <LayoutGrid size={16} />
                        Bar
                    </button>
                    <button
                        onClick={() => setChartType('line')}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${chartType === 'line'
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        <LineIcon size={16} />
                        Line
                    </button>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                {chartType === 'bar' ? (
                    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                        <Tooltip
                            cursor={{ fill: '#f8fafc' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="value" fill="#0369a1" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                ) : (
                    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#0369a1"
                            strokeWidth={3}
                            dot={{ r: 5, fill: '#0369a1' }}
                        />
                    </LineChart>
                )}
            </ResponsiveContainer>
        </div>
    );
};

export default DynamicChart;
