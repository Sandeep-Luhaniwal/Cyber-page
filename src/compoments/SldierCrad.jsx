import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import People_1 from '../assets/imges/png/SliderImg1.png'
import People_2 from '../assets/imges/png/SliderImg2.png'
import { DiscordIcon, MaxIcon, TwitterIcon } from './Icon';
import Umberla3 from '../assets/imges/png/Umberla3.png'
import SliderBuler from '../assets/imges/png/sliderBuler.png'


const SldierCrad = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                }
            },]

    };
    return (
        <div className='position-relative'>
            <img src={Umberla3} alt="bluer" className='UmberlaSlider d-none d-md-block' />
            <div className='sliderbuler position-absolute'>
                <img src={SliderBuler} alt="" className='w-100' />
            </div>
            <div className='myContainer position-relative z-2'>
                <h2 className='fw_extraBold fs_xl color_white mb-0 text-center mb-lg-1 pb-lg-2'>Meet the <span className='color_primary'>Team</span></h2>
                <Slider {...settings} className='my-5'>
                    <div className='d-flex justify-content-center px-2'>
                        <div className='Slidercard d-sm-flex align-items-center'>
                            <div>
                                <img src={People_2} className='people_1' alt="People" />
                            </div>
                            <div className='px-40 py-3'>
                                <h4 className='fw_bold color_black fs_2md mb-0 text-center pb-2'>Varun Muthu</h4>
                                <p className='fw_medium color_black fs_md mb-0 text-center pb-2 pb-sm-4'>Marketing Director</p>
                                <a className='fw_medium color_black fs_md mb-0 text-center ' target='/' href="https://www.linkedin.com/in/varunmuthu1">https://www.linkedin.com/<span className='d-block'>in/varunmuthu1</span></a>
                                <div className='gap-2 d-flex justify-content-center pt-2 pt-sm-4 hoverIcon'>
                                    <a href="https://discord.com/" target='_' className='IconChangeColor'><DiscordIcon /></a>
                                    <a href="https://twitter.com/" className='IconChangeColor' target='_'><TwitterIcon /></a>
                                    <a href="https://www.maxfashion.in/in/en/" className='IconChangeColor' target='_'><MaxIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center px-2'>
                        <div className='Slidercard d-sm-flex align-items-center'>
                            <div>
                                <img src={People_1} className='people_1' alt="People" />
                            </div>
                            <div className='px-40 py-3'>
                                <h4 className='fw_bold color_black fs_2md mb-0 text-center pb-2'>Shubh Sharma</h4>
                                <p className='fw_medium color_black fs_md mb-0 text-center pb-2 pb-sm-4'>Operations Director</p>
                                <a className='fw_medium color_black fs_md mb-0 text-center ' target='/' href="https://www.linkedin.com/in/varunmuthu1">https://www.linkedin.com/<span className='d-block'>in/shubhsharma01/</span></a>
                                <div className='gap-2 d-flex justify-content-center pt-2 pt-sm-4'>
                                    <a href="https://discord.com/" target='_' className='IconChangeColor'><DiscordIcon /></a>
                                    <a href="https://twitter.com/" className='IconChangeColor' target='_'><TwitterIcon /></a>
                                    <a href="https://www.maxfashion.in/in/en/" className='IconChangeColor' target='_'><MaxIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center px-2'>
                        <div className='Slidercard d-sm-flex align-items-center'>
                            <div>
                                <img src={People_2} className='people_1' alt="People" />
                            </div>
                            <div className='px-40 py-3'>
                                <h4 className='fw_bold color_black fs_2md mb-0 text-center pb-2'>Varun Muthu</h4>
                                <p className='fw_medium color_black fs_md mb-0 text-center pb-2 pb-sm-4'>Marketing Director</p>
                                <a className='fw_medium color_black fs_md mb-0 text-center ' target='/' href="https://www.linkedin.com/in/varunmuthu1">https://www.linkedin.com/<span className='d-block'>in/varunmuthu1</span></a>
                                <div className='gap-2 d-flex justify-content-center pt-2 pt-sm-4'>
                                    <a href="https://discord.com/" target='_' className='IconChangeColor'><DiscordIcon /></a>
                                    <a href="https://twitter.com/" className='IconChangeColor' target='_'><TwitterIcon /></a>
                                    <a href="https://www.maxfashion.in/in/en/" className='IconChangeColor' target='_'><MaxIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center px-2'>
                        <div className='Slidercard d-sm-flex align-items-center'>
                            <div>
                                <img src={People_1} className='people_1' alt="People" />
                            </div>
                            <div className='px-40 py-3'>
                                <h4 className='fw_bold color_black fs_2md mb-0 text-center pb-2'>Shubh Sharma</h4>
                                <p className='fw_medium color_black fs_md mb-0 text-center pb-2 pb-sm-4'>Operations Director</p>
                                <a className='fw_medium color_black fs_md mb-0 text-center ' target='/' href="https://www.linkedin.com/in/varunmuthu1">https://www.linkedin.com/<span className='d-block'>in/shubhsharma01/</span></a>
                                <div className='gap-2 d-flex justify-content-center pt-2 pt-sm-4'>
                                    <a href="https://discord.com/" target='_' className='IconChangeColor'><DiscordIcon /></a>
                                    <a href="https://twitter.com/" className='IconChangeColor' target='_'><TwitterIcon /></a>
                                    <a href="https://www.maxfashion.in/in/en/" className='IconChangeColor' target='_'><MaxIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}


export default SldierCrad