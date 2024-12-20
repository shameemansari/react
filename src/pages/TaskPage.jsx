import { Edit3, Trash2 } from "lucide-react";
import TaskRow from "../components/TaskRow";
import SubTaskList from "../components/SubTaskList";

const TaskPage = () => {
  
  const clickDeleteModal = () => {
    alert("Delete Modal for Task");
  }

  const clickEditModal = () => {
    alert("Edit Modal for Task");
  }

  return (
    <>
      <div className="pt-24 px-4 md:px-4 w-full min-h-[90vh]">
        <div className="flex flex-col md:flex-row gap-4 h-full md:justify-evenly">
          <div className="h-full md:max-w-md flex justify-center md:justify-start">
            <TaskRow />
          </div>
          <div className="h-full w-full md:max-w-lg pt-5">
            <div className="flex flex-col gap-4 justify-center md:flex-row w-full md:justify-start md:items-center">
              <div className="text-2xl font-semibold justify-start">
                Get Started
              </div>
              <div className="md:ml-auto mx-auto flex">
                <button
                  type="button" onClick={clickEditModal}
                  className="bg-gray-200 rounded-md p-2.5 hover:bg-gray-100 m-2"
                >
                  <Edit3 className="size-4" />
                </button>
                <button
                  type="button" onClick={clickDeleteModal}
                  className="bg-gray-200 rounded-md p-2.5 hover:bg-gray-100 m-2"
                >
                  <Trash2 className="size-4"/>
                </button>
              </div>
              <button
                type="button"
                className="ml-2 rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Add Sub-Task
              </button>
            </div>
            <SubTaskList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
