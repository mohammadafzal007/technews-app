import React from 'react'
import { useGlobalContext } from './Main'

const Footer= () => {
    const {page,getNext,getPrev}=useGlobalContext();
  return (
    <div className="container-fluid d-flex justify-content-center mb-5">
        <button href="#up" disabled={page<=1} className="btn btn-primary " onClick={()=>getPrev()}>PREV</button>
        <p className="me-3 ms-3 mt-2">{page} of 5</p>
        <button href="#up" disabled={page === 5} className=" btn btn-primary" onClick={()=>getNext()}>NEXT</button>
    </div>
  )
}

export default Footer
