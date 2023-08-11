import React from 'react'
import Patnership_1 from '../assets/imges/png/playbit.png'
import Patnership_2 from '../assets/imges/png/24.png'
import Patnership_3 from '../assets/imges/png/Trading.png'
import Patnership_4 from '../assets/imges/png/Focus.png'
import { Row } from 'react-bootstrap'

const Partners = () => {
    return (
        <>
            <h2 className='text-center fw_extraBold fs_xl color_white mb-0'>Part<span className='color_primary'>ners</span></h2>
            <section className='Partners py-160 pt-xl'>
                <div className="myContainer overflow-hidden">
                    <Row className=''>
                        <div className='d-flex flex-wrap justify-content-center gap-42 pt-4 mt-1 mt-md-2 pt-xl-0 mt-xl-0'>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='d-flex align-items-center justify-content-center boxPartnership ' data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                                    <img src={Patnership_1} className='w-100 Patnership_1' alt="Patnership_1" />
                                </div>
                                <p className='color_black fs_2sm fw_bold mb-0 pt-4'>Playbit</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='d-flex flex-wrap justify-content-center boxPartnership_2' data-aos="fade-down" data-aos-duration="1500">
                                    <img src={Patnership_2} className='Patnership_2 mt-1' alt="Patnership_2" />
                                </div>
                                <p className='color_black fs_2sm fw_bold mb-0 pt-4'>24 Capital</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='d-flex flex-wrap justify-content-center boxPartnership_2' data-aos="fade-up" data-aos-duration="1500">
                                    <img src={Patnership_3} className='Patnership_3 ' alt="Patnership_3" />
                                </div>
                                <p className='color_black fs_2sm fw_bold mb-0 pt-4'>TradingHive</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='d-flex flex-wrap justify-content-center boxPartnership_2' data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                                    <img src={Patnership_4} className='Patnership_4 mt-1' alt="Patnership_4" />
                                </div>
                                <p className='color_black fs_2sm fw_bold mb-0 pt-4'>Playbit</p>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
            <p className='mb-0 color_primary text-center fs_2sm fw_bold mt--18 px-3'>For business and collaborations, contact us team@cyberdrops.finance</p>
        </>
    )
}

export default Partners