import { FC } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

import NavItem from './NavItem'

const Navbar: FC = () => {
	return (
		<div className='h-[50px] flex items-center text-sm text-[#333] border-b border-slate-200 navbar'>
			<div className='flex items-center p-5 w-full justify-between'>
				<div className='flex items-center border border-slate-300 p-[3px] search'>
					<input
						className='border-none outline-none bg-transparent'
						type='text'
						placeholder='Search...'
					/>
					<SearchOutlinedIcon />
				</div>
				<div className='flex items-center gap-x-5'>
					<NavItem />
				</div>
			</div>
		</div>
	)
}

export default Navbar
