import { panelItems, ListItem, RightPanel } from '@/components/user/dashboard'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Router from 'next/router'


export const withDashboardPanel = <T extends {}>(Component: React.ComponentType<T>) => {
	
	const handler = (path: string) => () => Router.push(path)
			
	const WithDashboardPanel = (hocProps: T) => {
	
		return (
			<Box sx={{ display: 'flex', gap: 2 }}>
				<Paper id='leftPanel'>
					{panelItems.map(({ label, icon, name, path }, index) => (
						<ListItem key={name}
							name={name}
							label={label}
							icon={icon}
							selected={index === 0 }
							onClick={handler(path)}
						/>
					))}
				</Paper>

					<Paper id='rightPanel' sx={{ flex: 4, p: 1 }}>
						<RightPanel> <Component {...hocProps} /> </RightPanel>
					</Paper>
			</Box>
		)
	}
	return WithDashboardPanel
}
