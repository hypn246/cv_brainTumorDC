"use client"
import Cards from "@/components/Cards"
import React, { useEffect, useState } from "react"


function DetectPage(props:any) {
  const [profiles, setProfiles]=useState<any[]>([])
  useEffect(()=>{
      fetch(`http://127.0.0.1:8000/${props.server}/predict`)
      .then(res=> res.json())
      .then(data=>{
        setProfiles(data)
        // console.log('ok')
      })
      .catch(err=>console.log(err))
    },[])
  return (
    <>
    <div className="center">
      <div className="center w-[40%] flex flex-row">
        <input type="text" name="name" id="" 
        className="w-[20%] h-10 p-5 rounded-xl text-black" />
        <div className="btn-color gd11 m-5">
          <button className="btn-pale">Search</button>
        </div>
        <div className="btn-color gd15 ">
          <a href={`/${props.domain}/upload`}>
              <button className="btn-pale">Upload</button>
          </a>
        </div>
      </div>
    </div>
    <hr className="mx-10"/>
    <div className="flex top-0">
      <div className="all flex flex-wrap w-full m-10">
      {profiles.map((profile, index)=>{
        return(
          <div key={index} className='card overflow-hidden p-10'>
            <Cards 
              target={`http://localhost:3000/${props.domain}/`+profile.id} 
              image={'http://127.0.0.1:8000'+profile.image} 
              name={profile.name} 
              date={profile.create_at} 
              desc={profile.desc}/>
          </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default DetectPage