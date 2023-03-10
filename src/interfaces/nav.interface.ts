import { ComponentType } from 'react'
import { SvgIconProps } from '@mui/material'

export interface INavItem {
	text?: string
	Icon: ComponentType<SvgIconProps>
	counter?: number
}
