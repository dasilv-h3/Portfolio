/**
 * @typedef portfolioData
 * @property {string} imgSrc
 * @property {string} title
 * @property {string[]} skill
 * @property {string} description
 * @property {string} demoURL
 * @property {string} repoURL
 * @property {string} anim
 * @property {number} averageBrightness
 */

/**
 * @type {portfolioData[]}
 */
export const portfolioData = [
	{
		imgSrc: '/img/airneis.png',
		title: 'Airneis',
		skills: ['MongoDB', 'Express', 'React', 'NodeJS', 'Tailwind', 'Docker'],
		description:
			'Airneis est un projet de développement d\'une application e-commerce pour la vente de meubles. Le projet est divisé en deux parties principales : un frontend pour l\'interface utilisateur et un backend pour la gestion des données et de l\'API.',
		demoURL: '',
		repoURL: 'https://github.com/H3Dylan/Airneis',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/frontick_fc.png',
		title: 'FrontKick FC',
		skills: ['NodeJS', 'React', 'Tailwind', 'Typescript', 'Docker'],
		description:
			'Frontkick FC consiste à développer une API REST en TypeScript avec Node.js et une base de données MySQL, orchestrée avec Docker. L\'objectif est de fournir une solution backend pour une association sportive, intégrant un backoffice. Le frontend, développé en React, permettra d\'exploiter les fonctionnalités de l\'API.',
		demoURL: '',
		repoURL: 'https://github.com/dasilv-h3/M1-NodeJS',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/pychathon.png',
		title: 'Pychathon',
		skills: ['Python', 'Flask', 'HTML', 'CSS', 'Javascript'],
		description:
			'Dans le cadre d\'un projet en Flask, l\'objectif était de créer un serveur web permettant à plusieurs utilisateurs de discuter en temps réel via un chat. Ce projet intégrait l\'utilisation de WebSocket pour établir une connexion bidirectionnelle persistante entre le client et le serveur, offrant ainsi une communication instantanée sans besoin de recharger la page. Le serveur Flask gérait les connexions des utilisateurs, tandis que WebSocket permettait d\'envoyer et de recevoir des messages en direct.',
		demoURL: '',
		repoURL: 'https://github.com/dasilv-h3/Pychathon',
		anim: 'fade-left',
	},
];

const skillIcons = {
	Astro: 'skill-icons:astro',
	Bootstrap: 'skill-icons:bootstrap',
	CSS: 'skill-icons:css',
    Docker:'skill-icons:docker',
    Express: 'skill-icons:expressjs-dark',
    Flask: 'skill-icons:flask-dark',
    HTML: 'skill-icons:html',
	Javascript: 'skill-icons:javascript',
    MongoDB: 'skill-icons:mongodb',
    NodeJS: 'skill-icons:nodejs-dark',
    Python: 'skill-icons:python-dark',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Tailwind: 'skill-icons:tailwindcss-dark',
    Typescript: 'skill-icons:typescript',
	React: 'skill-icons:react-dark',
};

export const getportfolioData = portfolioData.map((item) => {
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill]),
        
	};
});
