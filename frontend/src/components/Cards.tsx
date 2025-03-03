'use client'
import Image from 'next/image'
import Link from 'next/link'

const cut=(desc:String)=>{
  // if(desc.length>151){
  //   desc=desc.slice(0,desc.indexOf(" ",150)).concat('...')
  // }
  return desc.length>150?desc=desc.slice(0,desc.indexOf(" ",150)).concat('...'):desc
}

const Cards = (props:any) => {
  return (
    //becasue the map require key that can not passed into this component so the below div will be move into mother page
    
    //div className='card overflow-hidden p-10'
    <>
      <Link  href={props.target} className=''>
        <div className='bg-transparent h-fit border-gray-500 border-solid border-2 rounded-2xl'>

          <div className='center card-img bg-transparent rounded-xl w-full h-[23rem] overflow-hidden cursor-pointer '>
            <Image src={props.image} width={0} height={0} sizes='100%' 
            style={{objectFit:'cover', width:'100%'}} className='' alt=""/>
          </div>
          <div className='card-content relative w-full h-full'>

            <div className='card-flip h-full w-full absolute gd11 rounded-xl bottom-0'></div>

            <div>
              <div className='card-desc relative bg-transparent p-5 pb-10'>
                <h2 className='card-text'>{props.name}</h2>
                <p className='card-text'>{props.date}</p>
              </div>
            </div>

          <div className='w-full card-hide hidden absolute p-5'>
              <h2>{props.name}</h2>
              <p id='desc'>
                {cut(props.desc)}
              </p>
          </div>
          </div>


        </div>
      </Link>
    </>
  )
}

export default Cards