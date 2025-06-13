
import { PieChart } from '@mui/x-charts';
import PieChartWithCustomLegendAndTooltip from './components/PieChartDemo';
import PieChartDemo from './components/PieChartDemo';
import Button from '@/components/Button';

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 ">
      <div className="w-full max-w-md h-64 bg-white rounded-xl shadow-2xl flex items-center justify-center p-4">
          <div className=" font-mono text-3xl font-bold text-center">
          Dashboard
          </div>
      </div>
      <div className='my-10 w-full max-w-md h-64 bg-white rounded-xl shadow-2xl flex items-center justify-center p-4'>
        <PieChartDemo/>
      </div>
 
    </main>
  );
}
