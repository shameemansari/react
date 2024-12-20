import { Edit3, Trash2, X } from "lucide-react";
import TaskRow from "../components/TaskRow";

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
            <div className="group relative flex cursor-pointer rounded-md bg-slate-900 py-3 px-5 mt-5 shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-indigo-500">
              <div className="flex w-full items-center justify-between">
                <div className="text-sm flex gap-4">
                  <input
                    id="some"
                    type="checkbox"
                    name="subtask"
                    className="inline"
                    onChange={(e) =>
                      alert(e.target.checked ? "Checked" : "Unchecked")
                    }
                  />
                  <label
                    htmlFor="some"
                    className="font-semibold text-white line-through p-2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aperiam dolores odio quibusdam sed corporis fugit natus fugiat quidem similique!
                  </label>
                </div>
                <div className="flex gap-5 items-center">
                  <Edit3
                    className="size-4 text-white"
                    onClick={() => alert("Edit Option")}
                  />
                  <X
                    className="size-5 text-white"
                    onClick={() => alert("Delete Option")}
                  />
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
