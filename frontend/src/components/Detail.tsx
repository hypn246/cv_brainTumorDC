'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import TimeSpan from '@/components/TimeSpan'
import load from '../../public/load.jpg'
const Detail = (props:any) => {
  const {id}=useParams()
  const [data, setData]=useState<any>([])
  useEffect(()=>{
     fetch(`http://127.0.0.1:8000/${props.domain}/predict/detail/`+id)
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <div className='w-full h-full'>
        <div className='btn-color gd11 w-fit m-5'>
          <a href={`/${props.domain}`}>
          <button className='btn-pale'>Return</button>
          </a>
        </div>
        <div className='detail-head relative w-full h-[30rem] flex justify-between items-center'>
          <div className={`absolute w-[70%] h-full right-0 ${props.style}`}></div>
          <div className='absolute w-[40%] h-[30%] top-[20%] z-[5] right-[10%] bg-black p-6'>
            <h1> {data.name}</h1>
            <p className='date'>{data.create_at}</p>
            <p>desc</p>
          </div>
          <div className='mri-detail-img z-[4] m-[10%]'>
            <Image src={data.image?'http://127.0.0.1:8000/'+data.image:load} alt='' width={400} height={400} 
            sizes='100%'
            style={{objectFit:'cover', zIndex:'5'}}/>
          </div>
          <div className='absolute z-[5] h-[40%] w-[40%] bg-slate-500 bottom-[10%] right-[10%] p-6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores, quidem dignissimos tenetur sunt ratione quo, repellendus sapiente iste totam praesentium optio facere doloremque ullam molestiae alias? Fugit, aliquid neque!</p>
          </div>
        </div>

        <div className="detail-body">
          <div className='p-16'>
            <TimeSpan 
            delete={`http://127.0.0.1:8000/${props.domain}/delete/`+id}
            result={data.result}
              name={data.name} 
              dest={data.resigned_hospital}
              desc={data.desc}
              sex={data.sex}
              birth={data.birth}
              address={data.address}
              is_happened={data.is_happened}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail