import { FC } from 'react'
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Table,
} from '@mui/material'
import clsx from 'clsx'

import { rows } from '@constants/listData'

const List: FC = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Tracking ID</TableCell>
						<TableCell>Product</TableCell>
						<TableCell>Customer</TableCell>
						<TableCell>Date</TableCell>
						<TableCell>Amount</TableCell>
						<TableCell>Payment Method</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>
								<div className='flex items-center'>
									<img
										className='w-8 h-8 rounded-full mr-3 object-cover'
										src={row.img}
										alt={row.product}
									/>
									{row.product}
								</div>
							</TableCell>
							<TableCell>{row.customer}</TableCell>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.amount}</TableCell>
							<TableCell>{row.method}</TableCell>
							<TableCell>
								<span
									className={clsx('rounded p-2', {
										['text-green-500 bg-statusApproved']:
											row.status === 'Approved',
										['text-yellow-400 bg-statusPending']:
											row.status === 'Pending',
									})}
								>
									{row.status}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default List
