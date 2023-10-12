import React from 'react'
import { useNavigate} from "react-router-dom";

function Card({prop}) {
  let { petName, head, title, description, img, id } = prop;

    const navigate=useNavigate();
  return (
    <div
    onClick={() => navigate(`/enquiries-and-appointment/${id}`)}
    style={{
      cursor: "pointer",
      display: "flex",
      width: "90%",
     
      margin: "25px",
      height: "150px",
      backgroundColor: "white"
    }}
  >
        <div><img style={{height:"150px"}} src={img} alt={petName} /></div>
        <div style={{textAlign:"start",marginLeft:"20px",marginTop:"20px"}}>
            <h5>{head}</h5>
            <h2 style={{fontSize:"20px",fontWeight:"400"}}>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card