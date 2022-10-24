
import React from 'react'
import {useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { filterData,getFilterValues} from '../utils/filterData'

function SearchFilters() {
    
    const router = useRouter()
    const [filters,setFilters] = useState(filterData)

      const searchProperties =(filterValues)=>{
      const path = router.pathname;
      const {query} = router ;

      const values = getFilterValues(filterValues)

      values.forEach(item=>{
        if(item.value && filterValues?.[item.name]){
          query[item.name] = item.value
        }
       
      })

      router.push({ pathname: path, query })

    }

  return (
    <div className='flex bg-gray-100 p-4 justify-center flex-wrap'>
        { filters.map(filter=>(
            <div key={filter.queryName}>
                <select name='filter.placeholder' id='filter.placeholder' 
                   className='w-fit p-2 text-red-900 mr-1 rounded-sm mb-2 outline-none'
                   placeholder='filter.queryName'
                   onChange={e=>searchProperties({ [filter.queryName]:e.target.value })}
                   >
                    {filter?.items?.map(item=>( <option value={item.value} key={item.value}>
                      {item.name}
                      </option> ))}

                   </select>

            </div>
        ))}
    </div>
  )
}


export default SearchFilters;