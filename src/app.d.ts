/// <reference types="@sveltejs/kit" />

import type { Locales } from "$i18n/i18n-types";

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	interface Platform {}

	interface Session {
	}

	interface Stuff {}
}
