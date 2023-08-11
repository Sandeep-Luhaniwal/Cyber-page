import React, { useState } from 'react'
import { CrossIcon, DiscordIcon, MaxIcon, MenuIcon, PlanIcon, TwitterIcon } from './Icon'
import { Link } from 'react-router-dom';
import MainLogo from '../assets/imges/webp/Main_Logo.webp'
import twitt from '../assets/imges/svg/bullr.svg'

const Nav = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className='position-fixed z-index-100 w-100 top-0 bg-black'>
                <div className='myContainer pt-2 pt-md-0 bg-black'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='gap-4 d-flex  opcity align-items-center'>
                            <img src={MainLogo} alt="" className='MainLogo' />
                        </div>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-lg-none z-index-1000 crossIconset'
                                onClick={() => setMenu(false)}>
                                <Link><CrossIcon /></Link>
                            </div>
                            <div className='d-flex gap-20 align-items-center'>
                                <Link to="/abc" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular'>Home</Link>
                                <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular'>About</Link>
                                <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular'>Team</Link>
                                <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular'>Roadmap</Link>
                                <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular'>Partners</Link>
                                <div className='gap-12 d-flex d-none d-lg-block d-lg-flex'>
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
                                <button onClick={() => setMenu(false)} className='inline-btn hoverEffect ff_primary position-relative fs_sm color_white fw_medium px-3 py-2 border-0 opcity_1'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                        <div className='gap-12 d-flex d-lg-none'>
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
                        <div className='d-lg-none '>
                            <Link onClick={() => setMenu(true)}>
                                <MenuIcon /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav