'use client'
import Image from "next/image"
import burger from '../../public/icons8-hamburger-menu-50.png'

import { useEffect } from "react"
import Link from "next/link"

const icon=30

const Nav = () => {
  useEffect(()=>{
    document.getElementById('service').addEventListener('mouseover', ()=>{
      document.getElementById("drop").style.display="block"
    })
    document.getElementById('service').addEventListener('mouseleave', ()=>{
      document.getElementById("drop").style.display="none"
    })
    let nav= document.getElementById('nav')
    let prevY=0
    window.addEventListener('scroll',()=>{
      let currentY=window.scrollY
      // document.documentElement.scrollTop
      if(currentY>prevY){
        nav.style.top='-20rem'
        prevY=currentY
      }else{
        nav.style.top=0
      }
      prevY=currentY
    })})
  return (
    <>
    <nav id="nav">
      <div className="px-4 text-[2.3rem]  top-0 z-10 left-0 flex justify-around items-center ">
        <h1 className="logo cursor-pointer gd1 bg-clip-text text-transparent">NEUROS</h1>
      </div>
        <ul id='nav-mid' className="nav-mid flex flex-row items-center justify-between w-80 bg-transparent">
          <li>
            <Link href="/">
              <span id="home">Home</span>
            </Link>
          </li>
          <li id="service" className="flex flex-col relative">
              <span style={{cursor:"pointer"}}>Services</span>
            <div>
              <ul id='drop'>
                <li><Link href="/detect">Tumor detection</Link></li>
                <li><Link href="/class">Tumor classification</Link></li>
                <li><Link href="/segm">Tumort segmentation (Beta-Unavailable now)</Link></li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <div id='nav-right' className="p-[15px] flex justify-around items-center ">
          <a href='/signup' className="gd6 btn-color mr-5">
            <button className="btn-pale">Sign up</button>
          </a>
          <a href="/login" className="gd13 btn-color mr-5">
            <button className="btn-pale">Log in</button>
          </a>
          
        </div>
        <div id="nav-hide" className="hidden p-5 w-fit">
          <Image src={burger} width='4rem' sizes="100%" alt='' />
        </div>
    </nav>
    </>
  )
}

export default Nav