import{useRouter} from 'next/router'
import {useState} from 'react'
import React from 'react'
import Property from '../components/Property'
import SearchFilters from '../components/SearchFilters';
import { fetchApi , baseUrl } from '../utils/fetchApi'
import noresult from '../assets/images/noresult.png'

function Search({properties}) {
    const router =useRouter();



  return (
    <section className=' '>
        {<SearchFilters />}
            <h1 className=' font-4xl ml-12 text-10 p-4 font-bold'>
                Properties {router.query.purpose}
            </h1>
            <div className=' px-1 mx-2 gap-2 md:mx-5 lg:mx-14 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex place-items-center'>
                {properties.map(property=>< Property property={property} key={property.id}/>)}
            </div>
            {properties.length === 0 && ( <div className='flex justify-center flex-col items-center mt-5 mb-5'>
               
                <h1 className='text-4xl mt-3 font-black'>NO RESULT FOUND</h1>
            </div> )}

    </section>
  )
}

export default Search

export async function getServerSideProps({query}){
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
      props:{
        properties: data?.hits,
      }
    }
  }
  