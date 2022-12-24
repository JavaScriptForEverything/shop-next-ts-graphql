import SearchInput from '@/components/searchInput'

const listItems = [
	{ name: 'email' },
	{ name: 'password' },
]

const Demo = () => {

	const handleSubmit = (label: string, value: string) => {
		console.log({ label, value })
	}

	return (
		<>
			<h2>Demo</h2>
			
			<SearchInput 
				submitHandler={handleSubmit}
			/>
		</>
	)
}
export default Demo
