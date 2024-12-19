import { Field, Input, Label, Radio, RadioGroup } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from './Modal';

const plans = [
  { id: 1, name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256GB SSD disk' },
  { id: 2, name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512GB SSD disk' },
  { id: 3, name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1TB SSD disk' },
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
                    {/* <div className="flex gap-2 text-white/70">
                        <div>{plan.ram}</div>
                        <div aria-hidden="true">&middot;</div>
                        <div>{plan.cpus}</div>
                        <div aria-hidden="true">&middot;</div>
                        <div>{plan.disk}</div>
                    </div> */}
                    </div>
                    {/* <CheckCircle2 className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" /> */}
                </div>
                </Radio>
            ))}
            </RadioGroup>
        </div>
      </div>
    </div>
    {
              createPortal(<>
              <Modal isOpen={open} setIsOpen={toggleModal}>
              <p>This is within modal</p>
            </Modal>
            </>, document.getElementById('overlay'))
            }
    </>
  )
}