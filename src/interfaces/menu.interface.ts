import { ComponentType } from 'react'
import { SvgIconProps } from '@mui/material'

export interface IMenu {
	title: string
	Icon: ComponentType<SvgIconProps>
	text?: string
	link?: string
}
