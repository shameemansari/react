import { Field, Input, Label, Radio, RadioGroup } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from './Modal';

const plans = [
  { id: 1, name: 'Startup'},
  { id: 2, name: 'Business'},
  { id: 3, name: 'Enterprise'},
]

export default function TaskRow() {
  const [selected, setSelected] = useState(plans[0])
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  }

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
    
    <div className="w-[400px] card bg-slate-500/10 rounded-2xl border">
      <div className="w-full p-8">
        <div className="w-full flex justify-end">
            <button type='button' onClick={toggleModal} className='w-24 mb-2 rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-800'>
                Add Task
            </button>
        </div>
        <Field>
            <Label className="text-2xl tracking-wide font-medium text-black">SEARCH TODO </Label>
            <Input placeholder='Enter Task'
            className={'my-3 block w-full rounded-lg p-3.5 text-sm/6 focus:outline-none'}/>
        </Field>
        <br/>   
        <div className="max-h-56 h-48">
            <RadioGroup by="id" value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
            {plans.map((plan) => (
                <Radio
                key={plan.id}
                value={plan}
                className="group relative flex cursor-pointer rounded-md bg-black/70 py-3 px-5 shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-indigo-500"
                >
                <div className="flex w-full items-center justify-between">
                    <div className="text-sm/6">
                    <p className="font-semibold text-white">{plan.name}</p>
                    </div>
                </div>
                </Radio>
            ))}
            </RadioGroup>
        </div>
      </div>
    </div>
    {
      createPortal(
      <>
        <Modal isOpen={open} setIsOpen={toggleModal}>
          <form className='flex flex-col gap-2' onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            console.log("Form submitted", form);
            return;
          }}>
            <label htmlFor="">Name</label>
            <input type="text" className='w-full py-2 border-2 rounded-md border-indigo-600 outline-none px-5' name='name' placeholder='Add Title' />
            <button className='w-full text-white py-2 px-4 bg-indigo-500'>
              Submit
            </button>
          </form>
        </Modal>
      </>, document.getElementById('overlay'))
    }
    </>
  )
}