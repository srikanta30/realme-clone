import React from 'react'
import "../../Styles/payment.css"
import Counter from '../Address/Counter';
import Dates from '../Address/Date.jsx';
import Times from '../Address/Time';

function Payments() {

    return (
        <div className='payment_main_div'>

            <div className="order_placed">
                <div className="order_placed1">
                    <img src="../Payment/Tick_mark_yellow.png" alt="" className='yellow_tick' />
                    <hr className='hr_style' />
                    <div className="circle1"  ></div>
                    <hr className='hr_style' />
                    <div className="circle1" ></div>
                    <hr className='hr_style' />
                    <div className="circle1" ></div>
                </div>
                <div className="order_placed2">
                    <div className='timer_for_ordered'>
                        <div className='timer_for_ordered1'>Ordered Placed</div>
                        <div className='timer_for_ordered2'>
                            <Dates/>
                            <div style={{paddingLeft:"10px"}}><Times /></div> 
                        </div>
                    </div>
                    <div style={{color: "#666666"}}>Order Confirmation</div>
                    <div style={{color: "#666666"}}>Order Shiped</div>
                    <div style={{color: "#666666"}}>Order Delivered</div>
                </div>
            </div>

            <div className="payment_within">
                <div className="payment_within1">Please complete the payment within <Counter /> </div>
                <div className="payment_within2">Amount : ₹ 402</div>
            </div>

            <div className="address_detail">
                <div className="address_detail1">Name: Full name Adress:B201,building,area</div>
                <div className="address_detail2">Show details</div>
            </div>

            <div className="card_detail">
                <div className="card_detail_1">
                    <div className="card_detail_1_1">choose your payment method</div>
                    <div className="card_detail_1_2">
                        <img src="../Payment/security.png" alt="" className="security1" />
                        <div className="security2">100% Security guranteed</div>
                    </div>
                </div>
                <div className="card_detail_2">
                    <div className="card_detail_2_1">
                        <div className="debit_card">Credit / Debit card</div>
                        <div className="debit_card">Wallet</div>
                        <div className="debit_card">Net Banking</div>
                        <div className="debit_card">EMI</div>
                        <div className="debit_card">UPI</div>
                        <div className="debit_card">Cash on Delivery</div>
                    </div>
                    <div className="card_detail_2_2">
                        <div className="addnewcard">Add New Card</div>
                        <div className="card_input_1">
                            <input type="text" className="card_number" placeholder='Card number' />
                            <input type="date" className="card_number" placeholder='Expiry' />
                        </div>
                        <div className="card_input_2">
                            <input type="text" className="card_number" placeholder='Card holder name' />
                            <input type="password" className="card_number" placeholder='CVV' />
                        </div>
                        <div className="card_input_3">
                            <input type="checkbox" className="checkbox_payment" />
                            <div className="savecardproperty" style={{paddingLeft: "20px"}}>Save card securely for future payments</div>
                        </div>
                        <div className="knowmore"><a href="/">Know More</a></div>
                        <div className="paynow" onClick={()=>{window.location.href="/success"}}>Pay Now</div>
                        <div className="thirdparty">You will be now redirected to a third-party website to complete the transaction.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
