import { useContext } from 'react'
import { themeContext } from '../providers/ThemeProvider'

export const useThemeContext = () => {
	const { dark, setDark } = useContext(themeContext)

	return {
		dark,
		setDark,
	}
}
