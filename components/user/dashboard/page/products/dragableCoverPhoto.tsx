import type { FileRejection } from 'react-dropzone'
import type { FieldsProps, MyImage } from './addProduct'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { humanReadableFileSize } from '@/util/index'

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

const errorMessage = 'coverImage field is emapty'

type Props = {
	onChange: (coverPhoto: MyImage) => void
}

const DragableCoverPhoto = ({ onChange }: Props) => {
	const [ image, setImage ] = useState<MyImage>({
		name: '',
		size: '',
		url: ''
	})
	const [ error, setError ] = useState(errorMessage)

	useEffect(() => {
		if(image) onChange(image)
	 	else setError(errorMessage)
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [image, error])

	const dropzoneHandler = (acceptedFiles: File[], _fileRejections: FileRejection[]) => {
		acceptedFiles.map(file => {
			const reader = new FileReader()
			reader.readAsDataURL(file)

			const isImage = file.type.match('image/*')
			if(!isImage) return 

			reader.addEventListener('load', () => {
				if( reader.readyState === 2 ) {
					const dataUrl = reader.result as string
					 
					setImage({
						name: file.name,
						size: humanReadableFileSize(file.size),
						url: dataUrl
					})
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

	const removeCoverPhoto = () => {

		setImage({ name: '', size: '', url: '' })
		setError(errorMessage)
	}
	

	return (
		<>
				<Typography paragraph>Cover Image</Typography>
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
						: <Typography color='textSecondary'>Drag CoverImage file here or click</Typography>
					}
					<CloudUploadIcon fontSize='large' />
				</Box>

				<Typography color='error' variant='caption'>{error}</Typography>

				{!!image.name && (
					<List>
						<ListItem dense selected>
								<ListItemAvatar>
									<Avatar>
										<Image 
											src={image.url}
											alt='coverPhoto'
											width={100}
											height={100}
										/>
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={image.name} secondary={image.size} />
								<IconButton onClick={removeCoverPhoto}>
									<DeleteIcon sx={theme => ({
										color: theme.palette.grey[600]
									})} />
								</IconButton>
						</ListItem>
					</List>
				)}

		</>
	)
}
export default DragableCoverPhoto