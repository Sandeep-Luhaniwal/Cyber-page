import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RoadmapImg1 from '../assets/imges/webp/RoadmapImg1.webp'
import RoadmapImg2 from '../assets/imges/webp/RoadmapImg2.webp'
import RoadmapImg3 from '../assets/imges/webp/RoadmapImg3.webp'
import RoadmapImg4 from '../assets/imges/webp/RoadmapImg4.webp'
import RoadmapImg5 from '../assets/imges/webp/RoadmapImg5.webp'
import RoadmapImg6 from '../assets/imges/webp/RoadmapImg6.webp'
import RoadmapImg7 from '../assets/imges/webp/RoadmapImg7.webp'
import RoadmapImg8 from '../assets/imges/webp/RoadmapImg8.webp'
import Umberla1 from '../assets/imges/png/Umberla1.png'
import Umberla2 from '../assets/imges/png/Umberla2.png'
import Umberla3 from '../assets/imges/png/Umberla3.png'


const RoadMap = () => {
    return (
        <>
            <h2 className='fw_extraBold fs_xl color_white text-center pb-lg-3 mb-0 mb-lg-3 pt-80 pt-lg-0 pt-lg-160 position-relative z-2'>Road<span className='color_primary'>Map</span></h2>
            <div className='bgtimeline position-relative'>
                <img src={Umberla1} alt="bluer" className='Umberla1' />
                <img src={Umberla2} alt="bluer" className='Umberla2' />
                <img src={Umberla3} alt="bluer" className='Umberla3' />
                <div className="myContainer pb-100 position-relative z-2">
                    <div className='timeLine '>
                        <Row className='justify-content-sm-end justify-content-center position-relative'>
                            <div className='timeLine_right d-none d-sm-block'><img src={RoadmapImg1} className='RoadmapImg1' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start'>March 2022</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular pt-18'>1000 Drops Launch on Ethereum</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-end justify-content-md-start pt-108 position-relative'>
                            <div className='timeLine_right d-none d-sm-block d-md-none'><img src={RoadmapImg2} className='RoadmapImg' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start text-md-end'>March 2022</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular text-md-end pt-18'>1000 Drops Launch on Ethereum</p>
                            </Col>
                            <div className='timeLine_left d-none d-md-block'><img src={RoadmapImg2} className='RoadmapImg' alt="" />
                                <div className='circle_timeline_left position-relative'></div>
                            </div>
                        </Row>
                        <Row className='justify-content-sm-end justify-content-center pt-108 position-relative'>
                            <div className='timeLine_right d-none d-sm-block'><img src={RoadmapImg3} className='RoadmapImg' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start'>March 2022</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular pt-18'>Creation of Treasury</p>
                            </Col>
                        </Row >
                        <Row className='justify-content-end justify-content-md-start pt-108 position-relative'>
                            <div className='timeLine_right d-none d-sm-block d-md-none'><img src={RoadmapImg4} className='RoadmapImg' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start text-md-end'>April 2022</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular text-md-end pt-18'>Our First Airdrop</p>
                            </Col>
                            <div className='timeLine_left d-none d-md-block'><img src={RoadmapImg2} className='RoadmapImg' alt="" />
                                <div className='circle_timeline_left position-relative'></div>
                            </div>
                        </Row>
                        <Row className='justify-content-sm-end justify-content-center pt-108 position-relative'>
                            <div className='timeLine_right d-none d-sm-block'><img src={RoadmapImg5} className='RoadmapImg' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start'>June 2022</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular pt-18'>Major Collabs</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-end justify-content-md-start pt-108 position-relative'>
                            <div className='timeLine_right d-none d-sm-block d-md-none'><img src={RoadmapImg6} className='RoadmapImg' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start text-md-end'>Sometime in Q3</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular text-md-end pt-18'>Cyber Celebs come on Ethereum</p>
                            </Col>
                            <div className='timeLine_left d-none d-md-block'><img src={RoadmapImg2} className='RoadmapImg' alt="" />
                                <div className='circle_timeline_left position-relative'></div>
                            </div>
                        </Row>
                        <Row className='justify-content-sm-end justify-content-center pt-108 position-relative'>
                            <div className='timeLine_right d-none d-sm-block'><img src={RoadmapImg7} className='RoadmapImg' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start'>Sometime in Q3</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular pt-18'>Streetwear + Merch</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-end justify-content-md-start pt-108 position-relative'>
                            <div className='timeLine_right d-none d-sm-block d-md-none'><img src={RoadmapImg8} className='RoadmapImg' alt="" />
                                <div className='circle_timeline position-relative'></div>
                            </div>
                            <Col sm={8} md={4}>
                                <h4 className='mb-0 color_white fs_2md fw_semiBold text-center text-sm-start text-md-end'>Sometime in Q4</h4>
                                <p className='text-center text-sm-start mb-0 color_white fs_sm fw_regular text-md-end pt-18'>Enhanced Partnerships</p>
                            </Col>
                            <div className='timeLine_left d-none d-md-block'><img src={RoadmapImg2} className='RoadmapImg' alt="" />
                                <div className='circle_timeline_left position-relative'></div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoadMap