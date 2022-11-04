import { useState } from 'react'

type StateType = {
	email: string
	password: string
}

const listItems = [
	{ name: 'email' },
	{ name: 'password' },
]

const Demo = () => {
	const [ fields, setFields ] = useState<StateType>({
		email: '',
		password: ''
	})

	// const name = 'email'
	// fields[name]

	return (
		<>
		{listItems.map( ({ name }) => (
			<input 
				key={name} 
				// value={fields[name]}
				// value={fields[name as keyof typeof fields]}
				value={fields[name as keyof StateType]}
			/>
		))}
			
		</>
	)
}
export default Demo
