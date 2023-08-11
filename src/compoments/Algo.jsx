import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AlgoImg1 from '../assets/imges/webp/AlgoImg1.webp'
import AlgoImg2 from '../assets/imges/webp/AlgoImg2.webp'
import AlgoImg3 from '../assets/imges/webp/AlgoImg3.webp'


const Algo = () => {
    return (
        <>
            <div className='myContainer z-2 position-relative overflow-hidden'>
                <Row className='align-items-center py-30 py-sm-40 pt-md-100 pt-lg-150 justify-content-between '>
                    <Col md={6} className='pt-4 pt-md-0 order-1 order-md-0'  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <h2 className='fw_extraBold fs_xl color_white mb-0 text-center text-md-start'>Our <span className='color_primary'>Algo</span></h2>
                        <p className='fw_regular fs_2sm color_white mb-0 pt-3 mt-1  text-center text-md-start'>We have perfected our algorithm, which prioritizes a low risk and consistent profit stream without the need for daily micromanagement. While most trading algorithms can’t stand up against a volatile or risky market, our algorithm thrives in those conditions. Early-stage testers have seen a consistent flow of income with minimal ups and downs. Our algorithm has been in the works for YEARS. This has given us the time to rigorously backtest and release any needed hotfixes. As of early March 2022, we have close to a quarter of a million under direct management!</p>
                    </Col>
                    <Col md={6} lg={5} className='d-sm-flex py-sm-3 py-md-0 order-0'>
                        <div >
                            <div className='me-sm-3 my-3 my-sm-0 cardAlgo' data-aos="fade-up" data-aos-duration="1500">
                                <img src={AlgoImg1} className='w-100 cardAlgoImg' alt="headerlogo" />
                            </div>
                            <div className='me-sm-3 mt-3 pb-sm-0 cardAlgo' data-aos="fade-down" data-aos-duration="1500">
                                <img src={AlgoImg2} className='w-100 cardAlgoImg' alt="headerlogo" />
                            </div>
                        </div>
                        <div className='ms-sm-2 d-flex align-items-center py-3 py-sm-0'>
                            <div className="cardImgAlgo" data-aos="fade-left" data-aos-duration="1500">
                                <img src={AlgoImg3} className='w-100 cardAlgoImgCoin' alt="headerlogo" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Algo