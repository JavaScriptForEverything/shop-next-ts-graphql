import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import YoutubeIcon from '@mui/icons-material/YouTube'
import { features } from 'process'



export const socialMediaItems = [
	{ label: 'github',   	Icon: GitHubIcon, 	path: 'https://github.com/JavaScriptForEverything' },
	{ label: 'linkedin', 	Icon: LinkedInIcon, path: 'https://www.linkedin.com/in/JavaScriptForEverything/' },
	{ label: 'twitter',  	Icon: TwitterIcon, 	path: 'https://twitter.com/JSforEverything' },
	{ label: 'facebook', 	Icon: FacebookIcon, path: 'https://www.facebook.com/JavaScriptForEverything' },
	{ label: 'instagram', Icon: InstagramIcon, path: 'https://www.instagram.com/JavaScriptForEverything/' },
	{ label: 'youtube',  	Icon: YoutubeIcon, 	path: 'https://www.youtube.com/@JavaScriptForEverything/' },
]

export const webTechnologies = [
  {
    title: 'Next.js',
    description: 'A Javascript Framework based on React library, to build production ready application with Server-Side rendering features.'
  },
  {
    title: 'TypeScript',
    description: 'Super set of JavaScript, it helps to create large application with minimum bugs'
  },
  {
    title: 'GraphQL',
    description: 'A alternative of RESTfull API, which overcome the limitation of REST API'
  },
  {
    title: 'Redux',
    description: 'To manage State of Client-Side application (React|Angular|View)'
  },
  {
    title: 'Material-UI',
    description: 'A CSS Framework to design application'
  },
  {
    title: 'MongoDB(mongoose)',
    description: 'Schema based Database Driver, to store data into MongoDB Database.'
  },
]

export const mobileTechnologies = [
  {
    title: 'React-Native',
    description: 'To create Cross-platform mobile application for android and ios'
  },
  {
    title: 'Redux',
    description: 'To manage State of Client-Side application (React|Angular|View)'
  },
  {
    title: 'React-Native-Paper',
    description: 'A CSS Framework to design application'
  },
  {
    title: 'MongoDB(mongoose)',
    description: 'Schema based Database Driver, to store data into MongoDB Database.'
  },
]


export const developmentTools = [
  {
    title: 'Git & GitHub',
    description: 'Version Controll System. Used to manage and share project'
  },
  {
    title: 'Docker & DockerHub',
    description: 'To test application to any machine and also deploy project'
  },
  {
    title: 'Linux OS',
    description: 'Linux OS: similer as English Language, no mater where you go, you have to know a little bit.'
  },
  {
    title: 'SSH',
    description: 'To communicate with any Computer through internet, specially with Server'
  },
  {
    title: 'VirtualBox',
    description: 'Vittualization is a technologies, which give you virtual mechine to test and also in production'
  }
]
