import React from 'react'
import style from "./Home.module.css"

function Enqu_Appoin() {
  return (
    <div className={style.EnquiDiv} >
      <p className={style.com}>Companion Care &gt; <span>Enquiries and Appointments</span></p>
      <br />
      <h1 className={style.heading}>Enquiries and appointments request</h1>
      <p className={style.EnquApppara}>Please complete the form below to contact your local Companion Care practice. A member of the team will be in touch to discuss the best way of supporting you and your pet during this time. </p>
      
      <p className={style.EnquApppara}>For appointments within the next 24 hours, we ask that you call the practice during opening hours. In case of emergencies please telephone the practice immediately where you will be able to obtain appropriate advice.</p>
     <br />
      <form>
        
        <h5>Are you an existing or new customer ?</h5>
        <span><input type="radio" name="" id="" value="New" />New</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span><input type="radio" name="" id="" value="New" />Existing</span>
        
        <h5>First Name *</h5>
        <input className={style.inputTags} type="text" name="" id="" required/>
       
        <h5>Surname *</h5>
        <input className={style.inputTags} type="text" name="" id="" required/>
        
        <h5>Postcode *</h5>
        <input className={style.inputTags} type="text" name="" id="" required/>
        
        <h5>Address *</h5>
        <input className={style.inputTags} type="text" name="" id="" required/>
        
        <h5>City *</h5>
        <input className={style.inputTags} type="text" name="" id="" required/>
        
        <h5>Email *</h5>
        <input className={style.inputTags} type="text" name="" id="" required/>
        
        <h5>Mobile number *</h5>
        <input className={style.inputTags} type="text" name="" id="" required/>
        
        <h5>Enquiry</h5>
        <input style={{marginLeft:"50px"}} type="radio" name="" id="" value="New" />
        <span>Appointment Request</span>
        <input type="radio" name="" id="" value="New" />
        <span>General Enquiry</span>
        
        <h5>Select a preffered date *</h5>
        <input className={style.inputTags} type="date" name="" id="" required/>
        <h5>Preffered Time *</h5>
        <input className={style.inputTags} type="time" name="" id="" required/>
        <br />
      {/* Take PetSpecies from the url param */}
        <h5>Pet Age *</h5>
        <input className={style.inputTags} type="number" name="" id="" required/>
        <br />
        <h5>Reason for Appointment *</h5>
        <select name="" id="" required>
          <option value="">Select...</option>
          <option value="">Nurse Consultation</option>
          <option value="">Vaccination</option>
          <option value="">Neutering</option>
          <option value="">Dental Check</option>
          <option value="">Flea and worm</option>
        </select>
        <br />
        <h5>By submitting this request: *</h5>
        <p style={{width:"55%",margin:"auto",textAlign:"start",marginTop:"6px",fontSize:"11px"}}><input type="checkbox" name="" id="" required/>
        I agree to be bound by the Companion Care Privacy Policy (which explains how my data will be used); and request that Companion Care uses my details to contact me to discuss my above query.*
        </p>
        <br />
        <input className={style.submitBtn} type="submit" value="Submit" />
        
      </form>
    </div>
  )
}

export default Enqu_Appoin