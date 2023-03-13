import { ComponentType } from 'react'
import { SvgIconProps } from '@mui/material'

export interface IStats {
	type: 'users' | 'earnings' | 'orders' | 'balance'
	title: string
	percentage: string
	IconArrow: ComponentType<SvgIconProps>
	Icon: ComponentType<SvgIconProps>
	money: string
	link: string
}
