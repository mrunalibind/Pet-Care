import React from 'react'
import { useNavigate} from "react-router-dom";

import style from './Home.module.css';

function Card({prop}) {
    let {petName,head,title,description,img,id}=prop;
    const navigate=useNavigate();
  return (
    <div className={style.carddiv} onClick={()=>navigate(`/enquiries-and-appointment/${id}`)}>
        <div><img style={{height:"150px"}} src={img} alt={petName} /></div>
        <div className={style.dis} style={{textAlign:"start",marginLeft:"20px",marginTop:"20px"}}>
            <h5>{head}</h5>
            <h2 style={{fontSize:"20px",fontWeight:"400"}}>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card