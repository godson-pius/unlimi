import { CatalogContext } from '@/Contexts/CatalogContext'
import Image from 'next/image'
import React, { ChangeEvent, useContext } from 'react'
import { FiArrowDown, FiChevronDown, FiSearch } from 'react-icons/fi'

const Header = () => {
    const context = useContext(CatalogContext)

    const handleSearch = (e: ChangeEvent<HTMLSelectElement>) => {
        context?.setSearch(e.target.value)
    }
    
    const handlePatientSearch = (e: ChangeEvent<HTMLInputElement>) => {
        context?.setPatientSearch(e.target.value)
    }

    return (
        <>
            <main className='flex bg-white px-10 py-5 justify-between'>
                <section className='flex gap-16'>
                    <Image src={'/logo.png'} alt='Logo' width={160} height={160} />
                    <div className='flex gap-3'>
                        <select onChange={(e) => handleSearch(e)} name="supplier" id="supplier" className='ring-1 ring-gray-200 rounded-lg px-4 gap-2 w-56 outline-none text-xs text-gray-500'>
                            <option value="FragranceX">Select Supplier</option>
                            <option value="FragranceX">FragranceX</option>
                            <option value="FragranceNet">FragranceNet</option>
                            <option value="Morris Costumes">Morris Costumes</option>
                        </select>
                        <div className="search flex items-center ring-1 ring-gray-200 rounded-lg px-4 gap-2">
                            <FiSearch className='text-gray-400' />
                            <input onChange={(e) => handlePatientSearch(e)} type="search" name="search" id="search" placeholder='Search by patients...' className='font-light text-xs placeholder:text-gray-500 outline-none w-56' />
                        </div>
                    </div>
                </section>

                {/* right side */}
                <section className='flex items-center gap-2'>
                    <Image src={'/notification.png'} alt='Logo' width={27} height={27} />
                    <div className="doc w-8 h-8 bg-[url('/doc.png')] bg-no-repeat bg-cover bg-center rounded-full"></div>
                    <div className="username flex items-center gap-2">
                        <h1 className='text-sm'>Deko</h1>
                        <FiChevronDown className='text-gray-400' />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Header