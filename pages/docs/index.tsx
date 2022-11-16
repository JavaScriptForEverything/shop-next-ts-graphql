import { useState } from 'react'

const Home = () => {
	const [ fields, setFields ] = useState({
		avatar: ''
	})

	console.log(fields.avatar)

	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		// setfields({ ...fields, avatar: evt.target.value})

			if(evt.target.files) {

				const reader = new FileReader()
				reader.readAsDataURL(evt.target.files[0])
				reader.onload = () => {
					if(!reader.result) return
					// console.log(reader.result)

					let result: string = reader.result as string
							// result = Buffer.from(result).toString()
					setFields({...fields, avatar: result })

				}
			}
		
	}

	const resetHandler = () => {
		const avatar = document.getElementById('avatar')! as HTMLInputElement
		avatar.value = ''
	}

	return (
		<>
			<p>Docs Home page</p>
			<input 
				type='file' 
				id='avatar'
				// value={fields.avatar}
				onChange={changeHandler('avatar')} 
			/>
			<button onClick={resetHandler}>Reset</button>
		</>
	)
}
export default Home
