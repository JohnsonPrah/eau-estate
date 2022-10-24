import { fetchApi , baseUrl } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed,faCircleCheck,faBath,faMaximize} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

const PropertyDetails = ({propertyDetails:{ price,rentFrequency,rooms,title,baths,area,agency,isVerified,description,type
                           ,purpose,furnishingStatus,amenities,photos}}) => 
                           
                           
                           
                           (
    <div className='max-w-1000 m-auto p-4'>
        { photos  &&  <ImageScrollbar data={ photos } />}
        <div className='w-400 p-6 '>
            <div className='pt-1 flex items-center justify-beteen mb-1'>
                <div className='items-center flex mr-7'>
                    <div className='pr-1 mr-1' paddingRight='3'>{isVerified && <FontAwesomeIcon icon={faCircleCheck} className='mr-2  text-blue-900' width={25} /> }</div>
                    <div className='font-bold text-lg text-gray-800' >AED {price}{rentFrequency && `/${rentFrequency}`}</div>
                </div>
                <div>
                <Image  width='70' height='32' src={agency?.logo?.url} alt="hi"/>
                </div>
            </div>
    
            <div className='mb-2 text-red-900' >
                <h1 className='mb-1 font-lg'>Total Bed Rooms  : {rooms} </h1> 
                <h1 className='mb-1'>Total BathRooms : {baths} </h1>
                <h1 className='mb-1'>Maximum Property Size : {Math.ceil(area)}sqrt  </h1>
                  
            </div>

            <div className='text-lg text-gray-800 font-bold mb-2'>
                {title}
            </div>
            <div className='text-lg text-gray-500 leading-1 mb-2'>
                {description}
            </div>
            <div className="uppercase mb-2 ">
                <div className="flex ">
                    <p className='mr-2 mb-1' >type -</p>
                    <h1 className="font-bold">{type}</h1>
                </div>
                <div className="flex ">
                    <p className='mr-2 mb-1'>purpose -</p>
                    <h1 className="font-bold">{purpose}</h1>
                </div>
                {furnishingStatus && (
                    <div className="flex">
                    <p className='mr-3' >furnishing Status</p>
                    <h1 className="font-bold">{furnishingStatus}</h1>
                </div>
                )}
            </div>

            <div className="">
               {amenities.length && <h1 font-2xl font-black mt-5>Amenities</h1> }
               <div className="flex flex-wrap">
                  {amenities.map(item=>(
                    item.amenities.map(amenity=>( 
                    <h1 className='font-bold text-red-400 text-2 p-2 bg-gray-200 m-1 rounded-lg' key={amenity.text}>
                        {amenity.text}
                        </h1> ))
                  ))}
               </div>
            </div>
            
        </div>
    </div>
)

export default PropertyDetails;


export async function getServerSideProps({params : { id }}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props : {
            propertyDetails:data
        }
    }
}