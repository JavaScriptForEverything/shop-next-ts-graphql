import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import DownloadIcon from '@mui/icons-material/Download'


const AboutUs = () => {

	return (
		<>
			<Typography fontSize='small' paragraph>
				Currently I am working alone and trying to create a group, more details in my CV.
			</Typography>
				<Button
					startIcon={<DownloadIcon />}
					component='a' href='/files/footer_resume_me.pdf' download='resume.pdf'
				>Download Resume</Button>
		</>
	)
}
export default AboutUs
