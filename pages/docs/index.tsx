import { Button } from '@mui/material'
import Link from 'next/link'
import { forwardRef, useState } from 'react'

const List = forwardRef( function named(forwarnProps, ref) {
	return <Button {...forwarnProps} >Link</Button>
})

const Home = () => {
	return (
		<>
			<p>Docs Home page</p>

		<Link href='/docs/home?name=ok' passHref>
			<List 
				// name='email'
			/>
		</Link>
		</>
	)
}
export default Home
