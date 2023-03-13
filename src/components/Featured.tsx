import { FC } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ReactApexCharts from 'react-apexcharts'

import { IFeatured } from 'interfaces/pieChart.interface'

const Featured: FC<IFeatured> = ({ colors }) => {
	return (
		<div className='flex-flexFeatured shadow-widgetShadow p-3'>
			<div className='flex items-center justify-between text-gray'>
				<h2 className='text-base font-medium'>Total revenue</h2>
				<MoreVertIcon />
			</div>
			<div className='flex flex-col items-center justify-center p-5 gap-4'>
				<ReactApexCharts
					options={{
						chart: { type: 'donut' },
						colors,
						legend: { show: false },
						dataLabels: { enabled: false },
					}}
					series={[75, 25]}
					type='donut'
					width='200px'
				/>
				<p className='font-medium text-gray'>Total sales made today</p>
				<p className='text-3xl'>$370</p>
				<p className='text-sm text-gray font-normal text-center'>
					Previous transactions processing. Last payments may not be included
				</p>
			</div>
		</div>
	)
}

export default Featured
