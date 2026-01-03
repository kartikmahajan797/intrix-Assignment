import React from 'react';
import CombinationChart from './components/CombinationChart';
import DynamicChart from './components/DynamicChart';
function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 border-b border-slate-200 pb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
          
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Data Visualization Dashboard
          </h1>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Comprehensive market analysis and dynamic trend visualization.
          Use the interactive charts below to explore performance metrics across multiple dimensions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Part 1: Combination Chart */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2 px-1">
            
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Part 1: Combination Analysis</h2>
          </div>
          <div className="prose prose-slate mb-4">
            <p className="text-slate-500 text-sm leading-relaxed">
              This chart integrates discrete year-over-year growth (Bars) with overall market sentiment trends (Line),
              providing a holistic view of competitive positioning.
            </p>
          </div>
          <CombinationChart />
        </section>

        {/* Part 2: Dynamic Chart */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2 px-1">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Part 2: Dynamic Interactivity</h2>
          </div>
          <div className="prose prose-slate mb-4">
            <p className="text-slate-500 text-sm leading-relaxed">
              Switch between visualization modes to emphasize either volume or trend direction.
              The flexible UI ensures data usability for different reporting needs.
            </p>
          </div>
          <DynamicChart />
        </section>
      </div>

     
    </div>
  );
}

export default App;
