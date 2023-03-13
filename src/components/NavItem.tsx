import { FC } from 'react'

import { navItem } from '@constants/navItem'

const NavItem: FC = () => {
	return (
		<>
			{navItem.map((nav, i) => (
				<div className='cursor-pointer relative flex items-center' key={i}>
					<nav.Icon />
					{nav.text}
					{nav.counter && (
						<div className='w-[20px] h-[20px] flex items-center justify-center  bg-rose-600 text-white rounded-full text-[10px] font-bold absolute -top-2 -right-1'>
							{nav.counter}
						</div>
					)}
				</div>
			))}
		</>
	)
}

export default NavItem
