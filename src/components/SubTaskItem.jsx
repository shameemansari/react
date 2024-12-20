import { Edit3, X } from "lucide-react"
import { useState } from "react";

const SubTaskItem = ({ subTaskId, description, isCompleted = false}) => {
	const [isChecked, setIsChecked] = useState(isCompleted);
	const onCheckboxChange = () => {
		setIsChecked(!isChecked);
	}

	return (
		<>
			<div className='flex w-full items-center justify-between bg-gray-800 cursor-pointer rounded-md py-3 px-5 shadow-md transition'>
				<div className='text-sm flex gap-4'>
					<input
						id={`check_${subTaskId}`}
						type='checkbox'
						name='subtask'
						checked={isChecked}
						className='inline'
						onChange={onCheckboxChange}
					/>
					<label
						htmlFor={`check_${subTaskId}`}
						className={`font-semibold text-white p-2 ${isChecked ? `line-through` : ``}`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
						aperiam dolores odio quibusdam sed corporis fugit natus fugiat
						quidem similique!
					</label>
				</div>
				<div className='flex gap-5 items-center'>
					<Edit3 className='size-4 text-white' onClick={() => alert('Edit Option')} />
					<X className='size-5 text-white' onClick={() => alert('Delete Option')} />
				</div>
			</div>
		</>
	);
};

export default SubTaskItem;
