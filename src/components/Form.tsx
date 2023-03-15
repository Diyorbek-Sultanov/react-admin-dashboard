import {
	FC,
	Dispatch,
	SetStateAction,
	DetailedHTMLProps,
	InputHTMLAttributes,
} from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'

import { userInputs } from '../formSource'
import Button from '@ui/Button'

export interface IFormInput {
	onChangeFile: Dispatch<
		SetStateAction<
			| File
			| DetailedHTMLProps<
					InputHTMLAttributes<HTMLInputElement>,
					HTMLInputElement
			  >
		>
	>
}

const Form: FC<IFormInput> = ({ onChangeFile }) => {
	return (
		<form className='flex flex-wrap gap-5'>
			<div className='w-2/5'>
				<label htmlFor='file'>
					Image <DriveFolderUploadIcon className='cursor-pointer ml-2' />
				</label>
				<input
					className='w-full p-1 border-b border-gray outline-none hidden'
					type='file'
					id='file'
					onChange={onChangeFile}
				/>
			</div>

			{userInputs.map(user => (
				<div className='w-2/5' key={user.id}>
					<label>{user.label}</label>
					<input
						className='w-full p-1 border-b border-b-gray outline-none'
						type={user.type}
						placeholder={user.placeholder}
					/>
				</div>
			))}

			<Button
				className='w-[200px] p-3 bg-teal-500 cursor-pointer rounded-md text-white text-lg font-semibold hover:bg-teal-400 transition-colors'
				type='submit'
			>
				Send
			</Button>
		</form>
	)
}

export default Form
