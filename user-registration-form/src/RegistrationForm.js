import React from 'react';

function RegistrationForm(props) {
    return (
        <div><h4>Personal Details</h4>
        <form>
            <div>
                <label for="name">Name</label>
                    <div class="name">
                        <input type="text" name="name" id="name" placeholder="Enter Name" />
                    </div>
            </div>
            <div>
                <label for="birth">Date of Birth or Age</label>
                    <div class="birth">
                        <input type="text" name="birth" id="birth" placeholder="DD/MM/YY or Age in years" />
                    </div>
            </div>
            <div>
                <label for="mobile">Name</label>
                    <div class="mobile">
                        <input type="text" name="mobile" id="mobile" placeholder="Enter Mobile" />
                    </div>
            </div>
            <div>
                <label for="sex">Enter sex</label>
                    <div class="sex">
                    <select id="sex" name="sex">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>
            </div>
            <div>
                <label for="Govt-id">Govt Issued ID</label>
                    <div class="govt-id">
                    <select id="id" name="id" >
                        <option value="ID type" >ID type</option>
                        <option value="Female">Female</option>
                    </select>
                        <input type="text" name="govt-id" id="govt-id" placeholder="Enter Govt ID" />
                    </div>
            </div>
            <div><h3>Contact Details</h3>
                <label for="guardian">Guardian Details</label>
                <div class="guardian">
                <select id="id" name="id" >
                    <option value="" disabled selected hidden>Enter Label</option>
                </select>
                    <input type="text" name="guardian" id="guardian" placeholder="Enter Guardian name" />
                    </div>
            </div>
            <div>
                <label for="email">Email</label>
                    <div class="email">
                        <input type="email" name="email" id="email" placeholder="Enter Email" />
                    </div>
            </div>
            <div>
                <label for="emergency">Emergency Contacy Number</label>
                    <div class="emergency">
                        <input type="emergency" name="emergency" id="emergency" placeholder="Enter Emergency No" />
                    </div>
            </div>
            <div><h3>Address Details</h3>
                <label for="address">Address</label>
                    <div class="address">
                        <input type="address" name="address" id="address" placeholder="Enter Address" />
                    </div>
            </div>
            <div>
                <label for="state">State</label>
                    <div class="state">
                    <select id="state" name="state" >
                    <option value="" disabled selected hidden>Enter state</option>                   
                    <option value="state">Karnataka</option>
                </select>      
                    </div>
            </div>
            <div>
                <label for="city">City</label>
                    <div class="City">
                    <select id="city" name="city" >
                    <option value="" disabled selected hidden>Enter city town village</option>                                           <option value="city">state</option>
                    <option value="city">Karnataka</option>
                </select>      
                    </div>
            </div>
            <div>
                <label for="country">Country</label>
                    <div class="country">
                    <select id="country" name="country" >
                        <option value="country">India</option>
                        <option value="country">United States</option>
                </select>      
                    </div>
            </div>
            <div>
                <label for="pincode">Pincode</label>
                    <div class="pincode">
                        <input type="pincode" name="pincode" id="emergency" placeholder="Enter Pincode" />
                    </div>
            </div>
            <div><h3>Other Details</h3>
                <label for="occupation">Occupation</label>
                    <div class="occupation">
                        <input type="occupation" name="occupation" id="occupation" placeholder="Enter occupation" />
                    </div>
            </div>
            <div>
                <label for="religion">Religion</label>
                    <div class="religion">
                    <select id="religion" name="religion" >
                        <option value="" disabled selected hidden>Enter Religion</option>                                          
                        <option value="Islam">Islam</option>
                        <option value="hindu">hindu</option>
                </select> 
                    </div>
            </div>
            <div>
                <label for="marital-status">MaritalStatus</label>
                    <div class="marital-status">
                    <select id="marital-status" name="marital-status" >
                    <option value="" disabled selected hidden>Enter Marital Status</option>                                          
                        <option value="single">single</option>
                        <option value="married">married</option>
                </select> 
                    </div>
            </div>
            <div>
                <label for="blood-group">Blood Group</label>
                    <div class="blood-group">
                    <select id="blood-group" name="blood-group">
                        <option value="" disabled selected hidden>Enter Group</option>                                          
                        <option value="A">A</option>
                        <option value="B">B</option>
                </select>                    
                 </div>
            </div>
            <div>
                <label for="nationality">nationality</label>
                    <div class="nationality">
                    <select id="nationality" name="nationality" >
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                </select> 
                    </div>
            </div>
    </form>
    </div>
  
    );
}

export default RegistrationForm;