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

import { ITable } from 'interfaces/table.interface'

const rows: ITable[] = [
	{
		id: 1143155,
		product: 'Acer Nitro 5',
		img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
		customer: 'John Smith',
		date: '1 March',
		amount: 785,
		method: 'Cash on Delivery',
		status: 'Approved',
	},
	{
		id: 2235235,
		product: 'Playstation 5',
		img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
		customer: 'Michael Doe',
		date: '1 March',
		amount: 900,
		method: 'Online Payment',
		status: 'Pending',
	},
	{
		id: 2342353,
		product: 'Redragon S101',
		img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
		customer: 'John Smith',
		date: '1 March',
		amount: 35,
		method: 'Cash on Delivery',
		status: 'Pending',
	},
	{
		id: 2357741,
		product: 'Razer Blade 15',
		img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
		customer: 'Jane Smith',
		date: '1 March',
		amount: 920,
		method: 'Online',
		status: 'Approved',
	},
	{
		id: 2342355,
		product: 'ASUS ROG Strix',
		img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
		customer: 'Harold Carol',
		date: '1 March',
		amount: 2000,
		method: 'Online',
		status: 'Pending',
	},
]

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
