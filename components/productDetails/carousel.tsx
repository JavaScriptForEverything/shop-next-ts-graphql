import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

type Props = {
	images: string[]
	width?: number
}

const Carousel = ({ images, width=300 }: Props) => {
	const [ selectedIndex, setSelectedIndex ] = useState(0)
	const [ imageHeight, setImageHeight ] = useState(width/2)

	const lastIndex = images.length - 1
	const getActiveColor = (index: number) => selectedIndex === index ? '#fffc' : '#fff3'

	const prevIndicatorHandler = () => {
		if(selectedIndex <= 0 ) return setSelectedIndex(lastIndex)
		setSelectedIndex(index => index - 1)
	}
	const nextIndicatorHandler = () => {
		if(selectedIndex >= lastIndex ) return setSelectedIndex(0)
		setSelectedIndex(index => index + 1)
	}

	const resizeHandler = useCallback(() => {
		const image = document.getElementById('carousel')!
		const height = image.clientHeight
		setImageHeight(height)
	}, [])

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	}, [resizeHandler])


	return (
		<Box sx={{ position: 'relative' }}>
			<Image 
				id='carousel'
				src={images[selectedIndex]}
				alt='image'
				width={width}
				height={width/2}
				layout='responsive'
			/>
			<Box sx={{
				position: 'absolute',
				zIndex: 1,
				top: imageHeight/2 - 16*1.5, 		// height/2 + buttonHeight/1.5
				left: 0,
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				px: 1,
				boxSizing: 'border-box',
			}}>
				<IconButton sx={{ color: 'white' }} onClick={prevIndicatorHandler}>
					<KeyboardArrowLeftIcon />
				</IconButton>

				<IconButton sx={{ color: 'white' }} onClick={nextIndicatorHandler}>
					<KeyboardArrowRightIcon />
				</IconButton>
			</Box>
			<Box sx={{
				position: 'absolute',
				bottom: 8,
				left: 0,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				gap: .5,
			}}>
				{images.map( (image, index) => (
					<Box key={index} sx={{ border: `1px solid ${getActiveColor(index)}`, cursor: 'pointer' }} >
						<Image
							src={image}
							alt='image'
							width={width/2/2} 				
							height={width/2/2/2} 			
							onClick={() => setSelectedIndex(index)}
						/>
					</Box>
				))}
			</Box>
		</Box>
	)
}
export default Carousel
