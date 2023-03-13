import { FC } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { columns, rows } from '@constants/dataTable'

const DataTable: FC = () => {
	return (
		<DataGrid
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
	)
}

export default DataTable
