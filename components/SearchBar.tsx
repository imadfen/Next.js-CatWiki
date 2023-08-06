import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import SearchIcon from './SVG Components/SearchIcon'

const people = [
    '',
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
]

function MyCombobox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
            <div className="w-[395px] relative mt-10">
                <div className='flex w-full h-[70px] rounded-full overflow-hidden bg-white'>
                    <Combobox.Input onChange={(event) => setQuery(event.target.value)} placeholder='Enter your breed' className="flex-grow h-full p-5 font-medium text-lg dark-placeholder outline-none" />
                    <Combobox.Button className="h-full w-16 flex justify-center items-center">
                        <SearchIcon fill="000" />
                    </Combobox.Button>
                </div>
                <Combobox.Options className="absolute top-full bg-white w-full rounded-2xl mt-3 p-5 max-h-[220px] overflow-y-auto overflow-x-hidden">
                    {filteredPeople.length === 0 && query !== '' ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                        </div>
                    ) : filteredPeople.map((person) => {
                        if (person == "") return
                        
                        return (
                            <Combobox.Option key={person} value={person} className="p-2 hover:bg-[#9797971A] rounded-2xl cursor-pointer">
                                {person}
                            </Combobox.Option>
                        )
                    })}
                </Combobox.Options>
            </div>
        </Combobox>
    )
}

export default MyCombobox