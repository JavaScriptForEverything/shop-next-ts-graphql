import Link from 'next/link'

import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'

import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const socialMedia = [
	{ icon: <GitHubIcon fontSize='large' />, path: 'https://github.com/JavaScriptForEverything' },
	{ icon: <YouTubeIcon fontSize='large' />, path: 'https://www.youtube.com/@JavaScriptForEverything' },
	{ icon: <LinkedInIcon fontSize='large' />, path: 'https://www.linkedin.com/in/javascriptforeverything/' },
	{ icon: <TwitterIcon fontSize='large' />, path: 'https://twitter.com/JSforEverything' },
	{ icon: <FacebookIcon fontSize='large' />, path: 'https://www.facebook.com/JavaScriptForEverything' },
	{ icon: <InstagramIcon fontSize='large' />, path: 'https://www.instagram.com/javascriptforeverything/' },
]

const SocialMedia = () => {

	return (
		<>
			<Box sx={{display: 'flex', justifyContent:'center', gap: 2, my: 2 }}>
				{socialMedia.map(({ icon, path}, key) => <Link key={key} href={path} passHref>
					<MuiLink target='_blank' color='inherit' >{icon}</MuiLink>
				</Link>
				)}
			</Box>
		</>
	)
}
export default SocialMedia
