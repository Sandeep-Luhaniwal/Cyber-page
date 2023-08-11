import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Work = () => {
    return (
        <>
            <div className='myContainer my-30 my-sm-40 mt-md-100 mt-lg-150 position-relative z-2'>
                <h2 className='fw_extraBold fs_xl color_white mb-0 text-center mb-lg-1 pb-lg-2'>How it <span className='color_primary'>works</span></h2>
                <Row className='py-3 py-sm-4 py-lg-5 justify-content-center'>
                    <Col lg={3} md={4} sm={6} className='py-3 pt-sm-0 pb-md-0 d-flex justify-content-center'>
                        <div className='cardWork w-290'>
                            <div className='d-flex flex-column align-items-center pt-4 '>
                                <div className='circle bg_primary d-flex justify-content-center align-items-center z-2 my-2 '>
                                    <h3 className='fw_regular fs_lg color_white mb-0'>01</h3>
                                </div>
                                <div className="min-h-60 d-flex align-items-center mt-2">
                                    <p className='fw_bold fs_md color_white text-center mb-0 px-2'>Mint NFT</p>
                                </div>
                                <div className="min-h-110 mt-3">
                                    <p className='color_white fw_regular fs_sm mb-0 px-3 text-center'>You must own our NFT to connect to direct management or participate in governance</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='py-3 pt-sm-0 pb-md-0 d-flex justify-content-center'>
                        <div className='cardWork w-290'>
                            <div className='d-flex flex-column align-items-center pt-4'>
                                <div className='circle bg_primary d-flex justify-content-center align-items-center z-2 my-2'>
                                    <h3 className='fw_regular fs_lg color_white mb-0'>02</h3>
                                </div>
                                <div className="min-h-60 d-flex align-items-center mt-2">
                                    <p className='fw_bold fs_md color_white text-center mb-0 px-2'>Verify NFT Ownership</p>
                                </div>
                                <div className="min-h-110 mt-3">
                                    <p className='color_white fw_regular fs_sm mb-0 px-3 text-center'>Only Cyber Drops that are have verified are eligible to be connected under direct management</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='py-3 pb-sm-0 pt-md-0 d-flex justify-content-center'>
                        <div className='cardWork w-290'>
                            <div className='d-flex flex-column align-items-center pt-4'>
                                <div className='circle bg_primary d-flex justify-content-center align-items-center z-2 my-2'>
                                    <h3 className='fw_regular fs_lg color_white mb-0'>03</h3>
                                </div>
                                <div className="min-h-60 d-flex align-items-center mt-2">
                                    <p className='fw_bold fs_md color_white text-center mb-0 px-2'>Link API to your account</p>
                                </div>
                                <div className="min-h-110 mt-3">
                                    <p className='color_white fw_regular fs_sm mb-0 px-3 text-center'>Only HODLers that submit their API key and secret will be under direct management</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='py-3 pb-sm-0 pt-lg-0 d-flex justify-content-center'>
                        <div className='cardWork w-290'>
                            <div className='d-flex flex-column align-items-center pt-4'>
                                <div className='circle bg_primary d-flex justify-content-center align-items-center z-2 my-2'>
                                    <h3 className='fw_regular fs_lg color_white mb-0'>04</h3>
                                </div>
                                <div className='min-h-60 d-flex align-items-center mt-2'>
                                    <p className='fw_bold fs_md color_white text-center mb-0  px-2'>Passive Income for life</p>
                                </div>
                                <div className="min-h-110 mt-3">
                                    <p className='color_white fw_regular fs_sm mb-0 px-3 text-center'>As long as your HODL your Cyber Drop, you will be connected under direct management</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Work