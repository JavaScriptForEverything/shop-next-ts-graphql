import { panelItems, ListItem, RightPanel } from '@/components/user/dashboard'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Router from 'next/router'
import { useState } from 'react'


export const withDashboardPanel = <T extends {}>(Component: React.ComponentType<T>) => {
	
			
	const WithDashboardPanel = (hocProps: T) => {
		const [ selected, setSelected ] = useState(0)

		const handler = (path: string, index: number) => () => {
			setSelected(index)
			Router.push(path)
		}
	
		return (
			<Box sx={{ display: 'flex', overflowX: 'auto', gap: 2 }}>
				<Paper id='leftPanel'>
					{panelItems.map(({ label, icon, name, path }, index) => (
						<ListItem key={name}
							name={name}
							label={label}
							icon={icon}
							selected={index === selected }
							onClick={handler(path, index)}
						/>
					))}
				</Paper>

					<Paper id='rightPanel' sx={{ 
						flex: 4, 
						p: 1, 
						// flexShrink: 0, 
					}}>
						<RightPanel> <Component {...hocProps} /> </RightPanel>
					</Paper>
			</Box>
		)
	}
	return WithDashboardPanel
}
