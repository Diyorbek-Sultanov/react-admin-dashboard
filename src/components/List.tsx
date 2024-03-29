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
		<TableContainer component={Paper} className='list'>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell className='table-ceil'>Tracking ID</TableCell>
						<TableCell className='table-ceil'>Product</TableCell>
						<TableCell className='table-ceil'>Customer</TableCell>
						<TableCell className='table-ceil'>Date</TableCell>
						<TableCell className='table-ceil'>Amount</TableCell>
						<TableCell className='table-ceil'>Payment Method</TableCell>
						<TableCell className='table-ceil'>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell className='table-ceil'>{row.id}</TableCell>
							<TableCell className='table-ceil'>
								<div className='flex items-center'>
									<img
										className='w-8 h-8 rounded-full mr-3 object-cover'
										src={row.img}
										alt={row.product}
									/>
									{row.product}
								</div>
							</TableCell>
							<TableCell className='table-ceil'>{row.customer}</TableCell>
							<TableCell className='table-ceil'>{row.date}</TableCell>
							<TableCell className='table-ceil'>{row.amount}</TableCell>
							<TableCell className='table-ceil'>{row.method}</TableCell>
							<TableCell className='table-ceil'>
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
