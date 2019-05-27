
const Routes = require('shared/routes.js');


module.exports = [
	{
		text : 'Resume',
		icon : 'file-text-o',
		color : 'teal',
		link : Routes.main.resume
	},
	{
		text : 'Github',
		icon : 'github',
		color : 'steel',
		link : Routes.external.github
	},
	{
		text : 'Mentorship',
		icon : 'user-plus',
		color : 'orange',
		link : Routes.main.mentorship
	},
	{
		text : 'Blog',
		icon : 'pencil-square-o',
		color : 'purple',
		link : Routes.main.blog
	},
	{
		text : 'LinkedIn',
		icon : 'linkedin',
		color : 'blue',
		link : Routes.external.linkedin
	},
	{
		text : 'Email',
		icon : 'envelope-o',
		color : 'red',
		link : Routes.external.linkedin
	},
]
