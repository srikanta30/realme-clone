import React from 'react'
import "../../Styles/address.css"

function Addressedit() {
    return (
        <div className='Address_edit'>
            <div className="edit_1">Address</div>
            <div className="edit_2">
                <div className="edit_2_1">
                    <div className='namedefault'>
<<<<<<< HEAD
                        <div style={{height:"26px"}}>Srikanta Banerjee</div>
                        <div style={{background:"#FFC625",padding:"7px"}}>Default</div>
                    </div>
                    <div style={{paddingLeft: "23px",paddingBottom:"23px"}}>#### - #### - 5678</div>
                    <div style={{paddingLeft: "23px",paddingBottom:"23px",color:"#666666"}}>Bardhaman, West Bengal</div>
=======
                        <div style={{height:"26px"}}>Name</div>
                        <div style={{background:"#FFC625",padding:"7px"}}>Default</div>
                    </div>
                    <div style={{paddingLeft: "23px",paddingBottom:"23px"}}>Card Number</div>
                    <div style={{paddingLeft: "23px",paddingBottom:"23px",color:"#666666"}}>Full Address</div>
>>>>>>> 50e0f83a64e0eb28912dd29abdc109ec8dde5a71
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
