import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import Card from './Card';
function Companion() {
    const [fetchData,setFetchData]=useState([]);
    const [pageNumber,setPageNumber]=useState(1)
    useEffect(()=>{
        fetch(`https://639af865d514150197465a63.mockapi.io/project?page=${pageNumber}&limit=5`)
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data)
                    setFetchData(data)
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
    },[pageNumber])
  return (
    <div>
        <p className={style.com}>Companion Care &gt; <span>Search</span></p>
        <p style={{fontSize:"20px",marginTop:"10px"}}>Please enter search keyword</p>
        <br />
        <div style={{border:"1px solid grey",width:"30%",margin:"auto"}}>
        <input style={{outline:"none",border:"none",fontSize:"15px"}} type="text" placeholder='Search'/>
        <AiOutlineSearch style={{fontSize:"20px",marginTop:"5px"}}/>
        </div>
<br />
        <div style={{display:"flex",backgroundColor:"rgb(245, 244, 242)"}}>
            <div style={{width:"50%",border:"1px solid red"}}>Sidebar</div>
            <div>{
                fetchData.map((ele)=>(
                    <Card key={ele.id} prop={ele}/>
                ))
            }</div>
        </div>

        <div className={style.pagi}>
            <div><button disabled={pageNumber===1} onClick={()=>setPageNumber(pageNumber-1)}>Previous</button></div>
            <div><p>{pageNumber}</p></div>
            <div><button disabled={pageNumber===5} onClick={()=>setPageNumber(pageNumber+1)}>Next</button></div>
        </div>

    </div>
  )
}

export default Companion