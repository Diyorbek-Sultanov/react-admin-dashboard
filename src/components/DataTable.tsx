import { FC } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { columns, rows } from '@constants/dataTable'
import { Link } from 'react-router-dom'
import Button from '@ui/Button'

const DataTable: FC = () => {
	return (
		<>
			<div className='flex items-center justify-between mb-3'>
				<h2 className='text-lg font-bold text-gray'>Add new User</h2>
				<Link to={'/users/new'}>
					<Button
						className='py-3 px-4 bg-teal-500 cursor-pointer rounded-md text-white text-base font-semibold hover:bg-teal-400 transition-colors'
						type='button'
					>
						Add new
					</Button>
				</Link>
			</div>
			<DataGrid
				className='data-table'
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</>
	)
}

export default DataTable
