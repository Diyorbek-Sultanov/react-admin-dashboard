import { FC } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

import { IMenu } from '../interfaces/menu.interface'

const list: IMenu[] = [
	{
		title: 'Dashboard',
		Icon: DashboardIcon,
		text: 'Lists',
	},
	{
		title: 'Users',
		Icon: GroupIcon,
	},
	{
		title: 'Products',
		Icon: StoreIcon,
	},
	{
		title: 'Orders',
		Icon: CreditCardIcon,
	},
	{
		title: 'Delivery',
		Icon: LocalShippingIcon,
		text: 'Useful',
	},
	{
		title: 'Stats',
		Icon: InsertChartIcon,
	},
	{
		title: 'Notifications',
		Icon: NotificationsIcon,
		text: 'Service',
	},
	{
		title: 'System Health',
		Icon: SettingsSystemDaydreamIcon,
	},
	{
		title: 'Logs',
		Icon: PsychologyIcon,
	},
	{
		title: 'Settings',
		Icon: SettingsIcon,
		text: 'User',
	},
	{
		title: 'Profile',
		Icon: AccountCircleIcon,
	},
	{
		title: 'Log out',
		Icon: LogoutIcon,
	},
]

const MenuItem: FC = () => {
	return (
		<div>
			{list.map(list => (
				<>
					<li
						className='flex items-center p-1 cursor-pointer gap-x-2 hover:bg-[#ece8ff] rounded-md'
						key={list.title}
					>
						<list.Icon color='action' />
						<span className='text-sm font-semibold text-gray'>
							{list.title}
						</span>
					</li>
					<p className='text-sm text-gray mt-4 mb-1 font-bold uppercase'>
						{list.text}
					</p>
				</>
			))}
		</div>
	)
}

export default MenuItem
