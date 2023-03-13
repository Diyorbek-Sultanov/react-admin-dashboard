import { FC } from 'react'

import { Link } from 'react-router-dom'

import { list } from '@constants/menu'

const MenuItem: FC = () => {
	return (
		<div>
			{list.map((list, i) => (
				<div key={i}>
					<li className='flex items-center p-1 cursor-pointer gap-x-2 hover:bg-[#ece8ff] rounded-md'>
						<list.Icon color='action' />
						<Link
							to={`${list.link}`}
							className='text-sm font-semibold text-gray'
						>
							{list.title}
						</Link>
					</li>
					<p className='text-sm text-gray mt-4 mb-1 font-bold uppercase'>
						{list.text}
					</p>
				</div>
			))}
		</div>
	)
}

export default MenuItem
