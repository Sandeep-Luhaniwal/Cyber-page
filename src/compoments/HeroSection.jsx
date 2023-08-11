import React from 'react'
import { Col, Row } from 'react-bootstrap'
import HeaderLogo from '../assets/imges/webp/Header_logo.webp'
import heroBuler from '../assets/imges/png/heroBuler.png'


const HeroSection = () => {
  return (
    <>
      <div className='position-relative'>
        <div className='heroBuler position-absolute d-none d-xxl-block'>
          <img src={heroBuler} alt="" className='w-100' />
        </div>
        <div className='myContainer mt-80 position-relative z-2'>
          <Row className='align-items-center py-lg-70 py-30 py-sm-40 py-md-55'>
            <Col md={6} className='order-1 order-md-0 pt-4 pt-md-0'>
              <h1 className='fw_extraBold fs_xxl color_white mb-0 text-center text-md-start animation-word'>Welcome to <span className='d-lg-block color_primary animation-word1'>Cyber Drops</span></h1>
              <p className='fw_regular fs_2sm color_white mb-0 mb-lg-1 py-3 pt-lg-4 pb-lg-2  text-center text-md-start'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
              <div className='d-flex justify-content-center justify-content-md-start'>
                <button className='outline-btn hoverEffect position-relative fs_sm color_white fw_medium mt-lg-5 border-0'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Explore Now
                </button>
              </div>
            </Col>
            <Col md={6} className='d-flex justify-content-center order-0'>
              <img src={HeaderLogo} className='HeaderLogo rotate_lg' alt="headerlogo" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default HeroSection