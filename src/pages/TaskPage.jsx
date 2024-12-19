import { Edit3, Trash2, X } from 'lucide-react';
import TaskRow from '../components/TaskRow';

const TaskPage = () => {
	return (
		<>
			<div className='pt-24 px-8 w-full min-h-[90vh]'>
				<div className='flex h-full gap-4 justify-around'>
					<div className='h-full w-[40%] flex justify-center'>
						<TaskRow />
					</div>
					<div className='h-full w-[40%] pt-5'>
						<div className='flex w-full h-12 justify-start items-center'>
							<div className='text-2xl font-semibold justify-start'>
								Get Started
							</div>
							<div className='ml-auto'>
								<button
									type='button'
									className='bg-gray-200 rounded-md p-2.5 hover:bg-gray-100 mr-3'
								>
									<Edit3 className='size-4' />
								</button>
								<button
									type='button'
									className='bg-gray-200 rounded-md p-2.5 hover:bg-gray-100 mr-3'
								>
									<Trash2 className='size-4' />
								</button>
							</div>
							<button
								type='button'
								className='ml-2 rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-800'
							>
								Add Sub-Task
							</button>
						</div>
						<div className='group relative flex cursor-pointer rounded-md bg-slate-900 py-3 px-5 mt-5 shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-indigo-500'>
							<div className='flex w-full items-center justify-between'>
								<div className='text-sm flex gap-4'>
                    <input  id="some" type="checkbox" name='subtask' className='inline' onChange={(e) => alert(e.target.checked ? 'Checked' : 'Unchecked')} />
                    <label htmlFor="some" className='font-semibold text-white line-through'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptate.</label>
								</div>
                <div className="flex gap-5 items-center">
								  <Edit3 className="size-4 text-white" onClick={() => alert('Edit Option')} />
								  <X className="size-5 text-white" onClick={() => alert('Delete Option')} />
                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TaskPage;
