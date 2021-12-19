import React from 'react'
import "../../Styles/address.css"

function Addressedit() {
    return (
        <div className='Address_edit'>
            <div className="edit_1">Address</div>
            <div className="edit_2">
                <div className="edit_2_1">
                    <div className='namedefault'>
                        <div style={{height:"26px"}}>Name</div>
                        <div style={{height:"26px",width: "50px",background:"#FFC625",padding:"5px"}}>Default</div>
                    </div>
                    <div style={{height:"26px",paddingLeft: "23px",paddingBottom:"23px"}}>Card Number</div>
                    <div style={{height:"26px",paddingLeft: "23px",paddingBottom:"23px",color:"#666666"}}>Full Address</div>
                </div>
                <div className="edit_2_2">
                    <img src="../Address/plussign.png" alt="" style={{cursor:"pointer"}} />
                    <div style={{height:"26px",color:"#666666"}}>Add a new address</div>
                </div>
            </div>
        </div>
    )
}

export default Addressedit
