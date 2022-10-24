import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey,faBath,faBed,faMaximize} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import log from '../assets/images/log.jpg'

function Navbar() {
  return (
      <div className='
                      pd-2
                      border-gray-100
                      flex
                      flex-col
                      justify-between 
                      items-center
                      mb-5 
                      px-5 border-b-2
                      md:flex-row 
                      '>
        <Link href='/'  >
            <Image src={log} width='200' alt='ben' height='100' className=' cursor-pointer pl-2' />
        </Link>
        <div className=' text-blue-900 cursor-pointer font-bold'>
           <Link href='/Search'>  Search </Link> |
            <Link href='/Search?purpose=for-sale'>Buy A Home </Link> |
            <Link href='/Search?purpose=for-rent'>Rent Apartment </Link>
        </div>

      </div>

    
  )
}

export default Navbar