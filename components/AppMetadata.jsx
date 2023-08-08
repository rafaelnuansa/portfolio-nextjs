const author = "Rafael Nuansa Ramadhon";
const description =
	"Hello My Name Rafael Nuansa Ramadhon, A Full Stack Web Developer this site is my portfolio.";
const url = "https://rafaelnuansa.vercel.app";
export const AppMetadata = {
	metadataBase: new URL("https://rafaelnuansa.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Rafael Nuansa Ramadhon",
		"Rafael Nuansa Ramadhon - Full Stack Web Developer",
		"Frontend developer",
		"Web developer",
		"Laravel",
		"Laravel Developer",
		"Codeigniter",
		"Codeigniter",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
