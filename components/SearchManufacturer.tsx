"use client"
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers = 
    query === "" ? manufacturers : manufacturers.filter((item) => (item.toLowerCase().replace(/\+/g, "").includes(query.toLowerCase().replace(/\s+/g,""))))
    return (
        <div className="search-manufacturer">
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className={"absolute top-[14px]"}>
                        <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt='car image'/>
                    </Combobox.Button>
                    <Combobox.Input className={"search-manufacturer__input"} placeholder="Vokswagen" displayValue={(manufacturer : string) => manufacturer} onChange={(e)=> setQuery(e.target.value)}/>
                    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={()=> setQuery('')}></Transition>
                    <Combobox.Options>
                        {filteredManufacturers.length === 0 && query !== "" && (<Combobox.Option className={"search-manufacturer__option"} value={query}>
                            create "{query}"
                        </Combobox.Option>)}
                    </Combobox.Options>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
// 1:11:09
// (
//     filteredManufacturers.map((item)=> (
//         <Combobox.Option value={item} key={item} className={{({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`</Combobox.Options>}}></Combobox.Option>
//     ))
// )