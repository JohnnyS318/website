// replaces the locale slug in a relative url
// e.g. /en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = (path: string, locale: string): string => {
	//console.log("rest: ", path)
	
	if (path === "/undefined") {
		return `/${locale}`;
	}
	const [, ...rest] = path.split("/");
	return `/${[locale, ...rest].join("/")}`;
}