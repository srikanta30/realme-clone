import React from 'react'
import Addressedit from './Addressedit'
import Commodity from './Commodity'
import Coupan from './Coupan'
import Delivery from './Delivery'
import TotalAmount from './TotalAmount'

function Address2() {
    return (
        <div className='final_address_1'>
            <Addressedit />
            <Delivery />
            <Commodity />
            <Coupan />
            <TotalAmount />
        </div>
    )
}

export default Address2
