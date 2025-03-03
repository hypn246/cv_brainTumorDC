'use client'
import {useEffect, useState } from "react"

const PatientForm = (props) => {

  const [name,setName]=useState('')
  const [desc,setDesc]=useState('')
  const [address,setAddress]=useState('')
  const [is_happened,setIs_happended]=useState('No')
  const [phone,setPhone]=useState(undefined)
  const [birth,setBirth]=useState(undefined)
  const [sex,setSex]=useState('female')
  const [image,setImage]=useState()

  const handelFileUpload=(e) => {
    e.preventDefault()
    setImage(e.target.files[0]);
  }

  const newDetect=async()=>{ 
    let body=new FormData
    body.append('name', name)

    body.append('image', image)
    body.append('address', address)
    body.append('phone', phone)
    body.append('desc', desc)
    body.append('sex', sex)
    body.append('is_happened', is_happened)

    await fetch({
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': document.cookie,
        },
        method:'POST',
        url:props.link,
        data:body
    })
  }
  return (
    <>
    <div>
      <div className="center flex-col">
        <form className='upform w-[60%]' method="POST"
        encType='multipart/form-data' action={props.link}>
          {/* name  */}
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="" required
                onChange={(e)=>{setName(e.target.value)}}
                placeholder='Name...'/>
          
          {/* patient birthday  */}
          {/* <label htmlFor="">Date of birth</label>
          <input type="date" name="birth" id="birth" required
                 onChange={(e)=>handelBirth(e.target.value)} placeholder='Age...' /> */}

          {/* patien's sex */}
          <label>Sex</label>
          <select name="sex" id="" required 
          onChange={(e)=>setSex(e.target.value)}>
            <option key={'female'} value="Female">Female</option>
            <option key={'male'} value="Male">Male</option>
          </select>

          {/* phone number  */}
          <label htmlFor="">Phone number</label>
          <input type="number" name="phone" id="" required
                 onChange={(e)=>setPhone(e.target.value)} placeholder='Contact number...' />

          {/* mri img  */}
          <label htmlFor="">MRI image</label>
            <input type="file" name="image" id="upload" required className='upfile bg-white'
            onChange={handelFileUpload}/>


          {/* state before  */}
          <label htmlFor="">Is this happed?</label>
          <div>
            <label htmlFor="true"><input type="radio" name="is_happended" value='Yes' onChange={(e)=>setIs_happended(e.target.value)}/>Yes</label>
            <label htmlFor="false"><input type="radio" name="is_happended" defaultChecked value='No' onChange={(e)=>setIs_happended(e.target.value)}/>No</label>
          </div>
          {/* living address  */}
          <label htmlFor="">Living address</label>
          <input type="text" name="address" id=""  placeholder='Address...' required onChange={(e)=>{setAddress(e.target.value)}}/>

          {/* hospital resigned  */}
          <label htmlFor="">Resigned hospital</label>
          <input type="text" name="resigned_hospital" id=""  placeholder='Hospital name...'/>

          {/* desciption  */}
          <label htmlFor="">Doctor's description</label>
          <textarea type="text" name="desc" className="w-full p-5 rounded-2xl text-black"
                 onChange={(e)=>setDesc(e.target.value)} placeholder='Illness  description...'/>

          <div className="btn-color gd6 w-fit my-5 center">
            <button type="submit" onClick={()=>newDetect()} className='btn-pale'>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default PatientForm