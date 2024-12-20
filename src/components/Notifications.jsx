import { X } from 'lucide-react';

const Notifications = ({message}) => {
	return (
		<>
			<div className='inline-flex bg-red-50 rounded-lg bg-red-light-6 px-[18px] py-4 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)]'>
						<p className='flex items-center text-sm font-medium text-[#BC1C21]'>
							<span className='mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-red'>
								 <X className='size-6'/>
							</span>
							{message}
						</p>
					</div>
		</>
	);
};

export default Notifications;
