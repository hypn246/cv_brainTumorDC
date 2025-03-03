'use server'

import PatientForm from "@/components/PatientForm"
const END_POINT='http://127.0.0.1:8000/detc/upload'

const Upload = async() => {
  return(
    <PatientForm link={END_POINT}/>
  )
}

export default Upload