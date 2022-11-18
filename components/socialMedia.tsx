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
	{ Icon: GitHubIcon, path: 'https://github.com/JavaScriptForEverything' },
	{ Icon: YouTubeIcon, path: 'https://www.youtube.com/@JavaScriptForEverything' },
	{ Icon: LinkedInIcon, path: 'https://www.linkedin.com/in/javascriptforeverything/' },
	{ Icon: TwitterIcon, path: 'https://twitter.com/JSforEverything' },
	{ Icon: FacebookIcon, path: 'https://www.facebook.com/JavaScriptForEverything' },
	{ Icon: InstagramIcon, path: 'https://www.instagram.com/javascriptforeverything/' },
	// { icon: <InstagramIcon fontSize='large' />, path: 'https://www.instagram.com/javascriptforeverything/' },
]

const SocialMedia = () => {

	return (
		<>
			<Box sx={{display: 'flex', justifyContent:'center', gap: 2, my: 2 }}>
				{socialMedia.map(({ Icon, path}, key) => <Link key={key} href={path} passHref>
					<MuiLink target='_blank' color='inherit' ><Icon fontSize='large' /></MuiLink>
				</Link>
				)}
			</Box>
		</>
	)
}
export default SocialMedia
