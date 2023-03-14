import { FC } from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

import { Chart, Featured, List, Widget } from '@components/index'
import { IStats } from '../interfaces/stats.interface'
import Heading from '@ui/Heading'

const stats: IStats[] = [
	{
		type: 'users',
		title: 'users',
		Icon: PersonOutlinedIcon,
		IconArrow: KeyboardArrowUpIcon,
		link: 'See all users',
		money: '100',
		percentage: '20%',
	},
	{
		type: 'orders',
		title: 'orders',
		Icon: ShoppingCartOutlinedIcon,
		IconArrow: KeyboardArrowUpIcon,
		link: 'View all orders',
		money: '100',
		percentage: '30%',
	},
	{
		type: 'earnings',
		title: 'earnings',
		Icon: PaidOutlinedIcon,
		IconArrow: KeyboardArrowUpIcon,
		link: 'View net earnings',
		money: '$100',
		percentage: '45%',
	},
	{
		type: 'balance',
		title: 'balance',
		Icon: AccountBalanceWalletOutlinedIcon,
		IconArrow: KeyboardArrowUpIcon,
		link: 'See all users',
		money: '$100',
		percentage: '78%',
	},
]
const colors: string[] = ['#275be8', '#c4e8ef']

const Home: FC = () => {
	return (
		<>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 m-6'>
				{stats.map((stat, i) => (
					<Widget key={i} {...stat} />
				))}
			</div>
			<div className='grid md:grid-cols-chartCols grid-cols-1 m-6 gap-5 py-1 px-5'>
				<Featured colors={colors} />
				<Chart />
			</div>
			<div className='m-5 p-5 shadow-widgetShadow'>
				<Heading>Latest Transactions</Heading>
				<List />
			</div>
		</>
	)
}

export default Home
