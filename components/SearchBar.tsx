import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import SearchIcon from './SVG Components/SearchIcon'

export interface breedType {
    id: string,
    name: string,
    image?: string,
}

function MyCombobox({ options, redirectTo }: { options: breedType[], redirectTo: (path: string) => void, }) {
    const [selectedBreed, setSelectedBreed] = useState<breedType>({ id: "", name: "", image: "" })
    const [query, setQuery] = useState("")

    const filteredBreeds =
        query === ""
            ? options
            : options.filter((breed) => {
                return breed.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={selectedBreed} onChange={setSelectedBreed}>
            <div className="w-[395px] relative mt-10">
                <div className='flex w-full h-[70px] rounded-full overflow-hidden bg-white'>
                    <Combobox.Input onChange={(event) => setQuery(event.target.value)} id="search" value={query} placeholder='Enter your breed' className="flex-grow h-full p-5 font-medium text-lg dark-placeholder outline-none" />
                    <label htmlFor="search" className="h-full w-16 flex justify-center items-center">
                        <SearchIcon fill="000" />
                    </label>
                </div>
                <Combobox.Options className="absolute top-full bg-white w-full rounded-2xl mt-3 p-5 max-h-[220px] overflow-y-auto overflow-x-hidden">
                    {filteredBreeds.length === 0 && query !== '' ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                        </div>
                    ) : filteredBreeds.map((breed) => {
                        return (
                            <Combobox.Option key={breed.id} value={breed} className="p-2 hover:bg-[#9797971A] rounded-2xl cursor-pointer" onClick={() => redirectTo("/cats/" + breed.id)}>
                                {breed.name}
                            </Combobox.Option>
                        )
                    })}
                </Combobox.Options>
            </div>
        </Combobox>
    )
}

export default MyCombobox