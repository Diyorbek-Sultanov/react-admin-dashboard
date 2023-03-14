import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@layout': path.resolve(__dirname, './src/layout'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@ui': path.resolve(__dirname, './src/ui'),
		},
	},
})
