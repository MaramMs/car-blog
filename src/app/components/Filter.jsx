// import React from 'react'
// import { Col, Row } from 'react-bootstrap';
// import { BsFilterLeft } from "react-icons/bs";
// import { IoIosArrowDown } from 'react-icons/io';


// const Filter = () => {
//   return (
//    <Row className=' justify-between items-center'>
//     <Col className='flex gap-2'>
//     <BsFilterLeft className='text-[#1B2532]'/>
//     <p className='text-[#1B2532] font-medium text-[18px]'>ترتيب حسب</p>

//     </Col>
//     <Col>
// <IoIosArrowDown className='text-[#1B2532]'/>

//     </Col>
//    </Row>
//   )
// }

// export default Filter



import React from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowDown } from 'react-icons/io';

const Filter = () => {
  return (
    <div className="flex gap-[24px] text-[#1B2532]">
    <div className='flex gap-[8px] items-center'>
          <BsFilterLeft className='text-[24px] text-[#1B2532]' />
      <p className="font-medium text-[18px] m-0 text-[#1B2532] hidden md:block">ترتيب حسب</p>
    </div>
      <IoIosArrowDown  className='text-[#1B2532] text-[24px] hidden md:block'/>
    </div>
  )
}

export default Filter
