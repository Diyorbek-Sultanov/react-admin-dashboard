import {
	createContext,
	FC,
	PropsWithChildren,
	useState,
	useMemo,
	Dispatch,
	SetStateAction,
} from 'react'

type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface IThemeContext {
	dark: boolean
	setDark?: TypeSetState<boolean>
}

export const themeContext = createContext<IThemeContext>({
	dark: false,
})

const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [dark, setDark] = useState(false)

	const value = useMemo(() => ({ dark, setDark }), [dark])

	return <themeContext.Provider value={value}>{children}</themeContext.Provider>
}

export default ThemeProvider
