import { addProductForm } from './addProduct'
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'

type InputItem = {
	name: string,
	label: string,
	placeholder: string,
	type: string,
	multiline?: boolean, 					// add type: if multiline then rows mandatory
	rows?: number, 								// 
	autoComplete?: boolean, 			// add type: if autoComplete then options mandatory
	options?: string[] 						// 
}
const inputItems: InputItem[] = [
	{
		name: 'name',
		label: 'Product Name',
		placeholder: 'The Forest Heiker',
		type: 'text',
	},
	{
		name: 'quantity',
		label: 'Quantity',
		placeholder: '10',
		type: 'number',
	},
	{
		name: 'brand',
		label: 'Brand',
		placeholder: 'Adidas',
		type: 'text',
		autoComplete: true,
		options: ['adidas', 'ramon', 'zara', 'hashTag']
	},
	{
		name: 'category',
		label: 'Category',
		placeholder: 'Shirt',
		type: 'text',
		autoComplete: true,
		options: ['shirt', 'pant', 'tshart']
	},
	{
		name: 'size',
		label: 'Size',
		placeholder: 'XS',
		type: 'text',
		autoComplete: true,
		options: ['sm', 'md', 'lg', 'xl']
	},
	{
		name: 'price',
		label: 'Price',
		placeholder: '200',
		type: 'number',
	},
	{
		name: 'summary',
		label: 'Summary',
		placeholder: 'lorem product summary',
		type: 'text',
		multiline: true,
		rows: 2
	},
	{
		name: 'description',
		label: 'Description',
		placeholder: 'Long Description lorem',
		type: 'text',
		multiline: true,
		rows: 3
	},

]


type TempObj = {
	[key: string]: string
}
const isFormValidate = (fields: typeof addProductForm, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>): boolean => {
	const tempObj: TempObj = {}

	Object.entries(fields).forEach(([key, value]) => {
		if(typeof value === 'string' && !value.trim()) return tempObj[key] = `${key} field is empty`
	})

	setFieldsError(tempObj)
	return Object.values(tempObj).every( field => !field)
}

type Props = {
	onSubmit: (fields: typeof addProductForm) => void
}
const AddProductForm = ({ onSubmit }: Props) => {
	const [ fields, setFields ] = useState(addProductForm)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(addProductForm)

	useEffect(() => {
		isFormValidate(fields, setFieldsError)
	}, [fields])

	const changeHandler = (name: keyof typeof fields) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [name]: evt.target.value })
	}
	const autoCompletechangeHandler = (name: keyof typeof fields, option: string | undefined) => (_: any, newValue: string | null ) => {
		setFields({ ...fields, [name]: newValue ? newValue : option! })
	}

	const resetHandler = () => {
		setFields(addProductForm)		
		setFieldsError(addProductForm)		
	}

	const clickHandler = () => {
		if(!isFormValidate(fields, setFieldsError)) return
		onSubmit(fields)
	}

	return (
		<>
		{inputItems.map(item => item.autoComplete ? (
			<Autocomplete key={item.name}
				options={item.options!}
				getOptionLabel={option => option}
				renderInput={(params) => <TextField {...params}
					label={item.label}
					InputLabelProps={{ shrink: true }}
					placeholder={item.placeholder}
					type={item.type}
					margin='dense'

					fullWidth
					required

					multiline={item.multiline}
					rows={item.rows}

					// value={fields[item.name as keyof typeof fields]}
					// onChange={changeHandler(item.name as keyof typeof fields)}

					error={!fields[item.name as keyof typeof fields] || !!fieldsError[item.name as keyof typeof fieldsError]}
					helperText={fieldsError[item.name as keyof typeof fieldsError]}
				/>}
					onChange={autoCompletechangeHandler(item.name as keyof typeof fields, item.options?.[0])}
					// onChange={e => {}}
			/>
		) : (
			<TextField key={item.name}
				label={item.label}
				InputLabelProps={{ shrink: true }}
				placeholder={item.placeholder}
				type={item.type}
				margin='dense'
				// size='small'

				fullWidth
				required

				multiline={item.multiline}
				rows={item.rows}

				value={fields[item.name as keyof typeof fields]}
				onChange={changeHandler(item.name as keyof typeof fields)}

				error={!fields[item.name as keyof typeof fields] || !!fieldsError[item.name as keyof typeof fieldsError]}
				helperText={fieldsError[item.name as keyof typeof fieldsError]}
			/>
		))}

		<Box sx={{
			display: 'flex',
			justifyContent: 'flex-end',
			gap: .4,
			my: 2
		}}>
			<Button variant='outlined' onClick={resetHandler}>Reset</Button>
			<Button variant='contained' onClick={clickHandler}>Add</Button>
		</Box>

		</>
	)
}
export default AddProductForm
