import React from 'react'
import footerImg from '../assets/imges/webp/Header_logo.webp'
import { DiscordIcon, MaxIcon, PlanIcon, TwitterIcon } from './Icon'
import twitt from '../assets/imges/svg/bullr.svg'
import buler from '../assets/imges/png/buler.png'

const Footer = () => {
    return (
        <>

            <div className="myContainer pt-35 pt-sm-50 pt-md-90 pt-lg-161 position-relative z-2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="2000">
                    <img src={footerImg} alt="footer img" className='footerImg' />
                </div>
                <h5 className='text-center mb-0 fs_2lg fw_semiBold color_primary pt-2'>Cyber Drops</h5>
                <p className='text-center mb-0 fw_regular fs_sm color_white pt-2'>Viverra metus viverra rhoncus eget quam suspendisse diam <span className='d-md-block'>amet, nisl. Mattis maecenas libero lacinia accumsan amet.</span></p>
                <div className='d-flex justify-content-center gap-3 pt-4 pb-3'>
                    <div className='iconNav d-flex justify-content-center align-items-center'>
                        <a href="https://www.instagram.com/" target='_'><PlanIcon /></a>
                    </div>
                    <div className='iconNav d-flex justify-content-center align-items-center'>
                        <a href="https://discord.com/" target='_'><DiscordIcon /></a>
                    </div>
                    <div className='iconNav d-flex justify-content-center align-items-center position-relative'>
                        <img src={twitt} alt="" className='position-absolute bullar' />
                        <a href="https://twitter.com/" target='_' className='z-3'><TwitterIcon /></a>
                    </div>
                    <div className='iconNav d-flex justify-content-center align-items-center'>
                        <a href="https://www.maxfashion.in/in/en/" target='_'><MaxIcon /></a>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden borderfooter'>
                <p className='text-center color_white fs_sm fw_regular mb-0 py-3 op-5'>Copyright By 2022</p>
            </div>
            <div className='position-relative'>
                <div className='Imgbluer'>
                    <img src={buler} alt="bluer" className='position-relative w-100' />
                </div>
            </div>
        </>
    )
}

export default Footer