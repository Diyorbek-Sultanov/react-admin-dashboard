import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { list } from '@constants/menu'
import { useThemeContext } from '../hooks/useThemeContext'

const MenuItem: FC = () => {
	const [active, setActive] = useState(0)
	const { dark } = useThemeContext()

	return (
		<div>
			{list.map((list, i) => (
				<div key={i}>
					<li
						onClick={() => setActive(i)}
						className={clsx(
							'flex items-center p-1 cursor-pointer gap-x-2 hover:bg-[#ece8ff] rounded-md sidebar-item',
							{
								['bg-[#ece8ff]']: active === i,
							},
						)}
					>
						<list.Icon color={dark ? 'inherit' : 'action'} />
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
