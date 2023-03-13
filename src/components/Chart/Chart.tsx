import { FC } from 'react'
import ReactApexCharts from 'react-apexcharts'

import { TotalRevenueSeries, TotalRevenueOptions } from './chart.config'

const Chart: FC = () => {
	return (
		<div className='flex-flexChart shadow-widgetShadow text-gray'>
			<h2 className='font-semibold text-lg'>Last 6 Months (Revenue)</h2>
			<ReactApexCharts
				series={TotalRevenueSeries}
				type='bar'
				height={310}
				options={TotalRevenueOptions}
			/>
		</div>
	)
}

export default Chart
