import React, { useState } from 'react'
import logo from "./logo2.jpg"
import { FaBars, FaTimes } from "react-icons/fa";
import {socials , links} from "./data"


function Navbar() {
    const [showLink , setShowLink]=useState(false)
  return (
    <nav>
        <div className="container">
            <div className="nav-logo">
                <button className='nav-toggle' onClick={()=>setShowLink(!showLink)}>
                    {showLink ? <FaTimes/> : <FaBars/> }
                </button>
                <img src={logo} alt="" />
            </div>
            
            <div className={`${showLink ? "nav-links active" : "nav-links"}`}>
                <ul className="list">
                    {
                        links.map(link=>{
                            const {id , text , url }=link
                            return(
                                <li key={id}>
                                    <a href={url}>{text}</a>

                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            
            <ul className="nav-social">
                {socials.map(social =>{
                    const {id , url , icon}=social
                    return(
                        <li key={id}>
                            <a href={url}>{icon}</a>

                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar