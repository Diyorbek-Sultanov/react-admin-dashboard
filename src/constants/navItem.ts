import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'

import { INavItem } from 'interfaces/nav.interface'

export const navItem: INavItem[] = [
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
