import React from 'react';
import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Text
} from 'recharts';

const data = [
    { name: 'PitchBook ', year1: 50, year2: 55, year3: 65 },
    { name: 'CoreSignal', year1: 18, year2: 24, year3: 30 },
    { name: 'People Data Labs', year1: 12, year2: 18, year3: 25 },
    { name: 'Crunchbase Enterprise', year1: 50, year2: 8, year3: 12 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-4 border border-slate-200 shadow-lg rounded-lg outline-none">
                <p className="font-bold text-slate-800 mb-2">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color }} className="text-sm font-medium">
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const CombinationChart = () => {
    return (
        <div className="w-full h-[400px] bg-white p-6 rounded-xl shadow-sm border border-slate-100 mt-6">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Market Comparison Analysis</h3>
            <ResponsiveContainer width="100%" height="90%">
                <ComposedChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        interval={0}
                        angle={-10}
                        textAnchor="end"
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        wrapperStyle={{ paddingTop: '20px' }}
                    />
                    <Bar dataKey="year1" name="Year 1" fill="#0f172a" barSize={35} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="year2" name="Year 2" fill="#f97316" barSize={35} radius={[4, 4, 0, 0]} />
                    <Line
                        type="monotone"
                        dataKey="year3"
                        name="Year 3"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 8, strokeWidth: 0 }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CombinationChart;
