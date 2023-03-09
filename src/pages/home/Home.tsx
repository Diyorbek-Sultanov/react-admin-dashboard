import { FC } from 'react'
import { Sidebar } from '@components/index'

const Home: FC = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='flex-flexHome'>container</div>
		</div>
	)
}

export default Home
