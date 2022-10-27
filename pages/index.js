import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { baseUrl,fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'


export default function Home({propertiesForSale,propertiesForRent}) {
  return (
    <div className='w-full '>
      
      
      <h1 className='flex justify-center mt-5 font-bold my-2
                     items-center text-xl text-blue-900 text-center'>
         Tour our Properties/Homes-For-Sale !!!
      </h1>
      

      <p className='flex mb-10 justify-center items-center text-center text-blue-800'>
        Looking to Sell,Lease or Own a property in Dubai? Look no further,
        List with Windermere & find <br /> a tenant or buyer  in a jiffy!
      </p>
      <div className='px-1 mx-2 gap-2 md:mx-5 lg:mx-14 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex place-items-center'>
           {propertiesForSale.map(property => <Property property={property} key={property.id}/>)}
      </div>

      

      <h1 className='flex justify-center mt-20 mb-5 font-bold
                     items-center text-xl text-blue-900 text-center' >
        Tour our Apartments-for-Rent !!!
      </h1>

      <p className='flex mx-4  text-center mb-7 justify-center items-center text-blue-800'>
            On vacations,trying to Relax and rejuvenate ? 
            Reside With its avant-garde design, magnificent views overlooking <br /> two golf courses and Dubai’s 
            skyline, these Apartments
            inspire wellbeing,  sophistication and a <br />
            holiday atmosphere.
          
      </p>

      <div className='px-1 mx-2 gap-2 md:mx-5 lg:mx-14 sm:grid md:grid-cols-2 md:py-1 xl:grid-cols-3 3xl:flex place-items-center'>
      {propertiesForRent.map(property => <Property property={property} key={property.id}/>)}

      </div>
      
      

     
    </div>
  )
}


export async function getStaticProps(){

  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`)
  return {
    props:{
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}
