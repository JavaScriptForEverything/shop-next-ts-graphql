import { useState } from 'react'
import DragableCoverPhoto from './dragableCoverPhoto'
import DragableImages from './dragableImages'
import AddProductForm from './addProductForm'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export type MyImage = {
	name: string,
	size: string,
	url: string
}
export type FieldsProps = {
	coverPhoto: MyImage,
	images: MyImage[]
}

type Size = 'sm' | 'md' | 'lg' | 'xl' | ''
type AddProductFormFields = {
	name: string,
	quantity: string,
	brand: string,
	category: string,
	size: Size
	price: string,
	summary: string,
	description: string
}
export const addProductForm: AddProductFormFields = {
	name: '',
	quantity: '',
	brand: '',
	category: '',
	size: '',
	price: '',
	summary: '',
	description: '',
}

type InitialFields = FieldsProps & AddProductFormFields
const initialFields: InitialFields = {
	coverPhoto: { name: '', size: '', url: '' },
	images: [],
	...addProductForm
}

type TempObj = {
	[key: string]: string
}
const initialFieldsError: TempObj = {
	...addProductForm,
	coverPhoto: '',
	images: ''
}
// const isFormValidate = (fields: InitialFields, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>): boolean => {
// 	const tempObj: TempObj = {}

// 	Object.entries(fields).forEach(([key, value]) => {
// 		if(Array.isArray(value) && !value.length) return tempObj.images = `${key} field is empty`
// 		if(typeof value === 'string' && !value.trim()) return tempObj[key] = `${key} field is empty`
// 		if(value && !(value as MyImage).url ) return tempObj.coverPhoto = `${key} field is empty`
// 	})

// 	setFieldsError(tempObj)
// 	return Object.values(tempObj).every( field => !field)
// }

export const AddProduct = () => {
	const [ fields, setFields ] = useState(initialFields)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialFieldsError)


	const updateCoverPhoto = (coverPhoto: MyImage) => setFields({ ...fields, coverPhoto })
	const updateImages = (images: MyImage[]) => setFields({ ...fields, images })
	
	const submitHandler = (formFields: AddProductFormFields) => {
		/* 1. coverPhoto missing handled inside coverPhoto component
		   2. images missing handled inside images component
		   3. Form errors handled inside Form Components

			 so no need form validator here

				if(!isFormValidate(fields, setFieldsError)) return 

			4. just show missing error by alert instead of console.log
		*/

		// 4. just show missing error by alert instead of console.log
		if(!fields.coverPhoto.name) return console.log('coverPhoto is missing')
		if(!fields.images.length) return console.log('images is missing')

		// 5. Finally handle product submit to backend
		console.log({ ...fields, ...formFields })
	}

	return (
		<>
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<Paper sx={{ p: 1 }}>
					<Box sx={{ mb: 4 }}>
						<DragableCoverPhoto onChange={updateCoverPhoto} />
					</Box>

					<Box>
						<DragableImages onChange={updateImages} />
					</Box>
				</Paper>
			</Grid>

			<Grid item xs={12} sm={6}>
				<Paper sx={{ p: 1 }}>
					<Typography paragraph>Product Details</Typography>
					<AddProductForm onSubmit={submitHandler} />
				</Paper>
			</Grid>
		</Grid>	
		</>
	)
}
