import { FC } from 'react'

const Sidebar: FC = () => {
	return (
		<div className='flex-1 border-r border-slate-100 h-screen'>
			<div className='h-12 flex items-center justify-center'>
				<span className='text-lg font-bold text-purple'>Admin</span>
			</div>
			<hr className='border border-gray-200 h-0' />
			<div className='pl-3'>
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
			</div>
			<div className=''>Color options</div>
		</div>
	)
}

export default Sidebar
