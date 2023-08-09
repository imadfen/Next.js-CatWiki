import { Combobox, Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import SearchIcon from './SVG Components/SearchIcon'
import XIcon from './SVG Components/XIcon'


export interface breedType {
    id: string,
    name: string,
    image?: string,
}

interface propsType {
    isOpen: boolean,
    onClose: () => void,
    options: breedType[],
    redirectTo: (path: string) => void,
}

export default function SearchDialog({ isOpen, onClose, options, redirectTo }: propsType) {
    const [selectedBreed, setSelectedBreed] = useState<breedType>({ id: "", name: "", image: "" })
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? options
            : options.filter((breed) => {
                return breed.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        < Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed top-0 w-full overflow-y-auto">
                    <div className="flex w-full min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="mt-1">
                                    <Combobox value={selectedBreed} onChange={setSelectedBreed}>
                                        <div className='w-full min-h-[350px] flex flex-col'>
                                            <button className='bg-[#9797971a] p-2 w-fit ml-auto mb-10 active:scale-95 transition-all duration-200' onClick={onClose}>
                                                <XIcon fill="#000" />
                                            </button>
                                            <div className='flex items-center mb-3 ring ring-black rounded-full overflow-hidden'>
                                                <Combobox.Input onChange={(event) => setQuery(event.target.value)} id="search" placeholder='Enter your breed' className="flex-grow h-full p-5 font-medium text-lg dark-placeholder outline-none" />
                                                <label htmlFor="search" className='px-4'>
                                                    <SearchIcon fill='#000' />
                                                </label>
                                            </div>
                                            <Combobox.Options>
                                                <div className='max-h-[400px] overflow-y-auto'>
                                                    {filteredPeople.length === 0 && query !== '' ? (
                                                        <div className="relative cursor-default select-none py-2 w-full text-gray-700">
                                                            Nothing found.
                                                        </div>
                                                    ) : filteredPeople.map((breed) => {
                                                        return (
                                                            <div key={breed.id} className='p-3 hover:bg-[#9797971A] rounded-2xl cursor-pointer text-lg font-medium'>
                                                                <Combobox.Option value={breed.name} onClick={() => redirectTo("/cats/" + breed.id)}>
                                                                    {breed.name}
                                                                </Combobox.Option>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Combobox.Options>
                                        </div>
                                    </Combobox>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </ Transition>
    )
}