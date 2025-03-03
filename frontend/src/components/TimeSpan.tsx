'use client'

import { useEffect } from "react"

const TimeSpan=(props:any)=>{
  useEffect(()=>{
    document.getElementById('hover')?.addEventListener('mouseover',()=>{
      document.getElementById('annotation')?.classList.remove('hidden')
    })
    document.getElementById('hover')?.addEventListener('mouseleave',()=>{
      document.getElementById('annotation')?.classList.add('hidden')
    })
  })
    return(
      <>
      <div>
        <div className="cv">
          <div className="flex items-center">
            <div className="relative">
              <h1 id='hover'>{props.result} in this MRI image</h1>

              <div id='annotation' className="absolute hidden z-50">
                <table className="text-left z-[2000]">
                    <tbody>
                    <tr>
                        <th>Glioma </th>
                        <td>U thần kinh đệm</td>
                    </tr>
                    <tr>
                        <th>Meningioma</th>
                        <td>U màng não</td>
                    </tr>
                    <tr>
                        <th>Pituitary</th>
                        <td>U Tuyến yên</td>
                    </tr>
                    <tr>
                        <th>No tumor</th>
                        <td>Không có khối u</td>
                    </tr>
                    </tbody>
                </table>
              </div>
              
            </div>
            <a href={props.delete}>
            <div className="gd16 btn-color mx-5">
              <button className="btn-pale">Delete</button>
            </div>
            </a>
          </div>
          <h2>Information:</h2>
          <div className="p-8">
            <p>Name: <span className='font-bold'>{props.name}</span></p>
            <p>Date of birth: </p>
            <p>Gender: <span className='font-bold'>{props.sex}</span></p>
            <p>Living address: <span className='font-bold'>{props.address}</span> </p>
          </div>
        </div>
        <div className='hospital'>
          <h2>{props.dest}</h2>
          <div className="p-8">
            <p className="mb-10">
              <span className="underline">Diagnose: </span>
              <span className="font-bold mx-5">{props.result}</span>
            </p>
            <p className="mb-10">
              <span className="underline">History:</span>
              <br />-Is this happened before this treatment: <span className="font-bold mx-5">{props.is_happened}</span>
            </p>
            <p className="mb-10"><span className="underline">Description:</span> {props.desc}</p>
            <p className="mb-10"><span className="underline">Treatment:</span> </p>
            <p className="px-8">-100mg paracetamoid x10</p>
          </div>
        </div>
      </div>
      </>
    )
}
export default TimeSpan