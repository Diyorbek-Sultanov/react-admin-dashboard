import { IBtn } from 'interfaces/button.interface'
import { FC } from 'react'

const Button: FC<IBtn> = ({ children, type, className }) => {
	return (
		<button className={className} type={type}>
			{children}
		</button>
	)
}

export default Button
