import { FC } from 'react'

import MenuItem from './MenuItem'

const Menu: FC = () => {
	return (
		<div className='pl-3'>
			<ul>
				<p className='text-sm text-gray mt-4 mb-1 font-bold uppercase'>main</p>
				<MenuItem />
			</ul>
		</div>
	)
}

export default Menu
