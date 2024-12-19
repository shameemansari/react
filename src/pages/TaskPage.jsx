import { DeleteIcon, Edit2Icon, Edit3, Trash2 } from 'lucide-react';
import TaskRow from '../components/TaskRow';

const TaskPage = () => {
 
  return (
    <>
    <div className="pt-24 px-8 w-full min-h-[90vh]">
        <div className="flex h-full gap-4 justify-around">
          <div className="h-full w-[40%] flex justify-center">
            <TaskRow/>
          </div>
          <div className="h-full w-[40%] pt-5">
              <div className="flex w-full h-12 justify-start items-center">
                  <div className="text-2xl font-semibold justify-start">Get Started</div>
                  <div className='ml-auto'>
                    <button type='button' className='bg-gray-200 rounded-md p-2.5 hover:bg-gray-100 mr-3'>
                      <Edit3 className='size-4'/>
                    </button>
                    <button type='button' className='bg-gray-200 rounded-md p-2.5 hover:bg-gray-100 mr-3'>
                      <Trash2 className='size-4' />
                    </button>
                  </div>
                  <button type='button' className='ml-2 rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-800'>
                      Add Sub-Task
                  </button>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default TaskPage