import { FC } from 'react'
import { Navbar, Sidebar } from '@components/index'

const Home: FC = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='flex-flexHome'>
				<Navbar />
				container
			</div>
		</div>
	)
}

export default Home
