import React, { useState } from 'react'
import favIcon from "../Images/Pet_Care.png"
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
import {IoLocationSharp} from "react-icons/io5"
import {BiSolidUser} from "react-icons/bi"
import {GiHamburgerMenu} from "react-icons/gi"


function Navigation() {
 const [show,setShow]=useState(false)
  
  return (
    <div>
        <nav>
            <div id={style.imgDiv}><Link to="/"><img id={style.logo} src={favIcon} alt="PetImage" /></Link></div>
            <div className={style.disp}>
              <div style={{display:"flex",width:"130px",justifyContent:"space-between"}}><IoLocationSharp style={{marginTop:"3px"}}/><h4 style={{marginRight:"5px"}}>Find Practice</h4></div>
              <div>

              </div>
              <div className={style.regis}>
                <div><Link to="/register">
                  
                  <BiSolidUser className={style.user}/>
                  </Link></div>
                  
                <div onClick={()=>setShow(!show)} style={{display:"flex",flexDirection:"column"}}>
                  <div id='ham' className={style.ham} style={{display:"flex",marginLeft:"10px",border:"1px solid grey",borderRadius:"10px",padding:"8px"}}><h3>MENU</h3><GiHamburgerMenu style={{marginTop:"5px",marginLeft:"6px"}}/></div>
                  
                </div>
                
                {
                  show?<div className={style.hambur}>
                  <p><Link className={style.menuLink} to="/companionCare">Companion Care</Link></p>
                  
                  <p><Link className={style.menuLink} to="/enquiries-and-appointment">Enquiries and Appointments</Link></p>
                  <p>Pet Health Plans</p>
                  <p>Pet Advice</p>
                  <p>Services</p>
                  <p>Pet Symptom Checker</p>
                  
              </div>:null
                }
                
                
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation