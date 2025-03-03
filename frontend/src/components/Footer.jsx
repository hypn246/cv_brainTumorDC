import Image from 'next/image'
import React from 'react'
import git from '../../public/icons8-github-50.png'
import ig from '../../public/icons8-instagram-30.png'
import fb from '../../public/icons8-facebook-50.png'

const w=25
const Footer = () => {
  return (
    <footer>
        <section>
            <div>
                <h2 className='footer-head'>Contact</h2>
                <ul className='footer-link'>
                    <li>
                        <p><span>Email: </span>exmaple@gmail.com</p>
                    </li>
                    <li>
                        <p>Tele: (+98) 0123456789</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='footer-head'>Service</h2>
                <ul className='footer-link'>
                    <li><a href="/detect">Detection</a></li>
                    <li><a href="/class">Classification</a></li>
                    <li><a href="/segm">Segmentation</a></li>
                </ul>
            </div>
            <div>
                <h2 className="footer-head">Project</h2>
                <ul className='footer-link'>
                    <li>Web</li>
                    <li>Deep learning</li>
                    <li>Software</li>
                    <li>Network</li>
                    <li>Games</li>
                </ul>
                <h2 className="footer-head">Company</h2>
                <ul className='footer-link'>
                    <li>Web</li>
                    <li>Deep learning</li>
                    <li>Software</li>
                    <li>Network</li>
                    <li>Games</li>
                </ul>
            </div>
            <div>
                <h2 className='footer-head'>More about us</h2>
                <ul className='flex flex-row items-center justify-start'>
                    <li><a href="/"><Image alt='' src={git} width={w} height={w}></Image></a></li>
                    <li><a href="/"><Image alt='' src={ig} width={w} height={w}></Image></a></li>
                    <li><a href="/"><Image alt='' src={fb} width={w} height={w}></Image></a></li>
                </ul>
                <ul className='flex flex-row items-center justify-start'>
                    <li><input className="in-text" type="text" placeholder='your email...' /></li>
                    <li><input className='btn-pale' type="submit" value={'sumbit'}/></li>
                </ul>
            </div>
        </section>
        
        <hr />
        <div className='flex items-center justify-center mt-5'>
            <p>&copy;2024 by HYPN, All right reserved </p>
        </div>
    </footer>
    
  )
}

export default Footer