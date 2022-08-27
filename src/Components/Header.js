import React, { useRef } from 'react';
import './Header.css'
// import {Link } from 'react-router-dom';
import { useGlobalContext } from './Main';


const Header = () => {

const {searchNews}=useGlobalContext();
const name=useRef(null);
  return (
    <>  
    
    <div className="container-fluid mt-0  " id="up" style={{backgroundColor:"rgb(22,50,99)",color:"white",height:"150px"}}>
<div className="container-fluid pt-3 d-flex justify-content-between   " >
  <h1 className="  ">TECH NEWS APP</h1>
  <form className="   " >
    <input type="text" placeholder="  Search Here..."  ref={name} ></input> 
     <button onClick={(event)=>{event.preventDefault(); searchNews(name.current.value)}} >Find News</button>
  </form>
</div>
<br />
<hr className="ms-5"/>

<div className="container">
  <ul className="d-flex  justify-content-center">
    <li className="btn btn-primary" onClick={(event)=>{event.preventDefault(); searchNews("General")} }>
General
    </li>
    <li className="btn btn-info" onClick={(event)=>{event.preventDefault(); searchNews("Technology")} }>
Technology
    </li>
    <li className="btn btn-danger" onClick={(event)=>{event.preventDefault(); searchNews("Sports")} }>
Sports
    </li>
    <li className="btn btn-success" onClick={(event)=>{event.preventDefault(); searchNews("Entertainment")} }>
Entertainment
    </li>
    <li className="btn btn-dark" onClick={(event)=>{event.preventDefault(); searchNews("Health")} }>
Health
    </li>
    <li className="btn btn-warning" onClick={(event)=>{event.preventDefault(); searchNews("Science")} }>
Science
    </li>
    <li className="btn btn-light" onClick={(event)=>{event.preventDefault(); searchNews("Business")} }>
Business
    </li>
  
 
  </ul>
</div>
    </div>
    
  </>

  )
}

export default Header;

