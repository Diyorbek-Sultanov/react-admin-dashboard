import { Form } from '@components/index'
import { FC, useState, ChangeEvent } from 'react'

const New: FC = () => {
	const [file, setFile] = useState<File>()

	const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		const selectedFiles = files as FileList
		setFile(selectedFiles?.[0])
	}

	return (
		<>
			<div className='p-3 m-5 shadow-widgetShadow'>
				<h2 className='text-2xl text-gray font-bold'>Add new User</h2>
			</div>
			<div className='p-3 m-5 shadow-widgetShadow grid grid-cols-newPageCols gap-4'>
				<div className='place-self-center'>
					<img
						className='w-[100px] h-[100px] object-cover rounded-full block'
						src={
							file
								? URL.createObjectURL(file)
								: 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='
						}
						alt='photo'
					/>
				</div>
				<div className='right'>
					<Form onChangeFile={onChangeFile} />
				</div>
			</div>
		</>
	)
}

export default New
