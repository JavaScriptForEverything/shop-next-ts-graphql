import Image from 'next/image'

import * as myData from '@/data/client/me'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Avatar  from '@mui/material/Avatar'
import IconButton  from '@mui/material/IconButton'
import Tooltip  from '@mui/material/Tooltip'
import Divider  from '@mui/material/Divider'
import MuiLink  from '@mui/material/Link'

type ArrayObject = {
	title: string
	description: string
}

const getStack = <T extends ArrayObject>(title: string, stackArrayObject: T[], divider=true) => (
	<Box>
		<Typography component='h1' variant='h6' color='primary' sx={{ textTransform: 'uppercase'}}> {title} </Typography>
		<Box sx={{ mt: 2, px: 2 }}>
			{stackArrayObject.map(({ title, description}) => (
				<Box key={title} sx={{ mb: 2 }}>
					<Typography variant='body1'> {title} </Typography>
					<Typography variant='body2' color='textSecondary'> {description} </Typography>
				</Box>
			))}
		</Box>
		{divider && <Divider sx={{ my: 2 }} /> }
	</Box>
)


const About = () => {

	return (
		<>
			<Grid container spacing={2} sx={{ my: 2 }}>
				{/*-----[ Left Side ]------*/}
				<Grid item xs={12} md={4}>
					<Paper  sx={{
						py: 1, px: 2,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 1
					}}>

						<Avatar 
							sx={{
								width: 200, height: 200,
								border: '0.1px solid lightgrey'
							}} 
						>
							<Image src='/images/aboutAvatar.png' alt='aboutAvatar' layout='fill'/>
						</Avatar>
						<Typography color='primary' sx={{ mt: 1 }}>Riajul Islam</Typography>
						<Typography>FullStack Developer: Next.js, TypeScript, GraphQL</Typography>

						<Box>
						{ myData.socialMediaItems.map(({ label, icon, path }) => (
							<IconButton key={label} color='inherit'>
								<Tooltip title={label}>
									<MuiLink href={path} target='_blank' color='inherit'> {icon} </MuiLink>
								</Tooltip>
							</IconButton>
						))}
						</Box>

						<Typography variant='body2' color='textSecondary' paragraph>
							Hi there, I am a <em>JavaScript Programmer</em>.  My Primary Goal is to building Web Application by <em><strong>Next.js</strong></em>, <em><strong>TypeScript</strong></em>, <em><strong>GraphQL</strong></em>, <em>React</em>, <em>Redux</em>, <em>Material-UI</em> in front-end and <em>Node</em>& <em>MongoDB(mongoose)</em> in back-end.
						</Typography>
						<Typography variant='body2' color='textSecondary' paragraph>
							I&apos;m a <em><strong>self-taught programmer</strong></em> but I&apos;m trying to fill-up that gap by learning everyday something new on developing topic.  
						</Typography>

						<Typography variant='h6' component='blockquote' color='textSecondary'>
							&ldquo; The more I learned the more I wondered.  &rdquo;
						</Typography>
					</Paper>
				</Grid>

				{/*-----[ Right Side ]------*/}
				<Grid item xs={12} md={8}>
					<Paper sx={{ py: 1, px: 2 }}>

					{ getStack('Web Development Stack', myData.webTechnologies) }
					{ getStack('Mobile App Development Stack', myData.mobileTechnologies) }
					{ getStack('Development Tools', myData.developmentTools, false) }

					</Paper>
				</Grid>
			</Grid>
		</>
	)
}
export default About


