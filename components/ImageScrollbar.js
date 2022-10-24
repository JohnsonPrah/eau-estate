import React from 'react'
import { useContext } from 'react'
import Image from 'next/image'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'


const LeftArrow=()=>{
    const { scrollPrev } =useContext(VisibilityContext)

    return (
        <div className='flex justify-center items-center mr-1'>
            < FontAwesomeIcon icon={faAngleLeft} 
                    onClick={  ()=> scrollPrev() }
                    className='font-2xl cursor-pointer'
            />

        </div>
    )
}

const RightArrow=()=>{
    const { scrollNext } =useContext(VisibilityContext)

    return (
        <div className='flex justify-center items-center mr-1'>
            < FontAwesomeIcon icon={faAngleRight} 
                    onClick={ ()=> scrollNext() }
                    className='font-2xl cursor-pointer'
            />

        </div>
    )
}



function ImageScrollbar({data}) {
        

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow:'hidden'}}>
        {data.map(item=>(
            <div className='w-910 hidden p-1'  itemID={item.id}>
                <Image 
                   placeholder='blur'
                   blurDataURL={item.url}
                   src={item.url} 
                   width={500}
                   height={500}
                   alt='property'
                   sizes='(max-width:500px) 100px,(max-width):1023px 400px,1000px'
                />
            </div>
        ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar