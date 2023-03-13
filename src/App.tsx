import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '@layout/Layout'

import Home from './pages/Home'
import List from './pages/List'
import Login from './pages/Login'
import New from './pages/New'
import Single from './pages/Single'

const App: FC = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='users'>
						<Route index element={<List />} />
						<Route path=':userId' element={<Single />} />
						<Route path='new' element={<New />} />
					</Route>
					<Route path='products'>
						<Route index element={<List />} />
						<Route path=':productId' element={<Single />} />
						<Route path='new' element={<New />} />
					</Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App
