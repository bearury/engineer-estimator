import { resolve } from 'path'
import { defineConfig } from 'vite'
import { pages } from './pages.config'

const pageInput = {}

pages.forEach((page) => {
	pageInput[page.name] = page.path
})

export default defineConfig({
	build: {
		rollupOptions: {
			input: { ...pageInput },
		},
		sourcemap: true,
	},
	resolve: {
		alias: {
			$fonts: resolve('./fonts'),
		},
	},
	css: {
		devSourcemap: true,
	},
})