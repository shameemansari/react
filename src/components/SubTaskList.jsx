import SubTaskItem from './SubTaskItem';

const SubTaskList = ({taskId}) => {
	
	return (
		<>
			<div className='group relative flex flex-col gap-4 mt-4'>
				<SubTaskItem subTaskId={1} />
				<SubTaskItem subTaskId={2} />
			</div>
		</>
	);
};

export default SubTaskList;
