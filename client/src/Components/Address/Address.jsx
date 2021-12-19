import React, { useState } from 'react'
import "../../Styles/address.css"

function Address() {
    const [formData,setFormData] = useState({
        username: "",
        mobileno: "",
        pincode: "",
        city: "",
        state: "",
        address: "",
        email: "",
        landmark: "",
        default: "",
    })

    const handleChangeform = (e) => {
        const {name,value,type,checked} = e.target;
        // console.log(name,value,type,checked);
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked: value
        })
        console.log("formdata",formData);
    }
    // console.log(formData);
    const handleSubmitform = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className='address_main_div'>
            <div className="address_div_1">
                Address
            </div>

            <form action="" className="address_input_div" onSubmit={handleSubmitform}>
                <input onChange={handleChangeform} type="text" name="username" className="id_inp" placeholder='Full name' />
                {/* <div style={{display: "inline-block",height: "48px",width: "48px",background: "gray"}}></div> */}
                <input onChange={handleChangeform} type="number" name="mobileno" className="id_inp_2" placeholder='Mobile Number' /><br></br>
                <input onChange={handleChangeform} type="number" name="pincode" className="id_inp" placeholder='Pincode' /><br></br>
                <input onChange={handleChangeform} type="text" name="city" className="id_inp" placeholder='City/Town' />
                <input onChange={handleChangeform} type="text" name="state" className="id_inp_2" placeholder='State/province/district' /><br></br>
                <input onChange={handleChangeform} type="text" name="address" className="id_inp_1" placeholder='Address example(preffered): Flat/House No.. Floor, Building, Street' /><br></br>
                <input onChange={handleChangeform} type="email" name="email" className="id_inp" placeholder='Please enter required email' />
                <input onChange={handleChangeform} type="text" name="landmark" className="id_inp_2" placeholder='Landmark Example' /><br></br>
                <input onChange={handleChangeform} type="checkbox" name="default" className="checkbox_inp" /> Set as default<br></br>
                <input type="submit"  value="Save" id="" className="save_div" />
                <button onClick={() => {
                    return setFormData("");
                }} className="cancle_div">Cancel</button>
            </form>
        </div>
    )
}

export default Address
