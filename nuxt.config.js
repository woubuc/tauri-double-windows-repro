import packageJson from './package.json';

export default {
	target: 'static',
	ssr: false,

	env: {},

	head: {
		title: packageJson.name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: packageJson.description || '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	css: [],

	plugins: [],

	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/svg',
	],

	modules: [
		'nuxt-i18n',
	],

	build: {},

	i18n: {
		strategy: 'prefix',
		parsePages: false,
		locales: [
			{ code: 'en', name: 'English', file: 'en.js' },
			{ code: 'nl', name: 'Nederlands', file: 'nl.js' },
			{ code: 'fr', name: 'Français', file: 'fr.js' },
		],
		lazy: true,
		langDir: './i18n/',
		defaultLocale: 'en',
	},

	tailwindcss: {
		jit: true,
	},
};
