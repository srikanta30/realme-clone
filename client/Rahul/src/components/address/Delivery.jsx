import React from 'react'
import "../../styles/address.css"

function Delivery() {
    return (
        <div className='delivery_main_div'>
            
            <div className="delivery_div_1">
                <div className="delivery_div_1_1">Delivery Service</div>
                <div className='delivery_div_1_2'>
                    <img src="./address/exclamation.png" alt="" />
                    It is estimated to be delivered withing 2-10 days
                </div>
            </div>

            <div className="rapid_delivery">Rapid Delivery</div>
        </div>
    )
}

export default Delivery
