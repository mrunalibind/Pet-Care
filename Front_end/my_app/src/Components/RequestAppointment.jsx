import React from 'react'
import style from "./Home.module.css"

function RequestAppointment() {
  return (
    <div>
        <p className={style.com}>Companion Care &gt; <span>Enquiries and Appointments &gt; <span>Enquiries and Appointments thank you</span></span></p>
        <p className={style.EnquApppara}>Thank you for your contact request at your local Companion Care practice.  A member of our team will contact you shortly.</p>
        <br />
        <h5 className={style.EnquApppara}>Please note that requests are not monitored outside of practice opening hours so for urgent queries or emergencies, please telephone your nearest practice.</h5>
    </div>
  )
}

export default RequestAppointment