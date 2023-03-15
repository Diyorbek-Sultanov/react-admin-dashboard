import { FC, useContext } from 'react'

import Menu from './Menu'
import { themeContext } from '../providers/ThemeProvider'
import { useThemeContext } from '../hooks/useThemeContext'

const Sidebar: FC = () => {
	const { dark, setDark } = useThemeContext()

	const onChangeDark = () => {
		setDark(!dark)
	}

	const onChangeLight = () => {
		setDark(!dark)
	}

	return (
		<div className='flex-1 border-r border-slate-200 h-screen bg-white sidebar'>
			<div className='h-12 flex items-center justify-center'>
				<span className='text-lg font-bold text-purple'>Admin</span>
			</div>
			<hr className='border-gray' />
			<Menu />
			<div className='flex items-center m-3'>
				<div
					className='w-5 h-5 cursor-pointer border border-purple rounded-md bg-slate-100 m-1'
					onClick={onChangeLight}
				></div>
				<div
					className='w-5 h-5 cursor-pointer border border-purple rounded-md bg-black m-1'
					onClick={onChangeDark}
				></div>
			</div>
		</div>
	)
}

export default Sidebar
