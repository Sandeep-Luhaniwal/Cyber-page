import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Wedo1 from '../assets/imges/webp/We_do_1.webp'
import Wedo2 from '../assets/imges/webp/We_do_2.webp'
import Wedo3 from '../assets/imges/webp/We_do_3.webp'
import Wedo4 from '../assets/imges/webp/We_do_4.webp'
import Wedo5 from '../assets/imges/png/wedoBuler.png'
import Wedo6 from '../assets/imges/png/wedoBuler1.png'
import Wedo7 from '../assets/imges/png/WedoUmberla1.png'

const Wedo = () => {
    return (
        <>
            <div className='position-relative'>
                <div className='position-absolute wedoleft'>
                    <img src={Wedo6} className='w-100' alt="" />
                </div>
                <div className='position-absolute wedoright end-0'>
                    <img src={Wedo5} className='w-100' alt="" />
                </div>
                <div className='position-absolute wedoImgUmberla end-0'>
                    <img src={Wedo7} className='w-100' alt="" />
                </div>
                <div className='myContainer position-relative z-2'>
                    <Row className='align-items-center justify-content-between'>
                        <Col md={6} className='pt-4 pt-md-0 d-flex'>
                            <div className="d-sm-grid">
                                <div className="wedo1 py-3 py-sm-0">
                                    <img src={Wedo1} className='w-100' alt="Wedo" />
                                </div>
                                <div className="wedo2 py-3 py-sm-0">
                                    <img src={Wedo2} className='w-100' alt="Wedo" />
                                </div>
                                <div className="wedo3 mt--24 py-3 py-sm-0">
                                    <img src={Wedo3} className='w-100' alt="Wedo" />
                                </div>
                                <div className="wedo4 mt--24 py-3 py-sm-0">
                                    <img src={Wedo4} className='w-100' alt="Wedo" />
                                </div>

                            </div>
                        </Col>
                        <Col md={6} lg={5} className=' py-3 py-md-0'>
                            <h2 className='fw_extraBold fs_xl color_white mb-0 text-center text-md-start'>Our <span className='color_primary'>We do</span></h2>
                            <p className='fw_regular fs_2sm color_white mb-0 pt-3 mt-1 text-center text-md-start'>1000 Cyber Drops will be dropping on Ethereum in March 2022. Each and every Cyber Drop is uniquely hand crafted. This is just the beginning of our journey. Owning a Cyber Drop will unlock monthly airdrops and future governance rights in addition to our revolutionary algorithm. We strive to always bring innovation and keep BUILDing. Cyber Drops is a community driven project and always will be that way. That’s our promise.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Wedo