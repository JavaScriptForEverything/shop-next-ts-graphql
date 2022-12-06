import type { MyImage } from './addProduct'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import { humanReadableFileSize } from '@/util/index'

const errorMessage = 'images field is emapty'

type Props = {
	onChange: (images: MyImage[]) => void
}
const DragableImages = ({ onChange }: Props) => {
	const [ photos, setPhotos ] = useState<MyImage[]>([])
	const [ error, setError ] = useState(errorMessage)

	useEffect(() => {
		if( photos.length ) {
			onChange(photos)
		} else {
			setError(errorMessage)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [photos, error])

	const dropzoneHandler = (acceptedFiles: File[]) => {
		acceptedFiles.map((file) => {
			const reader = new FileReader()
			reader.readAsDataURL(file)

			const isImage = file.type.match('image/*')
			if(!isImage) return 

			reader.addEventListener('load', () => {
				if( reader.readyState === 2 ) {
					const dataUrl = reader.result as string
					const photo = {
						name: file.name,
						size: humanReadableFileSize(file.size),
						url: dataUrl
					}
					/* Problem: only add last item, not every item
							 setFields({ photos: [ ...fields.photos, image ] })
					
						add bellow style to solve the problems */ 
					setPhotos( items =>  [ ...items, photo ])
					setError('')
				}
			})
		})
	}
	const { getRootProps, getInputProps, isDragAccept } = useDropzone({ 
		onDrop: dropzoneHandler,
		accept: {
			'image/jpg': ['.jpg', '.jpeg'],
			'image/png': ['.png' ],
		}
	})

	const removeHandler = (name: string) => () => {
		setPhotos( oldPhotos => oldPhotos.filter( photo => photo.name != name ) )
	}

	return (
		<>
				<Typography paragraph>Carousel Slide Images</Typography>
				<Box {...getRootProps()} sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 2,
					py: 2,
					backgroundColor: '#1e90ff22',
					border: '2px dotted #1e90ff88',
					borderRadius: 2,
					cursor: 'pointer'
				}}>
					<input {...getInputProps()} />
					{isDragAccept 
						? <Typography color='textSecondary'>Drop Now</Typography>
						: <Typography color='textSecondary'>Drag images file here or click</Typography>
					}
					<CloudUploadIcon fontSize='large' />
				</Box>

				<Typography color='error' variant='caption'>{error}</Typography>

				<List>
					{photos.map( (image, index) => (
						<ListItem key={image.name + index} dense divider selected>
								<ListItemAvatar>
									<Avatar>
										<Image 
											src={image.url}
											alt='images'
											width={100}
											height={100}
										/>
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={image.name} secondary={image.size} />
								<IconButton onClick={removeHandler(image.name)}>
									<DeleteIcon sx={theme => ({
										color: theme.palette.grey[600]
									})} />
								</IconButton>
						</ListItem>
					))} 
				</List>

		</>
	)
}
export default DragableImages