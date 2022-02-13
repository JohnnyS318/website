import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: [".md"],
			layout: {
				blog: "src/routes/[lang]/blog/_post.svelte",
			}
		})],
	extensions: [".svelte", ".md"],

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

		vite: {
			resolve: {
				alias: {
					$lib: path.resolve("./src/lib/"),
					$i18n: path.resolve("./src/i18n/"),
				}
			}
		}
	}
};

export default config;
