import Image from 'next/image'
import { useState } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import KeyboardArrowLeftIcon  from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon  from '@mui/icons-material/KeyboardArrowRight'

const images = [
	'/images/carousel/screenshot (10th copy).jpg',
	'/images/carousel/screenshot (11th copy).jpg',
	'/images/carousel/screenshot (12th copy).jpg',
	'/images/carousel/screenshot (3rd copy).jpg',
	// '/images/carousel/screenshot (4th copy).jpg',
	// '/images/carousel/screenshot (5th copy).jpg',
	// '/images/carousel/screenshot (6th copy).jpg',
	// '/images/carousel/screenshot (7th copy).jpg',
	// '/images/carousel/screenshot (8th copy).jpg',
	// '/images/carousel/screenshot (9th copy).jpg',
	// '/images/carousel/screenshot (another copy).jpg',
	// '/images/carousel/screenshot (copy).jpg',
	// '/images/carousel/screenshot.jpg'
]

type CarouselProps = {
	width?: number
	height?: number
}

const logoImageWidth = 80
const logoImagePadding = 1 	// sx={{ p: 1 }} === style={{ padding: '16px' }} 
const indicatorStyle = (height: number = 200) => ({
	color: 'white',
	zIndex: 1,
	position: 'absolute',
	top: (height/2),
})

const Carousel = (props: CarouselProps) => {
	const {
		width = 400,
		height = 200
	} = props


	const [ image, setImage ] = useState(images[images.length - 3])
	// const [ imageIndex, setImageIndex ] = useState(0)

	const handleLeftIndicator = () => {
		// images['image']
		// setImage(images[imageIndex - 1])
	}
	const handleRightIndicator = () => {
		// setImage(images[imageIndex + 1])
	}

	const handleLogoImageClick = (image: string, index: number) => () => {
			// console.log({ image })
			setImage(image)
			// setImageIndex(index)
	}

	return (
		<>
		<Box width={width} height={height} sx={{ position: 'relative' }} > 
		<IconButton sx={{ ...indicatorStyle(height) }} onClick={handleLeftIndicator}>
			<KeyboardArrowLeftIcon />
		</IconButton>

		<IconButton sx={{ ...indicatorStyle(height), right: 0 }} onClick={handleRightIndicator}>
			<KeyboardArrowRightIcon />
		</IconButton>

			<Box width={'100%'} height={'100%'} sx={{
				// border: '1px solid blue',
				display: 'flex',
				alignItems: 'flex-end',
				justifyContent: 'center',
				gap: .2,
				p: logoImagePadding,
				position: 'relative'
			}}>
				

				<Image 
					src={image} 
					alt={image}
					layout='fill'
				/>

				{images
				.filter((_, index, arr) => arr.length <= index + 3 )
				.map((image, index) => {
					return (
						<Box key={index} width={logoImageWidth} height={logoImageWidth/2} sx={{ 
							position: 'relative',
							border: '1px solid white' 
							}}>
							<Image 
								src={image} 
								alt={image}
								layout='fill'
								onClick={handleLogoImageClick(image, index)}
								style={{ cursor: 'pointer' }}
							/>
						</Box>
					)
				})}
			</Box>
		</Box>
		</>
	)
}
export default Carousel
