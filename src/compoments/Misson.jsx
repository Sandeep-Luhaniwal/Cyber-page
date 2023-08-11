import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MissonBluer1 from '../assets/imges/png/MissionBluer1.png'
import MissonBluer2 from '../assets/imges/png/MissionBluer2.png'
import MissonUmb from '../assets/imges/png/rotateUmberlaMission.png'

const Misson = () => {
    return (
        <>
            <div className='position-relative'>
                <div className='position-absolute headertopleft'>
                    <img src={MissonBluer1} className='w-100' alt="" />
                </div>
                <div className='position-absolute headertopright end-0'>
                    <img src={MissonBluer2} className='w-100' alt="" />
                </div>
                <div className='myContainer position-relative z-2'>
                    <Row className='align-items-center py-30 py-sm-40 pb-md-100 pb-lg-200 overflow-hidden'>
                        <Col md={6} className='d-flex justify-content-center px-4 px-lg-0' data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                            <div className='gradianBox'>
                                <img src={MissonUmb} alt="MissionUmberla" className='missionUmb' />
                            </div>

                        </Col>
                        <Col md={6} className='pt-4 pt-md-0'>
                            <div className='ps-lg-5'>
                                <h2 className='fw_extraBold fs_xl color_white mb-0 text-center text-md-start animation-word'>Our <span className='color_primary animation-word1'>Mission</span></h2>
                                <p className='fw_regular fs_2sm color_white mb-0 py-3 pt-lg-4 pb-lg-2 text-center text-md-start'>We understand that one of the biggest concerns for early-stage investors is that it can quickly become stressful, overwhelming, and especially extremely time consuming. It isn’t easy to balance a full time job, family, and an active investment portfolio, especially when just starting out.</p>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <button className='outline-btn fs_sm color_white fw_medium mt-lg-5 border-0 hoverEffect position-relative'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Misson