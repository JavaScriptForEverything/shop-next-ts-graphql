import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'

import { CartDetails, InfoForm, PaymentForm, SuccessPayment } from '@/components/shipping'
import withCenterContainer from '@/shared/hoc/withCenterContainer'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

const steps = [
	{ label: 'Shipping', Component: InfoForm },
	{ label: 'Details', Component: CartDetails },
	{ label: 'Payment', Component: PaymentForm }
]

const Shipping = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [ activeStep, setActiveStep ] = useState(0)
	const [ loading, setLoading ] = useState(false)

	// step-2: load data from localStorage to store at first render
	useEffect(() => {
		dispatch(layoutReducer.setShippingInfoFromLocalToStore())
	}, [dispatch])

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

		if(activeStep === 0) { 
			// step-1: Save data to localStorage after click to next
			dispatch(layoutReducer.saveShippingInfoToLocal())
		}
	}
	const backHandler = () => {
		if(activeStep <= 0 ) return
		// if(activeStep >= steps.length ) return router.push('/')

		setActiveStep(activeStep - 1)
		// console.log('backed')

		// required to load data from localStorage to setFields in infoForm
		if(activeStep === 1) router.reload()
		
	}

	return (
		<>
		<Paper sx={{ p: 1 }}>
			<Typography variant='h4' align='center' sx={{ my: 3 }}>Checkout</Typography>

			<Stepper activeStep={activeStep}>
				{steps.map( (step, index) => (
					<Step active={index === activeStep} key={step.label}>
						<StepLabel>{step.label}</StepLabel>
					</Step>
				))}
			</Stepper>
				
				<Box sx={{ my: 2 }}>
					{steps.map(({ label, Component }, index) => 
					index === activeStep ?
						<Component key={label} /> 
					: ''
					)}

					{ activeStep > steps.length - 1 && <SuccessPayment />}
				</Box>

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

			</Paper>
		</>
	)
}
export default withCenterContainer(Shipping)
