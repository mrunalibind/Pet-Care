import React from 'react'
import style from "./Home.module.css"
function Footer() {
  return (
    <div>
        <button onClick={()=>{
            window.scrollTo({top:0,behavior:"smooth"})
        }} className={style.up}>^</button>
        
        <div className={style.foot}>
            <div>
                <h4>Pet Advice</h4>
                <p>Dog Advice</p>
                <p>Cat Advice</p>
                <p>Rabbit Advice</p>
                <p>Small Pet Advice</p>
                <p>Fish Advice</p>
                <p>Reptile Advice</p>
            </div>
            <div>
                <h4>About Us</h4>
                <p>Contact Us</p>
                <p>Terms and Conditions</p>
                <p>Human Rights and Modern Slavery Statement</p>
                <p>Privacy Policy</p>
                <p>Vacancies</p>
            </div>
            <div>
                <p>Partnering with</p>
                <div>
                    <div>
                        <h1 style={{color:"rgb(70, 134, 11)"}}>Pets</h1>
                        <h4>at Home</h4>
                    </div>
                    <div><h4>Vets<span> for </span><span style={{color:"rgb(70, 134, 11)"}}>Pets</span></h4></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer