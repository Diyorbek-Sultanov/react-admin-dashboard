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
import PersonIcon from '@mui/icons-material/Person'

import { IMenu } from 'interfaces/menu.interface'

export const list: IMenu[] = [
	{
		title: 'Dashboard',
		Icon: DashboardIcon,
		text: 'Lists',
		link: '/',
	},
	{
		title: 'Users',
		Icon: GroupIcon,
		link: '/users',
	},
	{
		title: 'User detail',
		Icon: PersonIcon,
		link: '/users/2w2w',
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
