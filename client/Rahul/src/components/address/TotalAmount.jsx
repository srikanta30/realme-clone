import React from 'react'
import "../../styles/address.css"

function TotalAmount() {
    return (
        <div className='totalamount_div'>
            <div className='totalamount_div_1'>
                <div className="total_quantity">
                    <div className='total_quantity_1' style={{color: '#666666'}}>Total Quantity</div>
                    <div className="total_quantity_2" style={{color: '#666666'}}>1</div>
                </div>
                <div className="total_quantity">
                    <div className='item_subtotal_1' style={{color: '#666666'}}>Item Subtotal</div>
                    <div className="item_subtotal_2" style={{color: '#666666'}}>₹299</div>
                </div>
                <div className="total_quantity">
                    <div className="gst_1" style={{color: '#666666'}}>Estimated GST</div>
                    <div className="gst_2" style={{color: '#666666'}}>₹53</div>
                </div>
                <div className="total_quantity">
                    <div className="discount_1" style={{color: '#666666'}}>Discount</div>
                    <div className="discount_2" style={{color: '#666666'}}>+₹0</div>
                </div>
                <div className="total_quantity">
                    <div className="shipping_1" style={{color: '#666666'}}>Shipping</div>
                    <div className="shipping_2" style={{color: '#666666'}}>+₹50</div>
                </div>
                <hr />
                <div className="total_quantity">
                    <div className="total_1" style={{color: '#666666'}}>Total</div>
                    <div className="total_2" style={{color: '#666666'}}>₹349</div>
                </div>
                <button className="place_order" style={{color: '#666666',cursor:"pointer"}}>Place Order</button>
            </div>
        </div>
    )
}

export default TotalAmount
