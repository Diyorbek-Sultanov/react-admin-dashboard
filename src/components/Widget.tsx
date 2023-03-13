import { FC } from 'react'
import clsx from 'clsx'

import { IStats } from '../interfaces/stats.interface'

const Widget: FC<IStats> = ({
	type,
	Icon,
	IconArrow,
	title,
	link,
	money,
	percentage,
}) => {
	return (
		<div className='flex flex-1 justify-between p-[10px] shadow-widgetShadow rounded-xl min-h-[130px]'>
			<div className='flex flex-col justify-between'>
				<span className='font-bold text-base uppercase text-gray'>{title}</span>
				<span className='text-2xl font-normal'>{money}</span>
				<span className='text-sm border-b border-gray w-max'>{link}</span>
			</div>
			<div className='flex flex-col justify-between'>
				<div className='flex items-center text-sm text-green-500'>
					<IconArrow />
					{percentage}
				</div>
				<Icon
					fontSize='large'
					className={clsx('p-1 rounded-sm self-end', {
						['bg-widgetIconBgPerson text-rose-600']: type === 'users',
						['bg-widgetIconBgShop text-yellow-400']: type === 'orders',
						['bg-widgetIconBgMoney text-green-500']: type === 'earnings',
						['bg-widgetIconBgBalance text-purple']: type === 'balance',
					})}
				/>
			</div>
		</div>
	)
}

export default Widget
