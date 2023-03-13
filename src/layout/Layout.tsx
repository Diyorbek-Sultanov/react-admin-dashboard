import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Sidebar, Navbar } from '@components/index'

const Layout: FC = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='flex-flexHome'>
				<Navbar />
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
