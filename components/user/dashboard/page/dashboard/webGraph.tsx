import dynamic from 'next/dynamic'

import { AreaChart, Area, ResponsiveContainer } from 'recharts'


import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const data = [
  {	name: 'Page A', range: 4000, price: 2400, value: 2400 },
  {	name: 'Page B', range: 3000, price: 1398, value: 2210 },
  {	name: 'Page C', range: 2000, price: 9800, value: 2290 },
  {	name: 'Page D', range: 2780, price: 3908, value: 2000 },
  {	name: 'Page E', range: 1890, price: 4800, value: 2181 },
  {	name: 'Page F', range: 2390, price: 3800, value: 2500 },
  {	name: 'Page G', range: 3490, price: 4300, value: 2100 },
]

type Props = {
	title: string,
	value: number
}
export const WebGraph = ({ title, value }: Props) => {

	return (
		<Box>
			<Typography color='textSecondary'>{title}</Typography>
			<Typography variant='h6' paragraph> ${value.toFixed(2)} </Typography>

			<ResponsiveContainer width='100%' height={150}>
				<AreaChart data={data} >
					<Area dataKey='value' />
				</AreaChart>
			</ResponsiveContainer>

		</Box>
	)
}
// export default Graph
// export default dynamic(() => Promise.resolve(Graph), {ssr: false})
