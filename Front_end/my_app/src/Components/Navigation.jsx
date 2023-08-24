import React from 'react'
import favIcon from "../Images/Pet_Care.png"
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
import Register from './Register'


function Navigation() {
  return (
    <div>
        <nav>
            <div id={style.imgDiv}><img id={style.logo} src={favIcon} alt="PetImage" /></div>
            <div className={style.disp}>
              <div><h4>Find Practice</h4></div>
              <div>

              </div>
              <div className={style.regis}>
                <div><Link to="/register">
                  <Register/>
                  </Link></div>
                <div><h2>MENU</h2></div>
                <div></div>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation