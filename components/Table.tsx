import { CatalogContext } from '@/Contexts/CatalogContext'
import { IData } from '@/interface/IData'
import { formatNum } from '@/utils/formatNum'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const Table = () => {
    const [checked, setChecked] = useState(false)
    const context = useContext(CatalogContext)
    const data = context?.catalog

    return (
        <>
            <div className="overflow-x-auto px-10">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#F0F4FE]">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                <input onChange={() => setChecked(prev => !prev)} checked={checked} type="checkbox" name="" id="" />
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                S/N
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                SKU
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Brand
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Cost Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                Size
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data ? data.filter((user) => (context.patientSearch.toLowerCase().trim() == "" ? data : user.Name ? user?.Name.toLowerCase().includes(context.patientSearch.toLowerCase()) : null || user.Title ? user?.Title.toLowerCase().includes(context.patientSearch.toLowerCase()) : null || user?.Quantity == parseInt(context.patientSearch) || user?.['Cost Price'] == parseInt(context.patientSearch) )).map((person, index) => (
                            <tr key={person.SKU}>
                                <td className="px-6 py-4 whitespace-nowrap text-xs">
                                    <input checked={checked} type="checkbox" name="" id="" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    <Image src={person.Image_1} alt='Image' width={35} height={35} className='hover:scale-150 duration-700 hover:shadow-2xl' />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {person.SKU}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {person.Name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {person.Title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {person.Description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {person.Brand}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {formatNum(person['Cost Price'])}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {formatNum(person.Quantity)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                                    {person.size}
                                </td>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table