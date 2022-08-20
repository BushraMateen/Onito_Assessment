import React from 'react';
import './RegistrationForm.css';
import { useFormik } from "formik"

function RegistrationForm() {
    
    const formik = useFormik({
        initialValues : {
            name : '',
            birth : '',
            mobile : '',
            sex : '',
            idtype : '',
            govt : '',
            guardian : '',
            email : '',
            emergrency_contact : '',
            address : '',
            state : '',
            city : '',
            country : '',
            pincode : '',
            occupation : '',
            religion : '',
            maritial_status : '',
            blood_group : '',
            nationality : ''
        }
    })
    
    
 
    return (
        <form>
             <h6>Personal Details</h6>
            <div className='personal_details'>
            <div className='Personal'>
                <label htmlfor="name">Name</label>
                    <div className="name">
                        <input type="text" name="name" id="name" placeholder="Enter Name" 
                        onChange={formik.handleChange} value={formik.values.name}/>
                    </div>
            </div>
            <div className='Birth'>
            <label htmlFor='birth'>Date of Birth or Age</label>
                    <div className="birth">
                        <input type="text" name="birth" id="birth" placeholder="DD/MM/YY or Age in Years" 
                        onChange={formik.handleChange} value={formik.values.birth}/>
                    </div>
            </div>
            <div>
                <label htmlFor='sex'>Sex </label>
                    <div className="sex">
                    <select id="sex" name="sex"
                    onChange={formik.handleChange} value={formik.values.sex}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>
            </div>
            <div className='mobile'>
                <label htmlFor='mobile'>Mobile</label>
                    <div className="mobile">
                        <input type="text" name="mobile" id="mobile" placeholder="Enter Mobile" 
                        onChange={formik.handleChange} value={formik.values.mobile}/>
                    </div>
            </div>
            <div>
                <label htmlFor='govt-id'>Govt Issued ID</label>
                    <div className="govt-id">
                    <select id="id" name="id" 
                    onChange={formik.handleChange} value={formik.values.idtype}>
                        <option value="ID-type" >ID type</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="text" name="govt-id" id="govt-id" placeholder="Enter Govt Id"
                    onChange={formik.handleChange} value={formik.values.govt}/>
                    </div>
            </div>
            </div>
            <h6>Contact Details</h6>
            <div className='contact_details'>
            <div className='guardian'>
                <label htmlFor='guardian'>Guardian Details</label>
                <div className="guardian">
                <select id="id" name="id" 
                onChange={formik.handleChange} value={formik.values.guardian}>
                    <option value="" disabled selected hidden>Enter Label</option>
                </select>
                    <input type="text" name="guardian" id="guardian" placeholder="Enter Guardian name"
                    onChange={formik.handleChange} value={formik.values.guardian} />
                    </div>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                    <div className="email">
                        <input type="email" name="email" id="email" placeholder="Enter Email" 
                        onChange={formik.handleChange} value={formik.values.email}/>
                    </div>
            </div>
            <div>
                <label htmlFor='emergency'>Emergency Contacy Number</label>
                    <div className="emergency">
                        <input type="emergency" name="emergency" id="emergency" placeholder="Enter Emergency No" 
                        onChange={formik.handleChange} value={formik.values.emergency}/>
                    </div>
            </div>
            </div>
            <h6>Address Details</h6>
            <div className='address_details'>
                <label htmlFor='address'>Address</label>
                    <div className="address">
                        <input type="address" name="address" id="address" placeholder="Enter Address" 
                        onChange={formik.handleChange} value={formik.values.address}/>
                    </div>
            <div>
                <label htmlFor='state'>State</label>
                    <div className="state">
                    <select id="state" name="state" 
                    onChange={formik.handleChange} value={formik.values.state}>
                    <option value="" disabled selected hidden>Enter state</option>                   
                    <option value="state">Karnataka</option>
                </select>      
                    </div>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                    <div className="city"
                    onChange={formik.handleChange} value={formik.values.city}>
                    <select id="city" name="city" >
                    <option value="" disabled selected hidden>Enter city town village</option>                                           
                    <option value="city">state</option>
                    <option value="city">Karnataka</option>
                </select>      
                    </div>
            </div>
            <div>
                <label htmlFor='country'>Country</label>
                    <div className="country">
                    <select id="country" name="country" 
                    onChange={formik.handleChange} value={formik.values.country}>
                        <option value="country">India</option>
                        <option value="country">United States</option>
                </select>      
                    </div>
            </div>
            <div>
                <label htmlFor='pincode'>Pincode</label>
                    <div className="pincode">
                        <input type="pincode" name="pincode" id="emergency" placeholder="Enter Pincode" 
                        onChange={formik.handleChange} value={formik.values.pincode}/>
                    </div>
            </div>
            </div>
            <h6>Other Details</h6>
            <div className='other_details'>
                <label htmlFor='occupation'>Occupation</label>
                    <div className="occupation">
                        <input type="occupation" name="occupation" id="occupation" placeholder="Enter occupation"
                        onChange={formik.handleChange} value={formik.values.occupation} />
                    </div>
            <div>
                <label htmlFor='religion'>Religion</label>
                    <div className="religion">
                    <select id="religion" name="religion" 
                    onChange={formik.handleChange} value={formik.values.religion}>
                        <option value="" disabled selected hidden>Enter Religion</option>                                          
                        <option value="Islam">Islam</option>
                        <option value="hindu">hindu</option>
                </select> 
                    </div>
            </div>
            <div>
                <label htmlFor='maritial-status'>MaritalStatus</label>
                    <div className="maritial-status">
                    <select id="marital-status" name="marital-status" 
                    onChange={formik.handleChange} value={formik.values.maritial_status}>
                    <option value="" disabled selected hidden>Enter Marital Status</option>                                          
                        <option value="single">single</option>
                        <option value="married">married</option>
                </select> 
                    </div>
            </div>
            <div>
                <label htmlFor='blood-group'>Blood Group</label>
                    <div className="blood-group">
                    <select id="blood-group" name="blood-group" 
                    onChange={formik.handleChange} value={formik.values.blood_group}>
                        <option value="" disabled selected hidden>Enter Group</option>                                          
                        <option value="A">A</option>
                        <option value="B">B</option>
                </select>                    
                 </div>
            </div>
            <div>
                <label htmlFor='nationality'>Nationality</label>
                    <div className="nationality">
                    <select id="nationality" name="nationality" 
                    onChange={formik.handleChange} value={formik.values.nationality}>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                </select> 
                    </div>
            </div>
            </div>
            
    </form>
    );
}

export default RegistrationForm;