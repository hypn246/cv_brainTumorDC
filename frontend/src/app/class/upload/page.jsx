import PatientForm from "@/components/PatientForm"
const END_POINT='http://127.0.0.1:8000/class/upload'

const Upload = () => {
return(
  <PatientForm link={END_POINT}/>
)
}

export default Upload