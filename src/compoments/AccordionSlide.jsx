import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import buler2 from '../assets/imges/png/Buler2.png'

const AccordionSlide = () => {
  return (
    <>
      <div className='position-relative'>
        <div className='Imgbluertop'>
          <img src={buler2} alt="bluer" className='w-100' />
        </div>
      </div>
      
      <div className="myContainer pt-35 pt-sm-50 pt-md-70 position-relative z-2">
        <h2 className='fw_extraBold fs_xl color_primary mb-0 text-center mb-lg-1 pb-2'>FAQ’<span className='color_white'>s</span></h2>
        <Row className='justify-content-center'>
          <Col md={11} lg={10}>
            <Accordion className='pt-3 pt-md-4 pt-lg-5'>
              <Accordion.Item eventKey="0" className='bg-black'>
                <div className='py-3 px-3 px-md-4 px-lg-5 py-md-4'>
                  <Accordion.Header><h3 className='ff_primary fw_medium fs_md color_white pe-2 mb-0'>Egestas scelerisque duis quis aliquet. Consectetur?</h3></Accordion.Header>
                  <Accordion.Body>
                    <p className='ff_primary fw_regular fs_sm color_white mb-0 pe-4 me-2 pt-2'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas<span className='d-lg-block'> libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span></p>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='bg-black my-30'>
                <div className='py-3 px-3 px-md-4 px-lg-5 py-md-4'>
                  <Accordion.Header ><h3 className='ff_primary fw_medium fs_md color_white pe-2 mb-0'>Ac nec enim amet, leo lorem quis neque vitae aliquet?</h3></Accordion.Header>
                  <Accordion.Body>
                    <p className='ff_primary fw_regular fs_sm color_white mb-0 pe-4 me-2 pt-2'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas<span className='d-lg-block'> libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span></p>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='bg-black my-30'>
                <div className='py-3 px-3 px-md-4 px-lg-5 py-md-4'>
                  <Accordion.Header ><h3 className='ff_primary fw_medium fs_md color_white pe-2 mb-0'>Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh donec?</h3></Accordion.Header>
                  <Accordion.Body>
                    <p className='ff_primary fw_regular fs_sm color_white mb-0 pe-4 me-2 pt-2'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas<span className='d-lg-block'> libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span></p>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='bg-black my-30'>
                <div className='py-3 px-3 px-md-4 px-lg-5 py-md-4'>
                  <Accordion.Header ><h3 className='ff_primary fw_medium fs_md color_white pe-2 mb-0'>Porta amet tortor nec pulvinar urna. Et blandit sit id?</h3></Accordion.Header>
                  <Accordion.Body>
                    <p className='ff_primary fw_regular fs_sm color_white mb-0 pe-4 me-2 pt-2'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas<span className='d-lg-block'> libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span></p>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className='bg-black my-30'>
                <div className='py-3 px-3 px-md-4 px-lg-5 py-md-4'>
                  <Accordion.Header ><h3 className='ff_primary fw_medium fs_md color_white pe-2 mb-0'>Tellus hendrerit fermentum ut hendrerit ac vestibulum? </h3></Accordion.Header>
                  <Accordion.Body>
                    <p className='ff_primary fw_regular fs_sm color_white mb-0 pe-4 me-2 pt-2'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas<span className='d-lg-block'> libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span></p>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AccordionSlide