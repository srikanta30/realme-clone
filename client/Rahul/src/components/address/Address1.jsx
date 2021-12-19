import React from 'react'
import Address from './Address'
import Commodity from './Commodity'
import Coupan from './Coupan'
import Delivery from './Delivery'
import TotalAmount from './TotalAmount'

function Address1() {
    return (
        <div className='final_address_1'>
            <Address />
            <Delivery />
            <Commodity />
            <Coupan />
            <TotalAmount />
        </div>
    )
}

export default Address1
