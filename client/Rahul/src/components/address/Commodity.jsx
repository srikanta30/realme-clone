import React, { useState } from 'react'
import "../../styles/address.css"

function Commodity() {
    const arr = [{
        id:1,
        name: "realme Type-C Cable",
        src: "./address/cable.png",
        price: 299,
    }]
    return (
        <div className='commodity_div'>
            <h2 className="commodity_list">Commodity List</h2>
            <div className="commodity_list_1">
                <div className="commodity_list_1_1">
                    <img src="./address/cable.png" alt="" className="commodity_list_2" />
                    <div className="commodity_list_2_1">
                        <p>realme Type-C Cable</p>
                        <p style={{ color: "#666666" }}>Black and Yellow</p>
                    </div>
                </div>
                <div className="commodity_list_1_2">
                    <div className="commodity_list_3">₹299</div>
                    <div className="commodity_list_3_1">1</div>
                    <div className="commodity_list_3_2">₹299</div>
                </div>
            </div>
        </div>
    )
}

export default Commodity
