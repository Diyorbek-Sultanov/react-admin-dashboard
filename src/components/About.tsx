import { FC } from 'react'

import Heading from '@ui/Heading'
import { Chart } from './index'

const About: FC = () => {
	return (
		<div className='mb-7 p-5 grid md:grid-cols-chartCols grid-cols-1 gap-5'>
			<div className='p-5 shadow-widgetShadow relative'>
				<button
					type='button'
					className='absolute top-0 right-0 cursor-pointer text-purple bg-editButton font-semibold p-1 rounded text-sm'
				>
					Edit
				</button>
				<h2 className='text-2xl font-bold mb-3'>Infomation</h2>
				<div className='flex gap-5'>
					<img
						className='w-[100px] h-[100px] rounded-full object-cover'
						src='https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt='photo'
					/>
					<div>
						<h2 className='mb-3 text-gray font-bold text-xl'>Jon Doe</h2>
						<div className='mb-3 text-sm'>
							<span className='font-bold text-gray mr-1'>Email:</span>
							<span>jondoe@mail.ru</span>
						</div>
						<div className='mb-3 text-sm'>
							<span className='font-bold text-gray mr-1'>Phone:</span>
							<span> +1 2343 99 88 </span>
						</div>
						<div className='mb-3 text-sm'>
							<span className='font-bold text-gray mr-1'>Address:</span>
							<span>New York Elton St. 234 Garden Yd</span>
						</div>
						<div className='mb-3 text-sm'>
							<span className='font-bold text-gray mr-1'>Country:</span>
							<span className='uppercase'>usa</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Heading>Latest Transactions</Heading>
				<Chart />
			</div>
		</div>
	)
}

export default About
