import { FC } from 'react'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'

import { INavItem } from '../interfaces/nav.interface'

const navItem: INavItem[] = [
	{
		text: 'English',
		Icon: LanguageOutlinedIcon,
	},
	{
		Icon: DarkModeOutlinedIcon,
	},
	{
		Icon: FullscreenExitOutlinedIcon,
	},
	{
		Icon: NotificationsNoneOutlinedIcon,
		counter: 4,
	},
	{
		Icon: ChatBubbleOutlineOutlinedIcon,
		counter: 99,
	},
	{
		Icon: ListAltOutlinedIcon,
	},
]

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
