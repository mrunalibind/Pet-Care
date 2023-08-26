import React from 'react'

function Card({prop}) {
    let {petName,head,title,time,description,img}=prop;
    
  return (
    <div style={{display:"flex",width:"90%",margin:"auto",margin:"25px",height:"150px",backgroundColor:"white"}}>
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