import { FC } from 'react'

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { useThemeContext } from '../hooks/useThemeContext'

const NavItem: FC = () => {
	const { dark, setDark } = useThemeContext()

	return (
		<ul className='flex items-center gap-x-4'>
			<li className='cursor-pointer relative flex items-center'>
				<LanguageOutlinedIcon />
				English
			</li>
			<li
				className='cursor-pointer relative flex items-center'
				onClick={() => setDark(!dark)}
			>
				{dark ? <WbSunnyIcon /> : <DarkModeOutlinedIcon />}
			</li>
			<li className='cursor-pointer relative flex items-center'>
				<FullscreenExitOutlinedIcon />
			</li>
			<li className='cursor-pointer relative flex items-center'>
				<NotificationsNoneOutlinedIcon />
				<div className='w-[20px] h-[20px] flex items-center justify-center  bg-rose-600 text-white rounded-full text-[10px] font-bold absolute -top-2 -right-1'>
					33
				</div>
			</li>
			<li className='cursor-pointer relative flex items-center'>
				<ChatBubbleOutlineOutlinedIcon />
				<div className='w-[20px] h-[20px] flex items-center justify-center  bg-rose-600 text-white rounded-full text-[10px] font-bold absolute -top-2 -right-1'>
					99
				</div>
			</li>
			<li className='cursor-pointer relative flex items-center'>
				<ListAltOutlinedIcon />
			</li>
		</ul>
	)
}

export default NavItem
