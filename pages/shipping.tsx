import { useRouter } from 'next/router'
import { useState } from 'react'
import withCenterContainer from '@/shared/hoc/withCenterContainer'
import { CartDetails, InfoForm, PaymentForm, SuccessPayment } from '@/components/shipping'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

const steps = [
	{
		label: 'Shipping',
		Component: InfoForm
	},
	{
		label: 'Details',
		Component: CartDetails
	},
	{
		label: 'Payment',
		Component: PaymentForm
	}
]

const Shipping = () => {
	const router = useRouter()
	const [ activeStep, setActiveStep ] = useState(0)
	const [ loading, setLoading ] = useState(false)

	console.log({ activeStep })

	const nextHandler = () => {
		if(activeStep >= steps.length - 1 ) {
			console.log('handle payment')
			setLoading(true)

			setTimeout(() => {
				setLoading(false)
				setActiveStep(steps.length + 1)
			}, 1000)

			return
		}
		setActiveStep(activeStep + 1)
		console.log('next')
	}
	const backHandler = () => {
		if(activeStep <= 0 ) return
		if(activeStep >= steps.length ) return router.push('/')

		setActiveStep(activeStep - 1)
		console.log('backed')
	}

	return (
		<>
			<Typography variant='h6'>Checkout</Typography>

			<Stepper activeStep={activeStep}>
				{steps.map( (step, index) => (
					<Step active={index === activeStep} key={step.label}>
						<StepLabel>{step.label}</StepLabel>
					</Step>
				))}
			</Stepper>
				
				{steps.map(({ label, Component }, index) => 
				index === activeStep ?
					<Component key={label} /> 
				: ''
				)}

				{ activeStep > steps.length - 1 && <SuccessPayment />}

			<Box sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				gap: .4,
				my: 3
			}}>
				<Button 
					variant='outlined' 
					onClick={backHandler}
					disabled={!activeStep}
				>
					{activeStep >= steps.length ? 'Home' : 'Back'}
				</Button>

				<Button 
					variant='outlined' 
					onClick={nextHandler}
					disabled={activeStep > steps.length}
				>
					{(activeStep >= steps.length - 1) 
						? loading 
								? <CircularProgress size={24} /> 
								: (activeStep > steps.length) ? 'Paied' : 'Pay' 
						: 'Next' 
					}
				</Button>
			</Box>
		</>
	)
}
export default withCenterContainer(Shipping)
