import { FC } from 'react'

import Menu from './Menu'

const Sidebar: FC = () => {
	return (
		<div className='flex-1 border-r border-slate-200 h-screen bg-white'>
			<div className='h-12 flex items-center justify-center'>
				<span className='text-lg font-bold text-purple'>Admin</span>
			</div>
			<hr className='border-gray' />
			<Menu />
			<div className='flex items-center m-3'>
				<div className='w-5 h-5 cursor-pointer border border-purple rounded-md bg-slate-100 m-1'></div>
				<div className='w-5 h-5 cursor-pointer border border-purple rounded-md bg-slate-500 m-1'></div>
				<div className='w-5 h-5 cursor-pointer border border-purple rounded-md bg-blue-800 m-1'></div>
			</div>
		</div>
	)
}

export default Sidebar
