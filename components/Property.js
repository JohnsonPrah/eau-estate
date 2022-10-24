import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed,faCircleCheck,faBath,faMaximize} from '@fortawesome/free-solid-svg-icons'
import DefaultImage from '../assets/images/defaultHome.jpg'
import millify from 'millify'


function property({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <div className='w-fit m-1  rounded-sm pt-0 bg-gray-100 justify-start cursor-pointer flex-wrap ' >
        <div className=''>
          <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width='400' height='260'/>
        </div>
        <div className ='w-full p-1'>
          <div className='pt-1 flex items-center justify-between mb-1'>
            <div className='items-center flex'>
              <div className='pr-1' paddingRight='3'>{isVerified && <FontAwesomeIcon icon={faCircleCheck} className='mr-2  text-blue-900' width={25} /> }</div>
              <div className='font-bold text-lg text-gray-800' >AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</div>
            </div>
            <div>
              <Image  width='70' height='32' src={agency?.logo?.url} />
            </div>
          </div>
          <div className='items-center flex p-3 justify-between w-250 text-blue-700' >
            {rooms} <FontAwesomeIcon icon={faBed} className='mr-2' width={20}/> | {baths} <FontAwesomeIcon icon={faBath} className='mr-2' width={20} /> | {Math.ceil(area)}sqrt <FontAwesomeIcon icon={faMaximize} className='mr-2' width={20}/>
          </div>
          <div className='font-lg text-gray-800'>
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </div>
        </div>
      </div>
    </Link>


  )}

export default property