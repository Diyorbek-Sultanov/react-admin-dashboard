import { FC } from 'react'

import { About, List } from '@components/index'

const Single: FC = () => {
	return (
		<div className='m-5'>
			<About />
			<div>
				<List />
			</div>
		</div>
	)
}

export default Single
