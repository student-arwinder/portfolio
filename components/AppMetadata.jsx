const author = "Arwinder Singh";
const description =
	"Software developer from nit jalandhar, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://arwinder-singh.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://arwinder-singh.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Arwinder Singh",
		"Arwinder Singh - software developer",
		"Frontend developer",
		"React developer",
		"Portfolio website",
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
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
