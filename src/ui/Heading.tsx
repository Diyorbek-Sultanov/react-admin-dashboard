import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <h2 className='font-medium mb-4 text-gray text-lg'>{children}</h2>
}

export default Heading
